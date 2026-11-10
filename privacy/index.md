---
title: "Privacy Policy | Postfold"
description: "What Postfold stores on your device, when it contacts X, and what crash, usage and advertising data the iPhone, iPad and Android apps share with Apple and Google."
url: "https://postfold.space/privacy/"
---

# Privacy Policy

Last updated: November 10, 2026

This page explains what Postfold stores, where it is stored, which outside services it talks to, and what crash, usage and advertising information is collected. The iPhone and iPad app and the Android app differ, so each section says which app it describes. Section 8 covers advertising, and section 9 covers what only the Android app does.

**In short:** Postfold has no account and no login. We never see the posts, links, titles, notes or folders you save: they stay on your devices and, on iPhone and iPad, in your private iCloud. To show a post, the app asks X's public embed service for it. The app shows ads through Google AdMob, which can use your device's advertising identifier; on iPhone and iPad, only if you allow tracking. Advertisers never receive anything from your library. On iPhone and iPad, there is no third-party analytics: anonymous crash reports and usage statistics reach us through Apple's built-in tools, and you can turn them off. On Android, crash reports and usage statistics go to Google Firebase, and you can turn them off too.

## 1. Who we are

Postfold is an app for iPhone, iPad and Android developed by Huy Nguyen ("we", "us"). If you have any question about this policy, email [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com).

## 2. Information we collect

On every platform, we never receive the content of your library, we do not operate servers for the app, and the app has no user accounts and no sign-in, with X or with us.

**On iPhone and iPad** the app includes one outside service, Google AdMob, which shows ads and collects advertising data, described in section 8. The app has no third-party analytics or crash-reporting SDKs. Apart from advertising, the only information about how the app runs that reaches us is anonymous crash reports, diagnostics and usage statistics provided by Apple, described in section 5.

**On Android** the app includes two Google services, AdMob and Firebase. They collect device identifiers (including the advertising ID), advertising data, crash reports and usage statistics, described in sections 8 and 9.

## 3. What the app stores, and where

To work, Postfold keeps your library on your device:

- the links of the posts you save, and the author name and handle;
- a cached copy of each post's text and embed markup, as returned by X's embed service;
- your folders, custom titles and notes, and the dates you added or changed them;
- your app settings (for example the default layout and folder).

**iCloud sync (iPhone and iPad).** If iCloud is turned on for your Apple Account, this library is synced through the private CloudKit database in *your* iCloud account, so it appears on your other devices. It is stored and protected by Apple under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). We have no access to your iCloud data. If iCloud is off, the library stays on that device only.

**Share extension (iPhone and iPad).** When you save from the Share sheet, the link, folder and note are handed to the main app through a shared container on your device. Nothing leaves the device at this step.

**Android.** The library stays on your device and does not sync between devices. Section 9 explains Android backup.

## 4. Connections to X

Postfold never signs in to X, does not use the X API and does not scrape x.com. It contacts X only in these cases:

- **Saving and re-checking a post.** The app sends the post's link to X's public oEmbed service at `publish.x.com/oembed`, with the "do not track" option turned on, and caches the result. It does this when you save a post and, from time to time, to check that saved posts still exist (including in the background, when the system allows it).
- **Viewing a post.** The post details screen shows X's official embedded post. It loads X's embed script from `platform.twitter.com`, again with "do not track" on, and the post's images, videos and profile pictures come from X's servers.
- **Opening a post.** Tapping Open in X hands the link to iOS or Android, which opens it in the X app or in your browser. Postfold has no in-app browser.

