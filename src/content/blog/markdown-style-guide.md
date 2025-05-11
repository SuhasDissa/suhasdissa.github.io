---
title: "Create a Scrollable Time Picker in Jetpack Compose"
description: "Here's how you can create a scrollable time picker for your Jetpack compose Andriod app"
pubDate: "Jul 21 2024"
heroImage: "/blog-placeholder-1.jpg"
---

There are a lot of scrollable Jetpack compose components like Columns, Lazy Columns. For this example I'm using the [Pager Layout](https://developer.android.com/develop/ui/compose/layouts/pager) , mainly because it allows scrolling one page at a time.
So, to get started, we create a Pager component with one page per digit.

```kotlin
@Composable
fun ScrollTimePicker() {
    val state = rememberPagerState(initialPage = 1) { 60 }

    VerticalPager(
            modifier = Modifier.height(224.dp),
            state = state,
            pageSpacing = 16.dp,
            pageSize = PageSize.Fixed(64.dp)
        ) { index ->
            val number = 1
            Text(
                text = String.format("%02d", number),
                style = MaterialTheme.typography.displayMedium,
                color = MaterialTheme.ColorScheme.primary
            )
        }
}
```

Now we need to 

Here's the final Code for you lazy people,

```kotlin
@Composable
fun ScrollTimePicker(
    value: Int,
    onValueChanged: (Int) -> Unit,
    maxValue: Int,
    offset: Int = 0
) {
    val primary = MaterialTheme.colorScheme.primary
    val primaryMuted = MaterialTheme.colorScheme.primary.copy(alpha = 0.3f)
    val state = rememberPagerState(initialPage = maxValue * 100 + value - 1 - offset) {
        maxValue * 200
    }
    val currentPage = state.currentPage + 1
    LaunchedEffect(currentPage) {
        onValueChanged((currentPage + offset) % maxValue)
    }
    VerticalPager(
        modifier = Modifier.height(224.dp),
        state = state,
        pageSpacing = 16.dp,
        pageSize = PageSize.Fixed(64.dp),
        flingBehavior = PagerDefaults.flingBehavior(
            state = state,
            pagerSnapDistance = PagerSnapDistance.atMost(60)
        )

    ) { index ->
        val number = index % maxValue + offset
        Text(
            text = String.format("%02d", number),
            style = MaterialTheme.typography.displayMedium,
            color = if (index == currentPage) primary else primaryMuted
        )
    }
}

```
