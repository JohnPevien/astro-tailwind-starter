# Frequently Asked Questions (FAQ)

This document provides answers to frequently asked questions about the Astro + Tailwind CSS Starter template.

## General Questions

### What is the Astro + Tailwind CSS Starter template?

The Astro + Tailwind CSS Starter template is a minimal, production-ready starter template for building static websites with Astro and Tailwind CSS. It includes responsive design, dark mode support, TypeScript, SEO optimization, essential UI components, and linting/formatting setup.

### What are the system requirements?

- Node.js (v18.0 or higher)
- npm, yarn, or pnpm
- Git

### Is this template free to use?

Yes, this template is free to use for both personal and commercial projects. It is licensed under the MIT License.

## Installation and Setup

### How do I install the template?

You can install the template by following these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/astro-tailwind-starter.git
cd astro-tailwind-starter
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

3. Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### How do I update dependencies?

You can update dependencies by running:

```bash
# Using npm
npm update

# Using yarn
yarn upgrade

# Using pnpm
pnpm update
```

### How do I add a new dependency?

You can add a new dependency by running:

```bash
# Using npm
npm install package-name

# Using yarn
yarn add package-name

# Using pnpm
pnpm add package-name
```

## Development

### How do I start the development server?

You can start the development server by running:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### How do I build the project for production?

You can build the project for production by running:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

### How do I preview the production build?

You can preview the production build by running:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## Styling

### How do I customize the colors?

You can customize the colors by modifying the `tailwind.config.mjs` file:

```javascript
// tailwind.config.mjs
import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... more colors
          900: '#1e3a8a',
        },
        // Add your custom colors here
        brand: {
          light: '#6366f1',
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
      },
    },
  },
} satisfies Config;
```

### How do I change the font?

You can change the font by modifying the `tailwind.config.mjs` file and adding the font to your project:

```javascript
// tailwind.config.mjs
import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Your Font', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config;
```

### How do I add custom CSS?

You can add custom CSS to the `src/styles/global.css` file:

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add custom styles here */
@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors;
  }
}
```

### How do I use dark mode?

The template uses class-based dark mode. You can toggle dark mode by adding or removing the `dark` class from the `html` element. The navigation component includes a dark mode toggle button that persists the user's preference in localStorage.

You can use dark mode variants in your Tailwind classes by prefixing them with `dark:`:

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  This div has a white background in light mode and a dark gray background in dark mode.
</div>
```

## Components

### How do I create a new component?

You can create a new component by adding a `.astro` file to the `src/components` directory:

```astro
---
// src/components/MyComponent.astro
export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-semibold mb-2">{title}</h2>
  {description && <p class="text-gray-600">{description}</p>}
  <slot />
</div>
```

### How do I use a component?

You can use a component by importing it into your page or another component:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';
import MyComponent from '../components/MyComponent.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <MyComponent
    title="My Component"
    description="This is my custom component."
  >
    <p>This content is in the slot.</p>
  </MyComponent>
</Layout>
```

### How do I customize the navigation?

You can customize the navigation by modifying the `src/blocks/navigation.astro` file:

```astro
---
// src/blocks/navigation.astro
---

<!-- Add this to the navigation links -->
<li>
  <a href="/new-page" class="hover:text-primary-600 transition-colors">New Page</a>
</li>
```

### How do I customize the footer?

You can customize the footer by modifying the `src/blocks/footer.astro` file:

```astro
---
// src/blocks/footer.astro
---

<!-- Add this to the footer sections -->
<div class="mb-6">
  <h3 class="text-lg font-semibold mb-3">New Section</h3>
  <ul class="space-y-2">
    <li>
      <a href="/new-link" class="text-gray-600 hover:text-primary-600 transition-colors">New Link</a>
    </li>
  </ul>
</div>
```

## Deployment

### How do I deploy to Vercel?

You can deploy to Vercel by following these steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign up for a Vercel account at [vercel.com](https://vercel.com/).
3. Click "New Project" and import your Git repository.
4. Vercel will automatically detect that you're using Astro and configure the build settings.
5. Click "Deploy" to deploy your site.

### How do I deploy to Netlify?

You can deploy to Netlify by following these steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/).
3. Click "New site from Git" and connect your Git repository.
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site" to deploy your site.

### How do I deploy to GitHub Pages?

You can deploy to GitHub Pages by following these steps:

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

## Troubleshooting

### Why is my CSS not updating?

If your CSS is not updating, try the following:

1. Restart the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

2. Clear your browser cache
3. Check for syntax errors in your CSS files

### Why is my component not rendering?

If your component is not rendering, try the following:

1. Check that you've imported the component correctly
2. Check that you're using the component correctly
3. Check for syntax errors in your component file
4. Check the browser console for errors

### Why is my build failing?

If your build is failing, try the following:

1. Check the build output for error messages
2. Check for syntax errors in your code
3. Make sure all dependencies are installed:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

4. Make sure you're using the correct Node.js version (v18.0 or higher)

### Why is my site not working in production?

If your site is not working in production, try the following:

1. Check the browser console for errors
2. Check that all paths are correct (especially for images and other assets)
3. Check that environment variables are correctly configured
4. Check the deployment platform's logs for errors

## Contributing

### How do I contribute to the project?

You can contribute to the project by following these steps:

1. Fork the repository on GitHub
2. Create a new branch for your feature or fix
3. Make your changes
4. Test your changes
5. Commit your changes
6. Push your branch to your fork
7. Create a pull request

For more information, see the [Contributing Guide](contributing.md).

### How do I report a bug?

You can report a bug by creating an issue on GitHub. When reporting a bug, please include:

1. A clear and descriptive title
2. A detailed description of the problem
3. Steps to reproduce the issue
4. Expected behavior
5. Actual behavior
6. Screenshots (if applicable)
7. Your environment (OS, browser, Node.js version, etc.)

### How do I suggest an enhancement?

You can suggest an enhancement by creating an issue on GitHub. When suggesting an enhancement, please include:

1. A clear and descriptive title
2. A detailed description of the enhancement
3. The motivation for the enhancement
4. Proposed solution (if applicable)
5. Alternative solutions (if applicable)

## Other Questions

### Can I use this template for commercial projects?

Yes, this template is licensed under the MIT License, which allows you to use it for both personal and commercial projects.

### Can I remove the attribution?

Yes, you can remove the attribution from the footer. The template is licensed under the MIT License, which allows you to modify it as you see fit.

### How do I contact the maintainer?

You can contact the maintainer by creating an issue on GitHub or by sending an email to the maintainer's email address (if provided).

### Where can I get help?

If you need help with the template, you can:

1. Check the [documentation](index.md)
2. Search existing issues on GitHub
3. Create a new issue on GitHub
4. Ask for help in the community discussions (if available)