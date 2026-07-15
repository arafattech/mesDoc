# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```
```bash
npm run serve
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```build
npm run build
```
```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Option 1: Vercel (Recommended)
This project is connected directly to Vercel and configured to automatically build and deploy every time you push new code to the `main` branch.

**Manual Deployment via Vercel CLI:**
If you want to manually trigger a deployment from your local machine, you can run:
```bash
# Build the project
yarn build

# Deploy to Vercel Production
npx vercel --prod
```
The project is pre-linked to Vercel via `.vercel/project.json` in both the root and `mesdoc` directories.

### Option 2: GitHub Pages (Alternative)
Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

