---
title: "Vibe You"
description: "Vibe You is a music app that can play local and online music"
pubDate: "Jun 04 2024"
heroImage: "/images/projects/vibeyou/banner.jpg"
---

## Background

In the covid pandemic days, I had to spend my time stuck at home, like everyone else. I was new to Android app development at that time, so I was spending most of my time on GitHub looking at cool android apps others have made. This is when I came across a music app called **Vi Music**. It was a YouTube music client.
At that time YouTube music was not a thing for me. specially because it wasn't supported in Sri Lanka.
So, I downloaded Vi Music hoping that it will get rid of the regional block. Unfortunately, it didn't work. Anyway, to test this app, I used it with a VPN.
The app had a lot of cool features, my favorite one being the song caching for offline playback.

## Idea for a new app

One major problem I had with Vi Music was the region block. Using the music app with a VPN was a very inconvenient thing. So I wanted to add proxy support for Vi Music, which I did end up doing. However, after opening a pull request to merge this new feature, the creator of Vi Music told me that he's no longer working on the app.

This is when I got an idea to make my own version of a music app. I wanted my app to use piped instead of youtube music.

This is not the first time I tried to make a music app. My previous attempt was to make a web based music app using invidious. I called it 'Aural'. It was a pretty good music app, given that it's made with vanilla Javascript and html.

## Working on the new app

I had some previous experience working with piped. I had made a karaoke app called YouTune that used Piped API to search and play youtube videos.

Without wasting any more time, I created a new android app, and added a minimal search and list functionality and basically copied all the search related code from YouTune. Within one day I was able to create a working search experience for my music app.

## Adding music playback

Adding music playback, including support for background playback and caching was a hard thing to do. Specially because I had zero experience with using `MediaSessionService`.

I tried using the code from Vi Music's music service on my app, however they were using the old `media2` version. Which I didn't want to use. I wanted to use the new `media3` on my app. So I had to resort to using the official `media3` documentation to make my app's music playback service.

After having a working implementation of the media session service, I started working on adding caching support and other features. It was pretty straightforward as I was able to use Vi Music's code as a reference.

## Releasing the app

The app was in a perfectly working, reliable condition when I decided to release this app as **Mellow Music**.

## Joining the you-apps team

Few months after joining the you-apps team, I got this great idea to add MellowMusic to the you-apps collection of apps.
We renamed the app to **Vibe You** and changed the icon to match other you apps.

As the first big change, **Bnyro** added the support for playback of local songs.

The app is more popular than ever before with hundreds of users and counting.