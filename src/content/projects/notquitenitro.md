---
title: "Not Quite Nitro"
description: "An extension to use Discord emoji without nitro"
pubDate: "Jun 1 2024"
heroImage: "/images/projects/notquitenitro/banner.jpg"
---

## Introduction

NotQuiteNitro is a Chrome and Firefox extension that allows users to use Discord emojis without having a Nitro subscription. The extension works for all Firefox and Chromium based browsers, including Opera and Microsoft edge.

## Installation

### For Firefox:

1. Get the addon from the [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/not-quite-nitro/) page.

### For Chrome, Microsoft Edge, Brave, and Opera:

1. [Download](https://github.com/suhasdissa/NotQuiteNitro/archive/refs/heads/main.zip) the repository as a ZIP file from [GitHub](https://github.com/SuhasDissa/NotQuiteNitro).
2. Unzip the file.
3. Copy the `chrome` folder to a safe location (rename if needed).
4. Enable Developer Mode in the extensions page.
5. Drag the `chrome` folder to the extensions page to import it.
6. Alternatively, click the "Load Unpacked Extension" button and select the `chrome` folder.

## How does it work? (for non technical folks)

Clicking an emoji on the Discord emoji picker will copy it's link to your clipboard. All you have to do is to paste [`Ctrl + V`] the link on the Discord chat box and send it.
Discord will convert the link to emoji automatically

## How does it work?

First, this extension uses JQuery to scan for `<img>` tags in the emoji picker pane, and make them clickable and remove the black and white filter.

```javascript
// make emotes coloured and clickable
$("div[class*='listItems'] div[class*='categorySection'] ul li button")
  .css("filter", " grayscale(0)")
  .children("img")
  .css("pointer-events", "all");
// make stickers coloured and clickable
$(
  "div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode']",
)
  .css("filter", " grayscale(0)")
  .children("div img")
  .css("pointer-events", "all");
```

Then, an on click event listener is added to these images that will copy the image link to clipboard

```javascript
$(
  "div[class*='listItems'] div[class*='row'] div[role*='gridcell'] div[class*='sticker'] div div[class*='stickerNode'] div img[class*='Image']",
).each(function () {
  if ($(this).attr("affected") != "true") {
    $(this).attr("affected", "true");
    $(this).click((e) => {
      let ufsource = e.currentTarget.getAttribute("src");
      const url = ufsource.split("?size=");
      source = url[0] + "?size=128";
      copyTextToClipboard(source);
    });
  }
});
```

The `copyTextToClipboard` function uses the browser's clipboard API

```javascript
async function copyTextToClipboard(textToCopy) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(textToCopy);
    }
  } catch (err) {
    console.error(err);
  }
}
```

Now the magic happens in the Discord client itself. There's feature in Discord that will fetch the image from any link you post and display as an image. So, when a user paste and send the copied link, the discord client will hide the image and show the emote in place of it.

## FAQ

### 1. Does this steal my token?

- No, the extension does not use your token or connect to the internet, ensuring your security
- This extension modifies the already loaded Discord website. It doesn't communicate with discord servers in any way.

### 2. Will My Discord Account Get Banned?

- Technically, there is no direct way for Discord to know if you use this extension or not, so the risk of account ban is low

### 3. Is this related to NotQuiteNitro discord bot?

- No, this uses the same name as that bot, but this extension is not related or affiliated with that bot.
