# hell1213.github.io

A single-page editorial article: **Designing fleet alerts operators can trust** — a customer-facing look at GPS fleet alerts, fleet alert management, and exception-driven fleet operations, built around OpenVTS's documented tracking, notification, history, report, workflow, and API capabilities.

The piece is written for fleet owners, transport companies, logistics operators, and dispatch teams managing large vehicle fleets.

## Stack

- Hand-written HTML, CSS and vanilla JavaScript. No build step.
- Type: Inter only (400/500/600/700), sentence case, hierarchy through size, weight, and spacing.
- Figures: original HTML/CSS diagrams. No fabricated product screenshots.
- OG image: an original Inter title card (`assets/img/og.jpg`).
- Masthead: the OpenVTS wordmark sits top-left. Its icon is a dashed placeholder;
  replace `.brand-mark` in `assets/style.css` with the real brand icon when available.
- Article column: 784px, one aligned column for prose, figures, and tables.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish

This repository is named `hell1213.github.io`, so GitHub Pages serves it at
https://hell1213.github.io after pushing to `main`.

The root URL is the article's canonical address, so no separate slug is needed.

## A note on the visuals

The three figures are explanatory diagrams drawn from the article's examples: the
decision flow (Fig. 01), the Over Stay / Over Idle condition panel (Fig. 02), and
the two-track response timeline (Fig. 03). None is a capture of the OpenVTS
interface, and no mockup is presented as a real product screen.

Verified product captures are still outstanding. Each slot is marked with a
commented-out `figure.shot` block in `index.html`; drop in the file and uncomment.

| Slot | Where | File | Shows |
| --- | --- | --- | --- |
| A | Section 04, after Fig. 02 | `assets/img/notification-preferences.webp` | Notification Preferences with Over Stay and Over Idle |
| B | Section 04, geofencing paragraph | `assets/img/geofence-config.webp` | Geofence configuration or map view |
| C | Section 05, after the investigation steps | `assets/img/trip-history.webp` | Historical route or trip history |
| D | Section 06, before the automation paragraph | `assets/img/workflow-builder.webp` | Tested Workflow with execution details |

Export at 1600x1000 or wider (2x if possible), remove personal data, and use the
alt text already written in each comment.

## SEO

- Primary: GPS fleet alerts, fleet alert management, exception-driven fleet operations.
- Secondary: fleet monitoring software, GPS tracking notifications, vehicle tracking alerts, fleet operations management, GPS telemetry, geofencing for fleet management, fleet workflow automation.
- Long-tail: how to manage GPS alerts across large fleets, how fleet managers handle unexpected vehicle stops, improving fleet operations with GPS tracking alerts, reducing unnecessary fleet tracking notifications.

Metadata, Open Graph, Twitter cards, and JSON-LD are set in `index.html`.
