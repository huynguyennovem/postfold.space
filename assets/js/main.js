// Empty values skip analytics.
const CONFIG = {
  googleAnalyticsId: 'G-84XF9WYH9T',
};

(() => {
  'use strict';

  const CONSENT_KEY = 'postfold-analytics-consent';
  const privacyUrl = new URL('../../privacy/#website', document.currentScript.src).href;

  const readConsent = () => {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch {
      return null;
    }
  };

  const saveConsent = (choice) => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Private mode or blocked storage: the banner shows again next visit.
    }
  };

  const clearAnalyticsCookies = () => {
    const labels = location.hostname.split('.');
    document.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0].trim())
      .filter((name) => name.startsWith('_ga'))
      .forEach((name) => {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        labels.forEach((_, i) => {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=${labels.slice(i).join('.')}`;
        });
      });
  };

  const applyConsent = (choice) => {
    saveConsent(choice);
    window.gtag('consent', 'update', { analytics_storage: choice });
    if (choice === 'denied') clearAnalyticsCookies();
  };

  const showConsentBanner = () => {
    document.querySelector('.consent')?.remove();
    const banner = document.createElement('div');
    banner.className = 'consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <p>May we use Google Analytics cookies to see how visitors use this site? <a href="${privacyUrl}">Privacy Policy</a></p>
      <div class="consent-actions">
        <button type="button" class="btn btn-secondary btn-sm" data-consent="denied">Decline</button>
        <button type="button" class="btn btn-secondary btn-sm" data-consent="granted">Accept</button>
      </div>`;
    banner.querySelectorAll('[data-consent]').forEach((button) => {
      button.addEventListener('click', () => {
        applyConsent(button.dataset.consent);
        banner.remove();
      });
    });
    document.body.appendChild(banner);
  };

  const setupConsentSettings = () => {
    document.querySelectorAll('[data-consent-settings]').forEach((block) => {
      block.hidden = false;
      block.querySelector('button').addEventListener('click', showConsentBanner);
    });
  };

  const trackStoreClicks = () => {
    document.querySelectorAll('.store-badge').forEach((link) => {
      link.addEventListener('click', () => {
        const section = link.closest('section');
        window.gtag('event', 'store_click', {
          store: link.hostname === 'play.google.com' ? 'google_play' : 'app_store',
          placement: section ? section.id || section.className : 'page',
        });
      });
    });
  };

  const loadGoogleAnalytics = () => {
    const id = CONFIG.googleAnalyticsId;
    if (!id) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: readConsent() === 'granted' ? 'granted' : 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', id, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    if (!readConsent()) showConsentBanner();
    setupConsentSettings();
    trackStoreClicks();
  };

  const setupMenu = () => {
    const header = document.querySelector('.site-header');
    const burger = header && header.querySelector('.burger');
    if (!burger) return;
    const setOpen = (open) => {
      header.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', () => setOpen(!header.classList.contains('open')));
    header.querySelectorAll('.menu a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  };

  const setupTabs = () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((other) => {
          const selected = other === tab;
          other.setAttribute('aria-selected', String(selected));
          other.tabIndex = selected ? 0 : -1;
          document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
        });
      });
    });
  };

  const setupLightbox = () => {
    const box = document.querySelector('.lightbox');
    if (!box) return;
    const img = box.querySelector('img');
    const close = box.querySelector('.close');
    let opener = null;

    const hide = () => {
      box.classList.remove('open');
      img.removeAttribute('src');
      document.body.style.overflow = '';
      if (opener) opener.focus();
    };

    document.querySelectorAll('[data-zoom]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const source = btn.querySelector('img');
        opener = btn;
        img.src = source.currentSrc || source.src;
        img.alt = source.alt;
        box.classList.add('open');
        document.body.style.overflow = 'hidden';
        close.focus();
      });
    });

    close.addEventListener('click', hide);
    box.addEventListener('click', (e) => {
      if (e.target === box) hide();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && box.classList.contains('open')) hide();
    });
  };

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  setupMenu();
  setupTabs();
  setupLightbox();
  loadGoogleAnalytics();
})();
