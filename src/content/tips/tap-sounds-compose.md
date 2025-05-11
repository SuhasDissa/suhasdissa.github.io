---
title: "How to add tap sounds to Jetpack Compose buttons"
description: "Unlike Android Views, Jetpack compose buttons don't make the satisfying tap sounds. Here's how to enable add them to compose"
pubDate: "Jun 05 2024"
---

First, get access to the underlying view component

```kotlin
val view = LocalView.current
```

then in your button's `onClick` event, add the following line

```kotlin
view.playSoundEffect(SoundEffectConstants.CLICK)
```

That's it. Now you have tap sounds in jetpack compose button.

Here's a complete example

```kotlin
@Composable
fun MyComposable(){
    val view = LocalView.current

    Button(onClick = {
        view.playSoundEffect(SoundEffectConstants.CLICK)
    }){
        Text("Click Me")
    }
}
```