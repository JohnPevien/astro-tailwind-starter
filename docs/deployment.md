# Deployment

This document provides information about deploying your Astro + Tailwind CSS Starter template to various platforms.

## Build Process

Before deploying your site, you need to build it for production:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

This command will create a `dist/` directory with your production-ready static files.

## Previewing the Build

You can preview the production build locally:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

This command will start a local server at `http://localhost:4321` to preview your production build.

## Deployment Platforms

### Vercel

[Vercel](https://vercel.com/) is a popular platform for deploying static sites with automatic deployments from Git.

#### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign up for a Vercel account at [vercel.com](https://vercel.com/).
3. Click "New Project" and import your Git repository.
4. Vercel will automatically detect that you're using Astro and configure the build settings.
5. Click "Deploy" to deploy your site.

#### Custom Build Settings

If you need to customize the build settings, create a `vercel.json` file in the root of your project:

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ]
}
```

### Netlify

[Netlify](https://www.netlify.com/) is another popular platform for deploying static sites with continuous deployment.

#### Deploying to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/).
3. Click "New site from Git" and connect your Git repository.
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site" to deploy your site.

#### Custom Build Settings

If you need to customize the build settings, create a `netlify.toml` file in the root of your project:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

### GitHub Pages

[GitHub Pages](https://pages.github.com/) is a free service for hosting static sites directly from a GitHub repository.

#### Deploying to GitHub Pages

1. Push your code to a GitHub repository.
2. Install the `gh-pages` package:

```bash
# Using npm
npm install gh-pages --save-dev

# Using yarn
yarn add gh-pages --dev

# Using pnpm
pnpm add gh-pages --save-dev
```

3. Add a `deploy` script to your `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. Update your `astro.config.mjs` to set the base path:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  base: '/your-repo-name/', // Replace with your repository name
});
```

5. Run the deploy script:

```bash
# Using npm
npm run deploy

# Using yarn
yarn deploy

# Using pnpm
pnpm deploy
```

6. In your GitHub repository settings, go to the "Pages" section and select the `gh-pages` branch as the source.

### Cloudflare Pages

[Cloudflare Pages](https://pages.cloudflare.com/) is a free platform for deploying static sites with global CDN.

#### Deploying to Cloudflare Pages

1. Push your code to a Git repository (GitHub or GitLab).
2. Sign up for a Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com/).
3. Go to the "Pages" section and click "Create a project".
4. Connect your Git repository.
5. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy" to deploy your site.

### Firebase Hosting

[Firebase Hosting](https://firebase.google.com/docs/hosting) is a free service for hosting static sites with global CDN.

#### Deploying to Firebase Hosting

1. Install the Firebase CLI:

```bash
# Using npm
npm install -g firebase-tools

# Using yarn
yarn global add firebase-tools

# Using pnpm
pnpm add -g firebase-tools
```

2. Log in to your Google account:

```bash
firebase login
```

3. Initialize Firebase in your project:

```bash
firebase init hosting
```

4. When prompted, select the following options:
   - "Use an existing project" or "Create a new project"
   - "Public directory": `dist`
   - "Configure as a single-page app": `No`
   - "Set up automatic builds and deploys with GitHub": `Yes` (optional)

5. Deploy your site:

```bash
firebase deploy
```

## Environment Variables

If your site uses environment variables, you'll need to configure them in your deployment platform:

### Vercel

1. Go to your project dashboard on Vercel.
2. Click on the "Settings" tab.
3. Click on "Environment Variables".
4. Add your environment variables.

### Netlify

1. Go to your site dashboard on Netlify.
2. Click on "Site settings".
3. Click on "Build & deploy".
4. Click on "Environment".
5. Add your environment variables.

### GitHub Pages

For GitHub Pages, you'll need to use a build script that replaces environment variables during the build process. You can use a package like `dotenv` for this:

```bash
# Using npm
npm install dotenv --save-dev

# Using yarn
yarn add dotenv --dev

# Using pnpm
pnpm add dotenv --save-dev
```

Then create a `deploy.js` script:

```javascript
// deploy.js
require('dotenv').config();
const { execSync } = require('child_process');

// Build the site
execSync('npm run build', { stdio: 'inherit' });

