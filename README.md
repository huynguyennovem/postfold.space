# Postfold — landing page

Static site for [postfold.space](https://postfold.space): plain HTML, one CSS file, one small JS file, no build step.
Published from the GitHub repo `huynguyennovem/postfold.github.io` with GitHub Pages.

```
index.html             home: hero, features, how it works, screenshots, privacy, FAQ, download, sticky download bar
how-it-works/          where data goes when you save, view and open a post
technology/            SwiftUI, SwiftData, CloudKit, oEmbed, Google Mobile Ads
support/               getting started, troubleshooting, contact
changelog/             release notes, newest first (update with each app release)
privacy/  terms/       Privacy Policy, Terms of Use
404.html               GitHub Pages "not found" page (uses absolute /assets paths)
*/index.md, index.md   Markdown copy of each page for AI assistants
favicon.ico, llms.txt, llms-full.txt, robots.txt, sitemap.xml, app-ads.txt, CNAME, .nojekyll
assets/css/style.css   all styles; light and dark mode follow the system setting
assets/js/main.js      CONFIG block, mobile menu, screenshot tabs + lightbox, sticky download bar, analytics loader
assets/images/         icons, og-image.jpg (1200×630), App Store and Google Play badges, screenshots/
assets/fonts/          Inter (self-hosted, latin + latin-ext)
```

Pages link to each other with relative paths, so the site also works before the custom domain is set
(at `huynguyennovem.github.io/postfold.github.io/`), except `404.html`.

## Preview locally

```bash
python3 -m http.server 8000 -d landingpage
```

Open http://127.0.0.1:8000/.

## Store links

Both badges link straight to the live listings, in `index.html`, `index.md`, `llms.txt` and `llms-full.txt`:
- App Store: `https://apps.apple.com/app/id6830735922` (`APP_STORE_ID` in `ios/Config/Shared.xcconfig`)
- Google Play: `https://play.google.com/store/apps/details?id=com.app.postfold`

`assets/images/GooglePlay_Badge.png` is Google's official English "Get it on Google Play" badge, cropped to the badge edge.

## Analytics

Google Analytics 4: `googleAnalyticsId` in the `CONFIG` block at the top of `assets/js/main.js` holds the
Measurement ID (`G-…`, from Google Analytics › Admin › Data streams › Web). Empty = no analytics script at all.

- Runs with Consent Mode v2: everything is denied by default and a banner asks for analytics cookies.
- The choice is kept in `localStorage` (`postfold-analytics-consent`); the Privacy Policy §10 has a
  "Change cookie choice" button (`data-consent-settings`). Google Signals and ad personalization are off.
- Custom event `store_click` (`store`: `app_store` | `google_play`, `placement`: `hero` | `download` | `sticky`).
  In GA, register `store` and `placement` as event-scoped custom dimensions and mark `store_click` as a key event.

Privacy Policy §10 describes it. Update it (and `privacy/index.md`, `llms-full.txt`) if analytics changes.

## Sticky download bar

Home page only: a bar with both store badges slides in once the hero's badges scroll out of view and hides
while the download section or the footer is visible, or while the cookie banner is open. The × hides it for good
in that browser (`localStorage` key `postfold-sticky-download-dismissed`).

## Keep in sync

The header and footer are repeated in every page. When you change one, change all seven HTML files.
After editing `style.css` or `main.js`, bump the `?v=` date on their links in every HTML file (and `404.html`),
so browsers don't pair a new page with a cached old stylesheet or script.
Each `index.md` mirrors its page: update it together with the HTML, and rebuild `llms-full.txt`
(it is `llms.txt`'s intro followed by every `index.md` body).

Content was written from the app code and `docs/architecture.md`. Re-check these pages when the app changes:
- **Privacy Policy**: network hosts (`publish.x.com/oembed`, `platform.twitter.com`), clipboard behavior,
  background refresh, and §5 crash reports on iPhone and iPad (Apple only: MetricKit on device, Xcode Organizer,
  App Store Connect; opt-out in the app's Settings). Must match `PrivacyInfo.xcprivacy`, the App Store privacy label
  and the Settings label of the opt-out.
- **Privacy Policy §8 (Advertising, all platforms)**: Google AdMob placements, consent form (UMP), the iOS tracking
  prompt (ATT) and the Android advertising ID. Must match `docs/adr/0004-ads-admob.md`, `docs/adr/0006-android-ads.md`,
  the App Store privacy label and the Google Play Data safety form. The same facts appear in the home privacy band
  and FAQ (also in the FAQ JSON-LD in `index.html`), How it works §7, Technology and `llms.txt`.
- **Privacy Policy §9 (Android)**: Firebase Crashlytics + Analytics, Android backup. Must match
  `docs/adr/0005-android-firebase.md`, the Data safety form and the Settings label (Collect Diagnostics).
  The home page, How it works and Technology describe the iPhone and iPad app only.
- **`app-ads.txt`**: lists the AdMob publisher ID. It must match the publisher ID in the AdMob account
  (`ADMOB_APP_ID` in `ios/Config/Shared.xcconfig`, without the `ca-app-` prefix and the `~app` suffix).
- **Terms §7 Purchases**: written neutrally because pricing (Phase 5) is not decided.
- **Features / FAQ**: layouts (Preview, Compact, Grid), sort fields, filters, iCloud sync being free.
- **Screenshots** come from `design/store/app-store/` (HTML re-creations of the UI). Replace them with
  real simulator captures once available: re-export to WebP at 600 px wide (iPhone) / 1400 px (iPad).

## Deploy (GitHub Pages)

1. Push the contents of this folder to the root of `huynguyennovem/postfold.github.io` (branch `main`).
2. Repo › Settings › Pages › Build and deployment › Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Custom domain: `postfold.space` (the `CNAME` file sets it too). Tick **Enforce HTTPS** once the certificate is issued.
4. DNS at your registrar:
   - `A` records for `postfold.space` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www` → `huynguyennovem.github.io`
5. Use these URLs in App Store Connect:
   - Privacy Policy URL: `https://postfold.space/privacy/`
   - Support URL: `https://postfold.space/support/`
   - Marketing URL: `https://postfold.space/`

## Rules for the copy

- English only. The app name never contains "X", "Twitter" or "Tweet". No X logo or bird.
- "Posts from X" in body text is fine (describes the content). Keep the footer disclaimer:
  not affiliated with, endorsed by, or sponsored by X Corp.
