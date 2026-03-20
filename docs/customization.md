# Customization

This document provides information about customizing the Astro + Tailwind CSS Starter template to fit your specific needs.

## Overview

The template is designed to be easily customizable. You can change the colors, fonts, layout, components, and more to match your brand and requirements.

## Colors

### Primary Colors

The template uses a blue color scheme by default. You can change the primary colors by modifying the `tailwind.config.mjs` file:

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
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
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

### Dark Mode Colors

The template includes CSS variables for dark mode colors. You can customize these in the `src/styles/global.css` file:

```css
/* src/styles/global.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other variables */
}
```

## Fonts

The template uses Inter as the default font. You can change the font by modifying the `tailwind.config.mjs` file:

```javascript
// tailwind.config.mjs
import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Your Font', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
} satisfies Config;
```

You'll also need to include the font in your project. You can use Google Fonts, self-hosted fonts, or a font service like Adobe Fonts or Typekit.

### Using Google Fonts

1. Go to [Google Fonts](https://fonts.google.com/) and select your font.
2. Copy the `<link>` tag and add it to the `<head>` section of your layout component:

```astro
---
// src/blocks/layout.astro
import Head from '../components/Head.astro';
import Navigation from './navigation.astro';
import Footer from './footer.astro';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <Head title={title} description={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <Navigation />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### Self-Hosting Fonts

1. Download the font files.
2. Place them in the `public/fonts` directory.
3. Add the font to your CSS:

```css
/* src/styles/global.css */
@font-face {
  font-family: 'Your Font';
  src: url('/fonts/your-font.woff2') format('woff2'),
       url('/fonts/your-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

## Logo

You can replace the default logo in the navigation component by modifying the `src/blocks/navigation.astro` file:

```astro
---
// src/blocks/navigation.astro
---

<!-- Replace this -->
<div class="flex-shrink-0">
  <span class="text-xl font-bold">Astro Starter</span>
</div>

<!-- With this -->
<div class="flex-shrink-0">
  <img src="/images/logo.svg" alt="Your Logo" class="h-8 w-auto" />
</div>
```

Make sure to place your logo in the `public/images` directory.

## Favicon

You can replace the default favicon by placing your favicon files in the `public` directory:

- `favicon.ico` (for older browsers)
- `favicon.svg` (for modern browsers)
- `apple-touch-icon.png` (for Apple devices)

You can also add the favicon links to the `Head` component:

```astro
---
// src/components/Head.astro
---

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## Navigation

### Adding Navigation Links

You can add or modify navigation links by editing the `src/blocks/navigation.astro` file:

```astro
---
// src/blocks/navigation.astro
---

<!-- Add this to the navigation links -->
<li>
  <a href="/new-page" class="hover:text-primary-600 transition-colors">New Page</a>
</li>
```

### Dropdown Navigation

If you need dropdown navigation, you can modify the navigation component:

```astro
---
// src/blocks/navigation.astro
---

<div class="relative group">
  <button class="flex items-center space-x-1 hover:text-primary-600 transition-colors">
    <span>Dropdown</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
    <a href="/dropdown-item-1" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dropdown Item 1</a>
    <a href="/dropdown-item-2" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dropdown Item 2</a>
  </div>
</div>
```

## Footer

### Adding Footer Sections

You can add or modify footer sections by editing the `src/blocks/footer.astro` file:

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

### Social Media Links

You can add or modify social media links by editing the `src/blocks/footer.astro` file:

```astro
---
// src/blocks/footer.astro
---

<!-- Add this to the social media links -->
<a href="https://new-social-media.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-600 transition-colors">
  <span class="sr-only">New Social Media</span>
  <!-- Add your SVG icon here -->
</a>
```

## Components

### Creating Custom Components

You can create custom components by adding `.astro` files to the `src/components` directory:

```astro
---
// src/components/CustomCard.astro
export interface Props {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const { title, description, imageUrl, imageAlt } = Astro.props;
---

<div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
  {imageUrl && (
    <img src={imageUrl} alt={imageAlt || title} class="w-full h-48 object-cover" />
  )}
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">{title}</h3>
    {description && <p class="text-gray-600">{description}</p>}
    <slot />
  </div>
</div>
```

### Using Custom Components

You can use your custom components in your pages:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import CustomCard from '../components/CustomCard.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <Hero
    title="Welcome to our website"
    description="We create amazing experiences for our customers."
  />
  
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-center mb-8">Custom Cards</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CustomCard
        title="Custom Card 1"
        description="This is a custom card."
        imageUrl="/images/card1.jpg"
        imageAlt="Custom card 1"
      />
      <CustomCard
        title="Custom Card 2"
        description="This is another custom card."
        imageUrl="/images/card2.jpg"
        imageAlt="Custom card 2"
      />
      <CustomCard
        title="Custom Card 3"
        description="This is yet another custom card."
        imageUrl="/images/card3.jpg"
        imageAlt="Custom card 3"
      />
    </div>
  </div>
</Layout>
```

## Layout

### Custom Layout

You can create a custom layout by adding a new `.astro` file to the `src/blocks` directory:

```astro
---
// src/blocks/custom-layout.astro
import Head from '../components/Head.astro';
import Navigation from './navigation.astro';
import Footer from './footer.astro';

export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <Head title={title} description={description} />
    <!-- Add custom head elements here -->
  </head>
  <body class="bg-gray-50">
    <Navigation />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
    <!-- Add custom body elements here -->
  </body>
</html>
```

### Using Custom Layout

You can use your custom layout in your pages:

```astro
---
// src/pages/custom-page.astro
import CustomLayout from '../blocks/custom-layout.astro';

const title = 'Custom Page';
const description = 'This is a custom page';
---

<CustomLayout title={title} description={description}>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">Custom Page</h1>
    <p>This is a custom page with a custom layout.</p>
  </div>
</CustomLayout>
```

## SEO

### Custom SEO Tags

You can customize the SEO tags by modifying the `src/components/Head.astro` component:

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
  author?: string;
  twitterHandle?: string;
}

const { 
  title, 
  description, 
  url, 
  imageUrl, 
  type = 'website', 
  keywords, 
  noIndex, 
  author,
  twitterHandle
} = Astro.props;
---

<!-- Add these meta tags -->
{author && <meta name="author" content={author} />}
{twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
```

### Structured Data

You can add structured data to your pages by modifying the `src/components/Head.astro` component:

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
  structuredData?: object;
}

const { 
  title, 
  description, 
  url, 
  imageUrl, 
  type = 'website', 
  keywords, 
  noIndex, 
  structuredData 
} = Astro.props;
---

<!-- Add structured data -->
{structuredData && (
  <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
)}
```

Then you can pass structured data to the Head component:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';
import Head from '../components/Head.astro';

const title = 'Home';
const description = 'Welcome to our website';
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": title,
  "description": description,
  "url": "https://example.com"
};
---

<Layout title={title} description={description}>
  <Head title={title} description={description} structuredData={structuredData} />
  <!-- Page content -->
</Layout>
```

## Scripts

### Adding Scripts

You can add scripts to your pages or components:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <!-- Page content -->
  
  <!-- Add this script -->
  <script>
    console.log('Hello, world!');
  </script>
</Layout>
```

### External Scripts

You can add external scripts:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <!-- Page content -->
  
  <!-- Add this external script -->
  <script src="https://example.com/script.js"></script>
</Layout>
```

### Script with Attributes

You can add scripts with attributes:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <!-- Page content -->
  
  <!-- Add this script with attributes -->
  <script defer src="https://example.com/script.js" integrity="sha256-abc123" crossorigin="anonymous"></script>
</Layout>
```

## Styles

### Custom CSS

You can add custom CSS to your pages or components:

```astro
---
// src/pages/index.astro
import Layout from '../blocks/layout.astro';

const title = 'Home';
const description = 'Welcome to our website';
---

<Layout title={title} description={description}>
  <!-- Page content -->
  
  <!-- Add this style -->
  <style>
    h1 {
      color: #3b82f6;
    }
  </style>
</Layout>
```

### Global Styles

You can add global styles to the `src/styles/global.css` file:

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add custom styles here */
h1 {
  @apply text-3xl font-bold text-primary-600;
}

/* Add custom components */
@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors;
  }
}
```

## Environment Variables

You can use environment variables in your project by creating a `.env` file:

```env
# Site configuration
SITE_URL=https://your-domain.com
SITE_TITLE=Your Site Title
SITE_DESCRIPTION=Your site description

# API keys
API_KEY=your-api-key
```

Then you can use these variables in your components:

```astro
---
// src/components/Head.astro
const siteUrl = import.meta.env.SITE_URL;
const siteTitle = import.meta.env.SITE_TITLE;
const siteDescription = import.meta.env.SITE_DESCRIPTION;
---

<link rel="canonical" href={siteUrl} />
<meta property="og:title" content={siteTitle} />
<meta property="og:description" content={siteDescription} />
```

Note: Environment variables prefixed with `PUBLIC_` will be exposed to the client-side JavaScript.