Like any web request, these connections let X see your IP address and basic device information. X handles that data under its own [Privacy Policy](https://x.com/en/privacy), not this one.

## 5. Crash reports and usage statistics on iPhone and iPad

To see when Postfold crashes or runs slowly, and how many people use it, the iPhone and iPad app relies on tools built into iOS and provided by Apple. It does not add any third-party service for this.

- **Crash reports and diagnostics.** If you turned on *Share With App Developers* in iOS (Settings › Privacy & Security › Analytics & Improvements), Apple sends us crash logs and reports about hangs, performance, energy and disk use for Postfold, through Xcode and App Store Connect.
- **Usage statistics.** App Store Connect shows us aggregated figures such as installs, sessions, active devices, retention and crash counts, for people who agreed to share analytics with app developers. We see totals, not individuals.
- **On-device diagnostics.** Through Apple's MetricKit framework, iOS also gives Postfold daily summaries of how the app performed on your device, such as launch time, memory use, hangs and crash call stacks. Postfold uses them to spot problems. They stay on your device and Postfold does not upload them.

These reports contain technical information only, such as the device model, iOS version, app version and the call stack of the app's own code. They never include the posts, links, titles, notes or folders you save, and Apple does not tell us who you are. Apple handles this data under its [Privacy Policy](https://www.apple.com/legal/privacy/).

**How to turn it off.** Turn off the crash and diagnostics option in Postfold's Settings to stop Postfold from collecting on-device diagnostics. To stop sharing crash and usage data with all app developers, turn off *Share With App Developers* in iOS Settings › Privacy & Security › Analytics & Improvements.

## 6. Clipboard

When you open the app with "Detect Copied Links" turned on, Postfold asks iOS or Android whether the clipboard probably contains a web link. The system answers without revealing the content. The clipboard is only read when you tap Paste. You can turn this off in Postfold's Settings.

## 7. Deleted posts

If X reports that a post no longer exists or is no longer public, Postfold marks it Unavailable and deletes the cached text and embed. Your link, title, note and folder are kept until you delete them.

## 8. Advertising

Postfold shows ads provided by Google AdMob on iPhone, iPad and Android: a banner on the post details screen, ads between posts in the list, and sometimes a full-screen ad after you add a post. The Share sheet shows no ads.

To deliver and measure ads and to limit fraud, Google collects your IP address (which shows your approximate location), device information such as the model and system version, how you interact with ads and, when it is available, your device's advertising identifier. Google's ads software also sends Google diagnostic data about itself, such as crash and performance data. Google and its advertising partners may use this information to show personalized ads. See [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites) and [Google's Privacy Policy](https://policies.google.com/privacy).

Postfold never sends advertisers anything from your library: ad requests carry no post links, authors, titles, notes or folder names.

**Consent.** Where the law requires it, for example in the European Economic Area, the United Kingdom and Switzerland, Postfold shows Google's consent form and requests no ad until you have made your choices. Where the form applies to you, you can reopen it at any time under Privacy Options in Postfold's Settings.

**Tracking on iPhone and iPad.** iOS asks whether you allow Postfold to track you. If you allow it, Google can use your device's advertising identifier to personalize ads and to measure them across apps and websites owned by other companies. If you decline, ads still appear, but Postfold cannot read the identifier. You can change your answer in iOS Settings › Privacy & Security › Tracking.

**Advertising ID on Android.** The Android app lets Google read the device's advertising ID. You can reset or delete it in Android Settings (Privacy › Ads, or Google › Ads on some devices). Once it is deleted, apps, including Postfold, no longer receive it.

## 9. Postfold for Android

Sections 3, 4, 6, 7 and 8 also describe the Android app. This section covers what is different on Android.

**Storage and backup.** The Android app keeps your library on your device only. There is no sync between devices. If backup is turned on for your Google Account, Android includes Postfold's library and settings in your device backup, so they can be restored when you reinstall the app or move to a new phone. That backup is stored and protected by Google under [Google's Privacy Policy](https://policies.google.com/privacy). We have no access to it.

**Saving from the Share sheet.** The link, folder and note are saved directly into the library on your device.

**Crash reports and usage statistics (Google Firebase).** The Android app uses Firebase Crashlytics and Google Analytics for Firebase, both provided by Google.

- **Crash reports** contain the call stack of the app's code, the device model, Android version and app version, and an installation identifier created by Firebase.
- **Usage statistics** count a few actions, such as saving a post, creating or deleting a folder, or a saved post becoming unavailable. These events carry no details. Google Analytics also collects, automatically, app opens and sessions, the device model, Android version, app version and language, your approximate region derived from your IP address, an app-instance identifier and your device's advertising ID.

These reports never include the posts, links, author names, titles, notes or folder names you save. Google processes this data under the [Firebase privacy terms](https://firebase.google.com/support/privacy) and [Google's Privacy Policy](https://policies.google.com/privacy).

**How to turn it off.** Turn off Collect Diagnostics in Postfold's Settings. Postfold then stops sending crash reports and usage statistics, and deletes crash reports that were not sent yet.

## 10. This website

This website is a static site hosted on GitHub Pages. GitHub may log visitors' IP addresses for security, as described in the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

We use [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) to count page views on this website. It does not use cookies or local storage, does not track you across sites, and reports only aggregate statistics such as page views, referrers and country. It is not used in the app. Fonts and images are served from this site; we set no cookies.

## 11. Your choices and rights

On iPhone and iPad:

- Delete a post or folder in the app to remove it from your devices and iCloud.
- Delete the app to remove its local data. To remove the synced copy, manage Postfold's data in your iCloud storage settings on iPhone, iPad or Mac.
- Turn off iCloud for Postfold to keep the library on one device.
- Turn off Background App Refresh for Postfold in iOS Settings to stop background re-checks.
- Turn off the crash and diagnostics option in Postfold's Settings, or *Share With App Developers* in iOS, to stop crash and usage reports (see section 5).
- Turn off tracking for Postfold in iOS Settings › Privacy & Security › Tracking, or change your ad choices under Privacy Options in Postfold's Settings where it is shown (see section 8).

On Android:

- Delete a post or folder in the app to remove it from your device.
- Delete the app to remove its local data. To remove the backup copy, manage backups in your Google Account.
- Turn off Collect Diagnostics in Postfold's Settings to stop crash reports and usage statistics (see section 9).
- Change your ad choices under Privacy Options in Postfold's Settings where it is shown, or reset or delete your advertising ID in Android Settings (see section 8).
- Restrict background use for Postfold in Android Settings to limit background re-checks.

We run no servers and hold no copy of your library. On iPhone and iPad, crash and usage reports reach us without your identity. Advertising data on every platform, and Firebase data on Android, is held by Google and tied to identifiers such as an advertising identifier or an installation identifier, not to your name; we see it as crash reports and aggregate statistics.

Postfold does not sell the content of your library or pass it to anyone. Showing personalized ads through Google may count as "selling" or "sharing" personal information under some privacy laws; you can opt out with the controls above. If you have a privacy request or concern, email [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com) and we will reply.

## 12. Children

Postfold is not directed at children under 13, and we do not knowingly collect personal information from children.

## 13. Security

All network connections use HTTPS. Data synced through iCloud is protected by Apple's iCloud security.

## 14. Changes to this policy

If the app's data practices change, for example if a new feature needs a new service, we will update this page and the date at the top before the change ships.

## 15. Contact

Huy Nguyen Email: [huynguyennovem@gmail.com](mailto:huynguyennovem@gmail.com)
