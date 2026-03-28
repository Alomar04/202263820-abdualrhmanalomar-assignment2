# Technical Documentation — SWE-363 Portfolio

## Architecture
This project is a lightweight static site organized by responsibility:

- `index.html` — Core structure and content for all sections (navbar, hero, projects, contact).
- `css/` — Global styling overrides and resets that complement Tailwind utilities.
  - `css/styles.css` — Smooth color transitions, font selection, and base resets.
- `js/` — Interactive behavior and UI logic.
  - `js/script.js` — Greeting logic, theme toggle with persistence, and contact form handler.
- `assets/` — Reserved for images and media (not required for the current placeholder images).

## Technical Decisions
- **Tailwind CSS** was selected to speed up layout creation and ensure consistent responsive design without maintaining large custom stylesheets. It enables rapid iteration, clean utility-based layouts, and mobile-first adjustments.
- **Vanilla JavaScript** was chosen for performance and minimal overhead. The required interactivity (greeting logic, theme persistence, form alert) is simple and does not justify a framework dependency.

## Compatibility Statement
The portfolio has been tested and verified on:
- Google Chrome (desktop)
- Microsoft Edge (desktop)
- Mobile Safari (iOS)
