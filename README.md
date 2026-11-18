# Stefan Visser — Developer Portfolio

My personal portfolio site, showing the web apps I've built as a junior full-stack developer.

**Live site:** https://stefan-visser-portfolio.vercel.app/

## What's on the site

| Page | What it shows |
|---|---|
| **Home** (`index.html`) | Introduction, quick facts, featured projects, skills and the trade skills that carry over from auto-electrical work |
| **Projects** (`projects.html`) | ShopLog and FitTrack Pro (original projects), plus Expense Tracker (a tutorial-based app with my own security extension) |
| **About** (`about.html`) | My move from apprentice auto electrician to developer, plus an experience and education timeline |
| **Contact** (`contact.html`) | Email, GitHub and availability |
| **404** (`404.html`) | Friendly "page not found" page, served automatically by Vercel |

## Tech

- Plain **HTML, CSS and JavaScript**: no framework, no build step, no dependencies
- **CSS custom properties** (variables) for colours, spacing and fonts, with automatic dark mode via `prefers-color-scheme`
- Responsive layout with CSS Grid and Flexbox, and a mobile hamburger menu
- Accessibility basics: skip link, visible keyboard focus, `aria-current` on the active page, WCAG AA colour contrast and support for reduced motion
- Open Graph tags, so links show a preview image when shared
- Hosted on **Vercel**, which redeploys automatically on every push to `main`

## Project structure

```
stefan-visser-portfolio/
├── index.html          Home page
├── projects.html       Projects page
├── about.html          About page
├── contact.html        Contact page
├── 404.html            Not-found page
├── css/
│   └── style.css       All styles (sections numbered in the table of contents at the top)
├── js/
│   └── main.js         Mobile menu toggle + automatic footer year
├── assets/
│   └── images/         Project screenshots (WebP) and the link-preview image
├── vercel.json         Vercel settings (clean URLs, e.g. /about instead of /about.html)
└── README.md
```

## Run it locally

There's nothing to install.

1. Clone the repo:
   ```bash
   git clone https://github.com/vstefan699-ai/stefan-visser-portfolio.git
   cd stefan-visser-portfolio
   ```
2. Open `index.html` in a browser, or use the **Live Server** extension in VS Code (right-click `index.html` → **Open with Live Server**) so the page reloads as you edit.

## Deployment

The repo is connected to Vercel. Pushing to `main` triggers a new deployment, usually live within about a minute. `vercel.json` turns on `cleanUrls`, so `/projects` serves `projects.html`.

## Featured projects

- **ShopLog**: React, Firebase and PWA vehicle service tracker, in real use by an independent mechanic. [Live](https://react-garage-tracker.vercel.app/) · [Code](https://github.com/vstefan699-ai/React_GarageTracker)
- **FitTrack Pro**: Django and PostgreSQL gym and personal-training management app. [Live](https://python-full-stack-django-project-9z.vercel.app/home/) · [Code](https://github.com/vstefan699-ai/FitTrack-Python-Full-Stack-Django-Project)
- **Expense Tracker**: tutorial-based React and Firebase app, extended with Firestore security rules and 30 automated rules tests. [Live](https://expense-tracker-78e06.web.app) · [Code](https://github.com/vstefan699-ai/expense-tracker)

## Contact

- Email: vstefan699@gmail.com
- GitHub: https://github.com/vstefan699-ai
