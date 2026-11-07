---
title: "Technology | Postfold"
description: "Postfold is built with SwiftUI, Swift 6, SwiftData and CloudKit, with no third-party SDKs. Post content comes only from X's public oEmbed service."
url: "https://postfold.space/technology/"
---

# Technology

Postfold is a native Apple app with no third-party code. Here is what it's built with and why.

### SwiftUI & Swift 6

A fully native interface for iPhone and iPad, written in Swift 6 with strict concurrency checking.

### SwiftData + CloudKit

Your library is stored with SwiftData and synced through the private CloudKit database in your iCloud.

### No third-party SDKs

Only Apple frameworks. No ads, analytics or crash-reporting libraries from other companies, so nothing ships that we didn't write.

## Architecture

- **App + Share Extension.** The Share Extension never opens the database. It reads a small list of your folders and drops each new save into an inbox in a shared App Group container. The main app imports the inbox when it opens. This keeps the extension fast and avoids two processes writing to the same store.
- **Shared Swift package.** Link parsing, oEmbed parsing, models and the sort/filter query live in one local package used by both the app and the extension.
- **CloudKit-friendly model.** Every field has a default and relationships are optional, as CloudKit requires. Duplicates created by offline saves on two devices are merged on launch.

## Content from X, done by the book

- **oEmbed only.** Post text and embed markup come from X's public oEmbed endpoint, requested with `dnt=true` and `omit_script=true`. Responses are parsed without loading HTML into a web view.
- **Official embed.** The details screen renders the oEmbed HTML with X's `widgets.js` in a `WKWebView`. Every link tap is handed to iOS, which opens the X app or Safari.
- **Post dates from IDs.** X post IDs encode their creation time, so Postfold can sort by date posted without any extra request.
- **Polite re-checks.** A background refresh task re-checks a small batch of the oldest saves, one request at a time.

## Privacy, verified

- The app's privacy manifest declares no tracking and no tracking domains.
- Crash and performance diagnostics use Apple's MetricKit and Xcode Organizer, with an opt-out in Settings. No third-party service receives them.
- Clipboard detection asks iOS for a yes/no "is there probably a link?" answer, so no paste prompt appears and nothing is read until you tap Paste.
- The only network hosts the app talks to are X's embed services.

## Requirements

iPhone or iPad with iOS 18 or later. Some interface touches use iOS 26 features when available.
