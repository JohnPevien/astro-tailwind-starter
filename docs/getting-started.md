# Getting Started

This guide will help you set up the Astro + Tailwind CSS Starter template on your local machine and create your first page.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/astro-tailwind-starter.git
cd astro-tailwind-starter
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Start the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Your site will be available at `http://localhost:4321`. The development server supports hot module replacement (HMR), so changes you make will be reflected immediately.

## Creating Your First Page

### 1. Create a New Page

Create a new file in the `src/pages/` directory. For example, to create an "About" page:

```astro
---
// src/pages/about.astro
import Layout from '../blocks/layout.astro';

const title = 'About Us';
const description = 'Learn more about our company and team.';
---

<Layout title={title} description={description}>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">About Us</h1>
    <p class="text-lg mb-4">
      Welcome to our website! We're a team of passionate developers creating amazing experiences.
    </p>
    <!-- Add your content here -->
  </main>
</Layout>
```

### 2. Add Navigation Link

Update the navigation component to include a link to your new page:

```astro
---
// src/blocks/navigation.astro
// Find the navigation links section and add:
<li>
  <a href="/about" class="hover:text-primary-600 transition-colors">About</a>
</li>
```

### 3. View Your Page

Save your changes and navigate to `http://localhost:4321/about` to see your new page.

## Available Scripts

Here are the available npm scripts:

```json
{
  "dev": "astro dev",        // Start development server
  "start": "astro dev",      // Alias for dev
  "build": "astro build",    // Build for production
  "preview": "astro preview", // Preview production build
  "astro": "astro",          // Run Astro CLI
  "lint": "eslint . --ext .js,.ts,.astro", // Lint code
  "lint:fix": "eslint . --ext .js,.ts,.astro --fix", // Fix linting issues
  "format": "prettier --write .", // Format code
  "format:check": "prettier --check ." // Check formatting
}
```

## Next Steps

Now that you have the project set up, you can:

1. Learn about the [Project Structure](project-structure.md)
2. Explore the available [Components](components.md)
3. Customize the [Configuration](configuration.md)
4. Learn about [Styling with Tailwind CSS](styling.md)
5. Prepare for [Deployment](deployment.md)