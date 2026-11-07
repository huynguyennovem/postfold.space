// Values to fill in before launch. Empty values keep the "Coming soon" state / skip analytics.
const CONFIG = {
  appStoreUrl: '',
  cloudflareAnalyticsToken: '',
};

(() => {
  'use strict';

  const enableStoreLinks = () => {
    document.querySelectorAll('[data-store="ios"]').forEach((a) => {
      if (!CONFIG.appStoreUrl) return;
      a.href = CONFIG.appStoreUrl;
      a.target = '_blank';
      a.rel = 'noopener';
      a.removeAttribute('aria-disabled');
      a.removeAttribute('tabindex');
    });
    document.querySelectorAll('[data-store-note]').forEach((el) => {
      el.hidden = Boolean(CONFIG.appStoreUrl);
    });
  };

  const loadAnalytics = () => {
    if (!CONFIG.cloudflareAnalyticsToken) return;
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.dataset.cfBeacon = JSON.stringify({ token: CONFIG.cloudflareAnalyticsToken });
    document.head.appendChild(script);
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

  enableStoreLinks();
  setupMenu();
  setupTabs();
  setupLightbox();
  loadAnalytics();
})();
