# Rishabh Bhardwaj — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS**.

## Project structure

```
portfolio/
├── public/
│   ├── photo.jpg                     # profile photo
│   └── Rishabh_Bhardwaj_resume.pdf   # downloadable résumé
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── UI.jsx                    # shared small components (Eyebrow, Tag)
│   ├── App.jsx
│   ├── main.jsx
│   ├── data.js                       # all resume content lives here
│   ├── hooks.js                      # typewriter + scroll-spy hooks
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## Deploying

Push this folder to a GitHub repo, then deploy on **Vercel** or **Netlify**:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

Both platforms auto-detect this from `package.json` — no extra config needed.

## Editing content

All resume content (experience, projects, skills, education, achievements, contact info)
lives in `src/data.js`. Edit that one file to update the site — the components just render it.

To swap the photo or résumé, replace the files in `public/` and keep the same filenames
(or update the paths in `src/data.js`).
