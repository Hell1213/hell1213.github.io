# hell1213.github.io

A single-page editorial article: **Designing Fleet Alerts Operators Can Trust** — exception-driven fleet operations, written around OpenVTS's documented notification and workflow features.

Designed in black, white and warm grey. Vehicle imagery keeps its original colour.

## Stack

- Hand-written HTML, CSS and vanilla JavaScript. No build step.
- Fonts: Instrument Serif, Inter, JetBrains Mono (Google Fonts).
- Images: WebP with JPEG fallback.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish

This repository is named `hell1213.github.io`, so GitHub Pages serves it at
https://hell1213.github.io after pushing to `main`.

## A note on the visuals

The two explanatory figures (Fig. 01 decision flow, Fig. 03 two-track timeline)
and the Fig. 02 condition panel are drawn in HTML/CSS from the article's text.
The product imagery is illustrative mockup work, captioned as such: it is not a
capture of a live OpenVTS deployment. Replace those images with authorised
OpenVTS screenshots before presenting the piece as product documentation.
