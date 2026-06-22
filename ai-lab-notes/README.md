# AI Lab Notes

AI Lab Notes is a small beginner-friendly Vite app for keeping a setup checklist,
reviewing common Linux and Git commands, and saving fictional lab notes in the browser.

The app uses plain HTML, CSS, and JavaScript. It does not use external APIs, accounts,
passwords, private data, or paid services. Lab notes are stored only in your browser's
`localStorage`.

## Install

You need [Node.js](https://nodejs.org/) (version 20.19 or newer) and npm.

```bash
cd ai-lab-notes
npm install
```

## Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local address printed in the terminal, usually `http://localhost:5173`.
Press `Ctrl+C` in the terminal to stop the server.

## Build for production

```bash
npm run build
```

Vite creates the production files in `dist/`. To preview that build locally:

```bash
npm run preview
```

## Upload to GitHub

Create an empty repository on GitHub first. Do not add a README or `.gitignore` on
GitHub because this project already includes them. Then run:

```bash
git init
git add .
git commit -m "Build AI Lab Notes"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-lab-notes.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. GitHub may ask you to sign in.
Never put a password or access token in the project files.

## Deploy to Vercel

Vercel offers a free plan suitable for this small static project.

1. Push the project to GitHub using the steps above.
2. Sign in to [Vercel](https://vercel.com/) and select **Add New > Project**.
3. Import the GitHub repository containing AI Lab Notes.
4. Confirm **Vite** is selected as the framework preset.
5. Keep the build command as `npm run build` and output directory as `dist`.
6. Select **Deploy**.

No environment variables, API keys, or paid services are required.