// Deploy to GitHub Pages
execSync('gh-pages -d dist', { stdio: 'inherit' });
```

And update your `package.json`:

```json
{
  "scripts": {
    "deploy": "node deploy.js"
  }
}
```

### Cloudflare Pages

1. Go to your project dashboard on Cloudflare.
2. Click on your project.
3. Click on "Settings".
4. Click on "Environment variables".
5. Add your environment variables.

### Firebase Hosting

1. Install the Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Log in to your Google account:

```bash
firebase login
```

3. Set environment variables:

```bash
firebase functions:config:set env_var_name="value"
```

## Custom Domains

Most deployment platforms allow you to use a custom domain for your site. The process varies by platform:

### Vercel

1. Go to your project dashboard on Vercel.
2. Click on the "Settings" tab.
3. Click on "Domains".
4. Add your custom domain and follow the DNS instructions.

### Netlify

1. Go to your site dashboard on Netlify.
2. Click on "Domain management".
3. Click on "Add custom domain".
4. Add your custom domain and follow the DNS instructions.

### GitHub Pages

1. In your GitHub repository settings, go to the "Pages" section.
2. Under "Custom domain", enter your custom domain.
3. Configure your DNS to point to GitHub Pages.

### Cloudflare Pages

1. Go to your project dashboard on Cloudflare.
2. Click on your project.
3. Click on "Custom domains".
4. Add your custom domain and follow the DNS instructions.

### Firebase Hosting

1. Go to your Firebase project dashboard.
2. Click on "Hosting".
3. Click on "Add custom domain".
4. Add your custom domain and follow the DNS instructions.

## Redirects

If you need to set up redirects, you can do so using platform-specific configuration files:

### Vercel

Create a `vercel.json` file:

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

### Netlify

Create a `netlify.toml` file:

```toml
[[redirects]]
  from = "/old-path"
  to = "/new-path"
  status = 301
```

### GitHub Pages

For GitHub Pages, you'll need to handle redirects in your application code or use a client-side redirect.

### Cloudflare Pages

Create a `_redirects` file in the `public` directory:

```
/old-path /new-path 301
```

### Firebase Hosting

Create a `firebase.json` file:

```json
{
  "hosting": {
    "redirects": [
      {
        "source": "/old-path",
        "destination": "/new-path",
        "type": 301
      }
    ]
  }
}
```

## Headers

If you need to set custom HTTP headers, you can do so using platform-specific configuration files:

### Vercel

Create a `vercel.json` file:

```json
{
  "headers": [
    {
      "source": "/path",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Netlify

Create a `netlify.toml` file:

```toml
[[headers]]
  for = "/path"
  [headers.values]
    Cache-Control = "max-age=31536000, immutable"
```

### GitHub Pages

For GitHub Pages, you'll need to set headers in your application code or use a service worker.

### Cloudflare Pages

Create a `_headers` file in the `public` directory:

```
/path
  Cache-Control: max-age=31536000, immutable
```

### Firebase Hosting

Create a `firebase.json` file:

```json
{
  "hosting": {
    "headers": [
      {
        "source": "/path",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

## Performance Optimization

To optimize your site for performance:

1. **Enable compression**: Most platforms automatically compress your files, but you can also enable it in your `astro.config.mjs`:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  compressHTML: true,
});
```

2. **Optimize images**: Use the Astro Image component to optimize images:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../images/my-image.jpg';
---

<Image src={myImage} alt="My image" width={800} height={600} />
```

3. **Minify CSS and JavaScript**: Astro automatically minifies CSS and JavaScript in production builds.

4. **Use a CDN**: Most platforms provide a CDN out of the box.

5. **Cache static assets**: Set appropriate cache headers for static assets.

6. **Use lazy loading**: Use the `loading="lazy"` attribute for images and iframes.

7. **Preload critical resources**: Use the `<link rel="preload">` tag for critical resources.

8. **Use service workers**: Use service workers to cache assets and enable offline functionality.

## Monitoring

After deploying your site, you'll want to monitor its performance and uptime:

### Google Analytics

To add Google Analytics to your site:

1. Create a Google Analytics account and property.
2. Get your tracking ID.
3. Add the tracking ID to your `Head` component:

```astro
---
// src/components/Head.astro
export interface Props {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  type?: string;
  keywords?: string;
  noIndex?: boolean;
  analyticsId?: string;
}

const { title, description, url, imageUrl, type, keywords, noIndex, analyticsId } = Astro.props;
---

<!-- Google Analytics -->
{analyticsId && (
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}></script>
)}
{analyticsId && (
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '{analyticsId}');
  </script>
)}
```

### Uptime Monitoring

Consider using an uptime monitoring service like:

- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Performance Monitoring

Consider using a performance monitoring service like:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)