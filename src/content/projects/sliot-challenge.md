---
title: "SLIoT Christmas Challenge"
description: "How we built a massive online game in just one night"
pubDate: "Dec 25 2025"
heroImage: "/images/projects/sliot-challenge/loading.avif"
---

## Idea behind this

It was a calm evening, two days before Christmas. I was relaxing in front of my computer, scrolling for a movie to watch, when I suddenly got a WhatsApp group call. It was from two of my friends — the vice chairperson and the publicity committee lead for SLIoT 2026. At the time, I was the technical committee co-lead. The call seemed important, so I joined and pulled the other tech members in too.

The publicity committee wanted something special for Christmas. *"We need to do something that no one in the history of SLIoT has ever done before."* They envisioned a marketing campaign for Christmas Day — some kind of game where we could award real gifts to the winners at the end.

Their first idea was a treasure hunt with clues hidden on the official website. Cool concept, but we didn't think it would work. Get too technical and it becomes a CTF. Our audience was school kids and university students — that would scare half of them off.

So we suggested something else: a classic game on the website, with points, and a live leaderboard. Then the real question became — which game?

## The hunt for the best game

We didn't have time to invent a new mechanic, so we planned to clone something that already worked. It needed to be easy enough for anyone to play, hard enough that not everyone could claim first place, and fair between phones and computers.

Sudoku? Too hard. Snake or Candy Crush? Too easy. Minesweeper? Steep learning curve. 2048? No real challenge.

After about an hour of arguing, we landed on the perfect fit: **Memory**.

Flip cards, find matching pairs, race the clock. Simple. Familiar. And with IoT-themed cards — RFID readers, relays, sensors — it actually fit SLIoT.

![IoT-themed memory cards](/images/projects/sliot-challenge/memory-cards.avif)

## The real challenge

The game itself was so straightforward that anyone with a decent AI tool could build it in ten minutes. The hard part was making it multiplayer — especially with real-money gifts on the line. Players would do anything to win. Including cheat.

So the focus became security. And the clock: we had roughly two days to build, QA, and launch before Christmas Day.

## The masterplan

Before writing a line of code, Charindith — one of the best security people I know — and I sketched out a plan.

### WebAssembly client

Securing a web client is ugly. DevTools, memory edits, reverse-engineered JS — the attack surface is huge. So we built the frontend in **WebAssembly** with Kotlin Multiplatform. Harder to reverse-engineer. Most attackers would only see the network traffic and give up.

### HMAC + nonces

No point locking down the client if someone can forge or replay requests. Every request got an HMAC. On game start the server issued a nonce, and each response handed back a new one — chaining requests so replays died immediately.

### Zero trust

Even then we stayed paranoid. The frontend shouldn't own the game logic at all — just act like a terminal sending inputs and rendering outputs. Game state lived on the server.

### WebSocket + Redis

Thousands of concurrent sessions meant we couldn't keep state in memory or lean on Postgres. Sessions went into **Redis** as JSON, keyed by user and session ID. And we switched to **WebSocket**, cutting input delay from ~300ms down to ~20ms.

## The sleepless night

We kicked off around 10 PM, right after the call. Charindith took the backend with **Elysia** on **Bun**. I took the frontend — Kotlin Multiplatform for WASM, Ktor for networking, Kamel for images.

We worked through the night on a WhatsApp voice call, designing endpoints, testing requests, squashing bugs. By around 1 AM we had an MVP. By 3 AM, a fully working game — bugs, ugly UI, and all.

![The state of the game at 3 AM](/images/projects/sliot-challenge/mvp-3am.avif)

After images, a live leaderboard, and a proper UI pass, it actually looked like a product.

![Memory Nexus — how to play](/images/projects/sliot-challenge/memory-howto.avif)

![Memory Nexus in play, with live leaderboard](/images/projects/sliot-challenge/memory-play.avif)

## New day, new challenge

The next day we showed it to the SLIoT chairs. They loved it — but the average playtime was only about two minutes. They wanted something harder and more addictive.

Back to brainstorming. We settled on **Sokoban** as the second game.

Most of the security model carried over. But Zero Trust had to flex: arrow-key movement needs to feel instant, so Sokoban state lived on the client. On win, we didn't trust a "finished" flag — we sent the full move array, and the server replayed every move in its own engine to verify the run was legitimate.

Then we added a game selection screen and shipped.

![Select Protocol — Memory Nexus and Sokoban Logic](/images/projects/sliot-challenge/select-protocol.avif)

![Sokoban Online with live leaderboard](/images/projects/sliot-challenge/sokoban.avif)

## The result

Over 400 players showed up. Live rankings. Real reload prizes for the top scores. And a Christmas campaign that actually felt like nothing SLIoT had done before.

I'm still proud we took the call that night. If we'd said no, I never would have learned half of this — WASM clients, HMAC chaining, Redis sessions, server-side move replay — while shipping something people actually played.

I wrote a longer breakdown of the night here: [How We Built a Massive Online Game in Just One Night](https://blog.suhasdissa.top/how-we-built-a-massive-online-game-in-just-one-night/).

## Tech Stack

Kotlin Multiplatform (WebAssembly), Ktor, Kamel, Bun, Elysia.js, TypeScript, Redis, WebSockets, HMAC
