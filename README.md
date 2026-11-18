# hell1213.github.io

A single-page editorial field note on fleet operations, designed in black, white and warm grey. Vehicle images keep their original colour.

## Stack

- Hand-written HTML, CSS and vanilla JavaScript. No build step.
- Fonts: Instrument Serif, Inter, JetBrains Mono (Google Fonts).
- Images: WebP with JPEG fallback, generated from the original PNG assets.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish

This repository is named `hell1213.github.io`, so GitHub Pages serves it at
https://hell1213.github.io after the first push to `main`.

```bash
git init
git add .
git commit -m "Field Note 01: Every vehicle. One calm screen."
git branch -M main
git remote add origin git@github.com:Hell1213/hell1213.github.io.git
git push -u origin main
```
