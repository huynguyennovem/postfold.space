---
title: "How it works | Postfold"
description: "How Postfold saves posts from X without a login: what happens when you save, view and open a post, and where your data goes."
url: "https://postfold.space/how-it-works/"
---

# How Postfold works

Postfold keeps your saved posts organized without an account, a login or a server. Here's what happens when you save, view and open a post, and where each piece of data goes.

**Your iPhone or iPad** Stores your folders, titles, notes and a cached copy of each post.

**Your private iCloud** Syncs your library between your devices. Only you can read it.

**X's public embed service** Receives a post's link and returns its text and embed. Nothing else.

There is no Postfold server. The developer never receives your data.

## 1. Saving a post

Tap Share on a post in the X app and choose Postfold, or copy the post's link and open Postfold. The Share sheet only shows your folders and a note field; the link, folder and note are passed to the main app on your device.

When the app opens, it adds the post and asks X's public oEmbed service (`publish.x.com/oembed`) for it, sending just the post's link with "do not track" on. It caches the author, text and embed so your library loads instantly and works offline.

## 2. Organizing

Folders, custom titles, notes, sorting and filtering all happen on your device. Each folder remembers its own sort order and filters. The date a post was published is worked out from the post's ID, so no extra request is needed.

## 3. Viewing a post

The details screen shows X's official embedded post, exactly as X publishes it, with "do not track" on. Links inside the embed open in the X app or Safari, never in a browser inside Postfold.

## 4. Keeping posts up to date

From time to time, including in the background, Postfold re-checks a small batch of older saves with the same embed service. If a post was deleted or made private, it becomes Unavailable: the cached text is removed, and your link, title, note and folder stay.

## 5. Syncing

With iCloud on, your library syncs through the private CloudKit database in your own iCloud account. If two devices save the same post while offline, Postfold merges the duplicates when it next opens.

## What Postfold never does

| Postfold never… | Why it matters |
|---|---|
| asks you to log in to X or to Postfold | No password to leak, no account to manage. |
| uses the X API or scrapes x.com | Only X's public, documented embed service is used. |
| downloads images or videos | Media is shown by X's official embed, from X. |
| opens posts in an in-app browser | Posts open in the X app or Safari, where you're already signed in. |
| includes analytics, ads or trackers | Nothing about how you use the app is recorded or sent anywhere. |

Want the technical details? Read about [the technology behind Postfold](https://postfold.space/technology/), or the full [Privacy Policy](https://postfold.space/privacy/).
