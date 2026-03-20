# Styling with Tailwind CSS

This document provides information about styling with Tailwind CSS in the Astro + Tailwind CSS Starter template.

## Overview

The template uses Tailwind CSS for styling, a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS. Tailwind CSS is configured to work seamlessly with Astro and includes support for responsive design, dark mode, and custom themes.

## Global Styles

The [`global.css`](src/styles/global.css:1) file includes the Tailwind directives and custom CSS variables for dark mode support.

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Dark mode CSS variables */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted: 210 40% 98%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 98%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}

/* Base styles */
* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  background-image: linear-gradient(to bottom, #f8fafc, #f1f5f9);
}

.dark body {
  background-image: linear-gradient(to bottom, #0f172a, #1e293b);
}
```

## Tailwind Configuration

The [`tailwind.config.mjs`](tailwind.config.mjs:1) file configures Tailwind CSS for your project.

### Key Configuration Options

```javascript
import type { Config } from 'tailwindcss';

export default {
  // Dark mode strategy
  darkMode: 'class', // Use class-based dark mode
  
  // Content sources
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/blocks/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  
  // Theme configuration
  theme: {
    extend: {
      // Color palette
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  
  // Plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config;
```

## Dark Mode

The template includes support for dark mode using the class strategy. This means that dark mode is toggled by adding or removing the `dark` class from the `html` element.

### Dark Mode Toggle

The navigation component includes a dark mode toggle button that persists the user's preference in localStorage:

```astro
---
// src/blocks/navigation.astro
<script>
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const html = document.documentElement;

  // Check for saved preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    html.classList.add('dark');
  }

  darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
</script>
```

### Using Dark Mode Classes

You can use dark mode variants in your Tailwind classes by prefixing them with `dark:`:

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  This div has a white background in light mode and a dark gray background in dark mode.
</div>
```

## Responsive Design

Tailwind CSS provides responsive utilities for building responsive designs. The template uses a mobile-first approach, meaning that styles apply to all screen sizes unless overridden by a breakpoint.

### Breakpoints

The default breakpoints are:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Usage

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  This div is full width on small screens, half width on medium screens, and one-third width on large screens.
</div>
```

## Custom Components

You can create custom components using Tailwind's `@layer` directive:

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-colors;
  }
  
  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md overflow-hidden;
  }
}
```

## Typography

The template includes the `@tailwindcss/typography` plugin for styling prose content. This plugin provides a set of prose classes for styling text content.

### Usage

```html
<article class="prose prose-lg dark:prose-invert">
  <h1>Article Title</h1>
  <p>This is a paragraph of text.</p>
  <!-- More content -->
</article>
```

### Typography Variants

- `prose`: Default prose styling
- `prose-sm`: Smaller text
- `prose-lg`: Larger text
- `prose-xl`: Even larger text
- `prose-2xl`: Largest text
- `dark:prose-invert`: Inverted colors for dark mode

## Forms

The template includes the `@tailwindcss/forms` plugin for styling form elements. This plugin provides a set of base styles for form elements.

### Usage

```html
<form class="space-y-4">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
    />
  </div>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
    />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Aspect Ratio

The template includes the `@tailwindcss/aspect-ratio` plugin for maintaining aspect ratios. This plugin provides a set of aspect ratio classes.

### Usage

```html
<div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

## Custom Utilities

You can create custom utilities using Tailwind's `@layer` directive:

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

## Extending the Theme

You can extend the Tailwind theme by adding custom values to the `theme.extend` section of the `tailwind.config.mjs` file:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#6366f1',
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

## Best Practices

1. **Use utility classes for styling**: Avoid writing custom CSS when possible.
2. **Use responsive variants**: Make your designs responsive from the start.
3. **Use dark mode variants**: Support dark mode from the start.
4. **Use the `@layer` directive**: Organize your custom styles.
5. **Use the `@apply` directive**: Reuse utility classes in custom components.
6. **Use the theme**: Extend the theme rather than overriding it.
7. **Use the plugins**: Use the official plugins for common use cases.
8. **Keep your configuration clean**: Only include what you need.
9. **Use the JIT compiler**: The JIT compiler is enabled by default in Tailwind CSS v3.
10. **Use the PurgeCSS**: PurgeCSS is included in Astro and will remove unused CSS in production builds.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [Tailwind CSS Forms Plugin](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind CSS Aspect Ratio Plugin](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)