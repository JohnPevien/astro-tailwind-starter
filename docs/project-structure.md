# Project Structure

This document provides an overview of the project structure for the Astro + Tailwind CSS Starter template.

## Directory Overview

```
astro-tailwind-starter/
├── docs/                   # Documentation files
│   ├── index.md           # Main documentation index
│   ├── getting-started.md # Installation and setup guide
│   ├── project-structure.md # This file
│   ├── configuration.md    # Configuration options
│   ├── components.md       # Component documentation
│   ├── styling.md         # Styling with Tailwind CSS
│   ├── deployment.md      # Deployment guide
│   ├── customization.md   # Customization guide
│   ├── contributing.md    # Contributing guidelines
│   └── faq.md            # Frequently asked questions
├── public/               # Static assets (images, fonts, etc.)
├── src/                  # Source code
│   ├── blocks/           # Layout components
│   │   ├── layout.astro  # Main layout component
│   │   ├── navigation.astro # Navigation component
│   │   └── footer.astro  # Footer component
│   ├── components/       # Reusable components
│   │   ├── Button.astro  # Button component
│   │   ├── FeatureCard.astro # Feature card component
│   │   ├── Features.astro # Features grid component
│   │   ├── Hero.astro    # Hero section component
│   │   └── Head.astro    # SEO head component
│   ├── pages/            # Page components
│   │   └── index.astro   # Homepage
│   └── styles/           # Stylesheets
│       └── global.css    # Global styles and Tailwind imports
├── .astro/               # Astro build directory
├── .eslintrc.cjs         # ESLint configuration
├── .eslintignore         # ESLint ignore rules
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── .prettierignore      # Prettier ignore rules
├── astro.config.mjs     # Astro configuration
├── LICENSE              # MIT License file
├── package.json         # Project dependencies and scripts
├── README.md            # Project README
├── tailwind.config.mjs  # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Key Directories

### `/src/`

The `src/` directory contains all the source code for your project.

#### `/src/blocks/`

This directory contains layout components that define the structure of your site:

- [`layout.astro`](src/blocks/layout.astro:1) - The main layout component that wraps all pages
- [`navigation.astro`](src/blocks/navigation.astro:1) - The responsive navigation bar with dark mode toggle
- [`footer.astro`](src/blocks/footer.astro:1) - The footer component with multiple sections

#### `/src/components/`

This directory contains reusable components that can be used across your site:

- [`Button.astro`](src/components/Button.astro:1) - A versatile button component with variants and sizes
- [`FeatureCard.astro`](src/components/FeatureCard.astro:1) - A card component for displaying features
- [`Features.astro`](src/components/Features.astro:1) - A grid of feature cards
- [`Hero.astro`](src/components/Hero.astro:1) - A hero section component with headline and CTAs
- [`Head.astro`](src/components/Head.astro:1) - SEO head component with meta tags and structured data

#### `/src/pages/`

This directory contains the page components for your site. Astro automatically creates routes based on the file structure:

- [`index.astro`](src/pages/index.astro:1) - The homepage of your site

#### `/src/styles/`

This directory contains the stylesheets for your site:

- [`global.css`](src/styles/global.css:1) - Global styles and Tailwind CSS imports

### `/public/`

The `public/` directory contains static assets that will be copied to the build output:

- Images
- Fonts
- Favicon
- Robots.txt
- Other static files

### `/docs/`

The `docs/` directory contains the documentation for your project:

- [`index.md`](docs/index.md:1) - Main documentation index
- [`getting-started.md`](docs/getting-started.md:1) - Installation and setup guide
- And other documentation files

## File Naming Conventions

This project follows consistent file naming conventions:

- **Component files**: PascalCase (e.g., `Button.astro`, `FeatureCard.astro`)
- **Page files**: lowercase (e.g., `index.astro`, `about.astro`)
- **Configuration files**: lowercase with extensions (e.g., `tailwind.config.mjs`, `tsconfig.json`)
- **Documentation files**: lowercase with hyphens (e.g., `getting-started.md`, `project-structure.md`)

## Astro File Structure

Astro files (`.astro`) have a specific structure:

```astro
---
// Frontmatter: JavaScript/TypeScript code
const title = 'My Page';
const description = 'Page description';
---

<!-- HTML Template: Your markup here -->
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{description}</p>
  </body>
</html>
```

The frontmatter (between the `---` lines) is where you write JavaScript/TypeScript code, and the rest is your HTML template.

## Component Organization

Components are organized based on their purpose:

1. **Blocks** (`src/blocks/`): Layout components that define the structure of your site
2. **Components** (`src/components/`): Reusable components that can be used across your site
3. **Pages** (`src/pages/`): Page components that define the content of your site

This organization helps maintain a clear separation of concerns and makes it easier to find and update components.