# YouTube Slow Hold

A Chrome extension that improves YouTube's playback experience for users who watch videos at 2× speed.

## Problem

YouTube's long-press feature temporarily increases playback speed to 2×. This is useful when watching at normal speed.

However, when already watching at 2× speed, long-pressing the video provides no additional benefit. The UI still displays the 2× indicator, but playback cannot be temporarily slowed down to catch important details.

## Solution

This extension introduces the opposite behavior:

* Watch videos at 2× speed
* Long-press on the video
* Playback temporarily switches to 1× speed
* Release the mouse button
* Playback automatically returns to 2× speed

This allows users to quickly slow down during important moments without manually changing playback settings.

## Features

* Lightweight Chrome extension
* Works directly on YouTube videos
* Long-press detection
* Temporary speed reduction from 2× to 1×
* Automatic restoration to 2× speed

## Installation

1. Clone this repository

```bash
git clone https://github.com/Hrishabh7664/yt_slow_extension.git
```

2. Open Chrome and navigate to:

```text
chrome://extensions
```

3. Enable **Developer Mode**

4. Click **Load unpacked**

5. Select the project folder

## Usage

1. Open any YouTube video
2. Set playback speed to **2×**
3. Press and hold on the video
4. Playback switches to **1×**
5. Release to return to **2×**

## Tech Stack

* JavaScript
* Chrome Extensions (Manifest V3)
* YouTube DOM interaction

## Motivation

This project started from a simple observation while watching lectures at 2× speed. Instead of manually changing playback speed whenever an important explanation appeared, I wanted a faster way to temporarily slow down the video.

## License

MIT License
