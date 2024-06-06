# Fontend development technical assessment.

## Objective

Build a web application using PokeAPI that showcases frontend and backend development skills.
App hosted on github pages.

## Tools used

-   Vite
-   React
-   Github pages

## Deployment instructions

Step 1: Initialize Git Repository
Run the following commands to initialize a git repository in your Vite app and push your existing code to a remote repository on GitHub.

```js
$ git init
$ git add .
$ git commit -m "initial-commit"
$ git branch -M main
$ git remote add origin http://github.com/{username}/{repo-name}.git
$ git push -u origin main
```

Step 2: Update vite.config.js
Add the base URL in this file by setting the base as “/{repo-name}/”. For example, if your repository’s name is book-landing-page then set the base like this:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/book-landing-page/',
});
```

Step 3: Installed gh-pages
Install gh-pages package as a dev dependency.

```js
npm install gh-pages --save-dev
```

Step 4: Updated package.json
Update package.json with the following predeploy and deploy scripts.

```js
"scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
    ...
}
```

Add the complete website URL by setting homepage in package.json

```js
"homepage": "https://{username}.github.io/{repo-name}/"
```

Thus, your updated package.json will look like this:

```js
{
  "name": "poke",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://{username}.github.io/pokebase/",
  "type": "module",
  "scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
    "dev": "vite",
    "build": "vite build",
  }
}
```

Step 5: Run Deploy
Run the final command:

```js
npm run deploy
```

And you’re done!
