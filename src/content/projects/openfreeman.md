---
title: "Open Freeman"
description: "An attempt to make a game without a game engine"
pubDate: "Apr 18 2026"
heroImage: "/images/projects/openfreeman/image-1.avif"
---

## How I got here

For a long time in my life, I wanted to make a game. I mean, I had solid programming experience, and some intermediate level 3D modelling experience. So I thought making a game would be trivial.

So as any sane person would've done, I downloaded Unity and started watching some tutorials. The game engine concepts were simple and straightforward — there were 3D objects, rigid bodies, cameras, lights, the whole deal. Drag something in, tweak a few numbers, hit play. Magical.

But after weeks of learning, I couldn't make a game. All I could make was some character moving around in some test environment I made. It was a good start. But I didn't have it in me (the creativity).

I even tried Godot, just in case Unity was the problem. Same kind of setup. Same feeling. Sitting there graphically creating a world felt really boring. Like I was assembling someone else's idea of what a game should be, instead of actually building one.

I understand that these engines are made for regular folk who got that creativity to make good games without any fuss. But for me, it felt like I was mindlessly doing stuff on a screen and things magically worked. I wanted to go a bit deeper. I wanted to know *why* the light looked the way it did. Why the character moved. What was actually happening under all those inspector panels.

## Stepping away from Unity

Using Unity and Godot didn't awaken that spirit in me. What I wanted was a game engine with no GUI — something where I had to write the whole game as code, or it simply didn't exist.

That's when I found Love2D. Minimalistic 2D engine, no GUI, Lua. Perfect.

After spending a couple months learning Lua and Love2D, I was able to make my first ever 2D game. I called it [WondererGame](https://github.com/SuhasDissa/WondererGame).

<video controls>
  <source src="/images/projects/openfreeman/image-2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

To be honest, it was just a guy wandering around. Didn't have much of anything to call it a "game". But it was *mine*. Every pixel that moved was something I wrote. That feeling stuck with me.

## Getting into 3D

After getting my feet wet with 2D, I wanted to try 3D — this time without using any game engine at all.

I spent some time on YouTube, checking if anyone had tutorials about this whole "game development from scratch" thing. Found a couple about making a game with raw OpenGL. But the tutorials were so long, spanning weeks. Of course my lazy ass didn't want to sit there and watch several dozen videos. I wanted to learn this myself.

To be honest, there was no human-readable documentation available for OpenGL. Most of it was about API structure — great for people who already know what's going on, useless for someone like me staring at `glDrawArrays` wondering what the hell an array of anything has to do with a triangle.

The best resource I could find was [Learn OpenGL](https://learnopengl.com/). Their tutorial was not too cold, nor was it too hot. Just the way I liked it.

So I got drawn into this OpenGL thing hard. I must've spent over a month just working through it — shaders, buffers, coordinate spaces, all that beautiful low-level nonsense. And for the first time since I started this whole "I want to make a game" journey, it actually felt like I was learning something real.

## Birth of OpenFreeman

Initially I didn't have much of a plan about making a game. I was just following the Learn OpenGL tutorial, poking around, seeing what stuck. Somewhere along the way I got this idea to make something like DOOM — player goes through a maze, shoots enemies, doesn't die (hopefully).

At first there was one level to the maze, and I used some spheres that spawned here and there as enemies. Extremely sophisticated enemy AI, I know. Floating orbs of pure menace.

As time went by, I wanted more active enemies. That's when I got the idea to go with a drone — inspired by Half-Life 2. I made the enemy drone in Blender and exported it as OBJ files. Reading OBJ files turned out to be trivial if you export them as triangle faces, so I could load them into the OpenGL world without any third-party library. Which felt illegal, somehow. Like I was cheating by not suffering enough.

After that I added another floor to the maze, with chimneys and ladders to go upstairs. Suddenly it started feeling less like a tech demo and more like an actual place.

![the ladder](/images/projects/openfreeman/image-3.avif)

## Tackling the hard problems

For someone with no experience with OpenGL, building a game from scratch may sound complicated. But until this point, loading models, drawing 3D meshes, moving the camera around — that stuff was really straightforward once you got past the initial "why is everything pink" phase.

Believe it or not, the hardest part was getting lighting to work.

OpenGL doesn't have any ray tracing support (at least not the way I was using it). So placing lights on the scene randomly didn't work — the light rays would just travel through walls like they paid rent there. Completely destroyed the game aesthetic. One second you're in a dark corridor, next second some light from three rooms over is bleeding through concrete like it's nothing.

## Working smart with lighting

I had zero intention of creating a lighting system that actually accounts for walls and shadows. That sounded like a multi-month side quest into shadow maps and I was not doing that.

What I did instead was this: there's one main light, and it's emitted by the player.

The cool thing about that is shadows always end up in places where the player cannot see. So it looked way more realistic than it had any right to. Lazy? Yes. Genius? Also yes.

But that wasn't enough. To get that cool Half-Life look on the enemy drones, I had to get them to emit some dangerous-looking red light. Problem is, if I just put directional lights on the drones, that light would definitely leak through the walls and make everything feel broken again.

So after thinking about it for a while, I came up with this genius idea: I only turn on the enemy light if the player and enemy are in direct line of sight — using the same logic I already had for firing bullets at enemies.

![enemy lighting](/images/projects/openfreeman/image-4.avif)

No line of sight? No red glow. Suddenly the lighting felt intentional. The drones felt threatening. The maze felt like a maze again.

After all that, the game started getting a lot cooler. All I had to do was slap on some sound effects and it became actually fun to play — which, looking back, is a weird thing to say about something you built by manually shoving vertex data into a GPU.

## Check the gameplay

<video controls>
  <source src="/images/projects/openfreeman/openfreeman.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

You can also see the source code here: [OpenFreeman](https://github.com/SuhasDissa/OpenFreeman)
