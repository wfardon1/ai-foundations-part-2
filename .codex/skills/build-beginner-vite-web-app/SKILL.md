---
name: build-beginner-vite-web-app
description: Build or update small, beginner-friendly Vite web apps for learning, practice, portfolios, and simple deployment. Use when a request calls for an approachable Vite project with clear content, a setup checklist, Linux/Git commands, a fictional lab-notes form, browser localStorage behavior, and beginner-oriented README and deployment instructions.
---

# Build Beginner Vite Web App

Create a simple Vite app that a beginner can read, run, change, and deploy.

## Workflow

1. Inspect the current folder, existing files, package scripts, and Git state. Preserve compatible project conventions and user changes.
2. Before editing any file, briefly explain the implementation plan to the user.
3. Build inside the current project folder. Use the existing Vite setup when present; otherwise create the smallest suitable Vite structure.
4. Prefer plain HTML, CSS, and JavaScript unless the existing project or user explicitly requires a framework.
5. Keep modules, names, event handlers, and storage logic direct and easy to trace. Add short comments only when they clarify non-obvious behavior.
6. Install dependencies when needed and run the production build. Fix build failures before reporting completion.
7. Review the final diff and report the result using the completion checklist below.

## Safety And Data

- Do not use external APIs, passwords, tokens, private data, or paid services.
- Store only fictional or demonstration data in `localStorage`.
- Do not add authentication, accounts, analytics, or environment secrets.
- Escape or safely render user-entered text. Prefer DOM `textContent` over injecting HTML.
- State clearly in the interface that notes remain in the current browser.

## Required Interface

Include:

- A setup checklist.
- A concise Linux and Git command cheat sheet.
- A fictional lab notes form with clear labels and sensible fields.
- Save and load behavior for lab notes using `localStorage`.
- A useful empty state and controls for deleting saved demo notes.
- Responsive, accessible styling with keyboard-visible focus states.

Keep the experience small. Do not add unrelated dashboards, dependencies, services, or abstractions.

## README

Create or update `README.md` with:

- A short project description and a note that stored data is fictional and browser-local.
- Prerequisites and install steps.
- Local development commands.
- Production build and preview commands.
- Git initialization, commit, remote, and GitHub push steps using placeholders instead of credentials.
- Vercel deployment steps using the free workflow, including build command and output directory when useful.
- A warning not to commit passwords, access tokens, or private data.

Ensure commands match the actual package scripts and project paths.

## Completion Report

After implementation, report:

- Files created or edited.
- How to install and run the app locally.
- How to build it for production.
- Verification performed and its result.
- Any assumptions made.

Do not claim a test, build, push, or deployment succeeded unless it was actually run and confirmed.
