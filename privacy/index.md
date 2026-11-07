---
title: "Privacy Policy | Postfold"
description: "Postfold collects no personal data: no account, no ads, no tracking. Learn what the app stores on your device and in your iCloud, when it contacts X, and how anonymous crash reports work."
url: "https://postfold.space/privacy/"
---

# Privacy Policy

Last updated: November 7, 2026

Postfold is built to collect as little as possible. This page explains what the app stores, where it is stored, which outside services it talks to, and what crash and usage information reaches us.

**In short:** Postfold has no account and no login. We never see the posts, links, titles, notes or folders you save: they stay on your devices and in your private iCloud. The app has no advertising, no third-party analytics and no tracking. To find and fix problems, we receive anonymous crash reports and usage statistics through Apple's built-in tools, and you can turn them off. To show a post, the app asks X's public embed service for it.

## 1. Who we are

Postfold is an iPhone and iPad app developed by Huy Nguyen ("we", "us"). If you have any question about this policy, email [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com).

## 2. Information we collect

We do not collect personal information, and we never receive the content of your library. We do not operate servers for the app. Specifically, the app has:

- no user accounts and no sign-in, with X or with us;
- no advertising, and no third-party analytics or crash-reporting SDKs;
- no tracking, as defined by Apple's App Tracking Transparency, and no advertising identifier.

The only information about how the app runs that reaches us is anonymous crash reports, diagnostics and usage statistics provided by Apple, described in section 5.

## 3. What the app stores, and where

To work, Postfold keeps your library on your device:

- the links of the posts you save, and the author name and handle;
- a cached copy of each post's text and embed markup, as returned by X's embed service;
- your folders, custom titles and notes, and the dates you added or changed them;
- your app settings (for example the default layout and folder).

**iCloud sync.** If iCloud is turned on for your Apple Account, this library is synced through the private CloudKit database in *your* iCloud account, so it appears on your other devices. It is stored and protected by Apple under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). We have no access to your iCloud data. If iCloud is off, the library stays on that device only.

**Share extension.** When you save from the Share sheet, the link, folder and note are handed to the main app through a shared container on your device. Nothing leaves the device at this step.

## 4. Connections to X

Postfold never signs in to X, does not use the X API and does not scrape x.com. It contacts X only in these cases:

- **Saving and re-checking a post.** The app sends the post's link to X's public oEmbed service at `publish.x.com/oembed`, with the "do not track" option turned on, and caches the result. It does this when you save a post and, from time to time, to check that saved posts still exist (including in the background, if Background App Refresh is on).
- **Viewing a post.** The post details screen shows X's official embedded post. It loads X's embed script from `platform.twitter.com`, again with "do not track" on, and the post's images, videos and profile pictures come from X's servers.
- **Opening a post.** Tapping Open in X hands the link to iOS, which opens it in the X app or in Safari. Postfold has no in-app browser.

Like any web request, these connections let X see your IP address and basic device information. X handles that data under its own [Privacy Policy](https://x.com/en/privacy), not this one.

## 5. Crash reports and usage statistics

To see when Postfold crashes or runs slowly, and how many people use it, we rely on tools built into iOS and provided by Apple. We do not add any third-party service for this.

- **Crash reports and diagnostics.** If you turned on *Share With App Developers* in iOS (Settings › Privacy & Security › Analytics & Improvements), Apple sends us crash logs and reports about hangs, performance, energy and disk use for Postfold, through Xcode and App Store Connect.
- **Usage statistics.** App Store Connect shows us aggregated figures such as installs, sessions, active devices, retention and crash counts, for people who agreed to share analytics with app developers. We see totals, not individuals.
- **On-device diagnostics.** Through Apple's MetricKit framework, iOS also gives Postfold daily summaries of how the app performed on your device, such as launch time, memory use, hangs and crash call stacks. Postfold uses them to spot problems. They stay on your device and Postfold does not upload them.

These reports contain technical information only, such as the device model, iOS version, app version and the call stack of the app's own code. They never include the posts, links, titles, notes or folders you save, and Apple does not tell us who you are. Apple handles this data under its [Privacy Policy](https://www.apple.com/legal/privacy/).

**How to turn it off.** Turn off the crash and diagnostics option in Postfold's Settings to stop Postfold from collecting on-device diagnostics. To stop sharing crash and usage data with all app developers, turn off *Share With App Developers* in iOS Settings › Privacy & Security › Analytics & Improvements.

## 6. Clipboard

When you open the app with "Detect Copied Links" turned on, Postfold asks iOS whether the clipboard probably contains a web link. iOS answers yes or no without revealing the content. The clipboard is only read when you tap the system Paste button. You can turn this off in Postfold's Settings.

## 7. Deleted posts

If X reports that a post no longer exists or is no longer public, Postfold marks it Unavailable and deletes the cached text and embed. Your link, title, note and folder are kept until you delete them.

## 8. This website

This website is a static site hosted on GitHub Pages. GitHub may log visitors' IP addresses for security, as described in the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

We use [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) to count page views on this website. It does not use cookies or local storage, does not track you across sites, and reports only aggregate statistics such as page views, referrers and country. It is not used in the app. Fonts and images are served from this site; we set no cookies.

## 9. Your choices and rights

- Delete a post or folder in the app to remove it from your devices and iCloud.
- Delete the app to remove its local data. To remove the synced copy, manage Postfold's data in your iCloud storage settings on iPhone, iPad or Mac.
- Turn off iCloud for Postfold to keep the library on one device.
- Turn off Background App Refresh for Postfold in iOS Settings to stop background re-checks.
- Turn off the crash and diagnostics option in Postfold's Settings, or *Share With App Developers* in iOS, to stop crash and usage reports (see section 5).

Because we hold no personal data about you, and crash and usage reports reach us without your identity, there is nothing for us to access, export, correct or delete on our side. We do not sell or share personal information. If you have a privacy request or concern, email [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com) and we will reply.

## 10. Children

Postfold is not directed at children under 13, and it does not knowingly collect personal information from anyone, including children.

## 11. Security

All network connections use HTTPS. Data synced through iCloud is protected by Apple's iCloud security.

## 12. Changes to this policy

If the app's data practices change, for example if a new feature needs a new service, we will update this page and the date at the top before the change ships.

## 13. Contact

Huy Nguyen Email: [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com)
