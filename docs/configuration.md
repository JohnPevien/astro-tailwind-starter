# Configuration

This document provides detailed information about the configuration files used in the Astro + Tailwind CSS Starter template.

## Astro Configuration

The [`astro.config.mjs`](astro.config.mjs:1) file is the main configuration file for Astro. It defines how your site is built and what integrations are used.

### Key Configuration Options

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Output configuration
  output: 'static', // Static site generation
  
  // Integrations
  integrations: [tailwind()],
  
  // Build options
  build: {
    format: 'directory' // Output files in directories
  },
  
  // Server options
  server: {
    port: 4321 // Development server port
  },
  
  // Site configuration
  site: 'https://your-domain.com', // Your production domain
  
  // Other options
  trailingSlash: 'always', // Add trailing slash to URLs
  compressHTML: true // Compress HTML output
});
```

### Customization Options

- **output**: Set to `'static'` for static site generation or `'server'` for server-side rendering
- **integrations**: Add Astro integrations like Tailwind CSS, MDX, etc.
- **build**: Configure build options like output format
- **server**: Set development server options like port
- **site**: Your production domain for absolute URLs
- **trailingSlash**: Control URL trailing slash behavior
- **compressHTML**: Enable HTML compression for smaller file sizes

## Tailwind CSS Configuration

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
          // ... more colors
          900: '#1e3a8a',
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
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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

### Customization Options

- **darkMode**: Set to `'class'` for class-based dark mode or `'media'` for system preference
- **content**: Define which files Tailwind should scan for class names
- **theme**: Extend or override the default Tailwind theme
- **plugins**: Add Tailwind plugins for additional functionality

## TypeScript Configuration

The [`tsconfig.json`](tsconfig.json:1) file configures TypeScript for your project.

### Key Configuration Options

```json
{
  "compilerOptions": {
    // Target and module
    "target": "ES2022",
    "module": "ESNext",
    
    // Module resolution
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    
    // Type checking
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    // Output
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    
    // Additional options
    "resolveJsonModule": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    
    // JSX support
    "jsx": "preserve",
    "jsxImportSource": "react"
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.astro"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

### Customization Options

- **target**: Set the JavaScript version to compile to
- **module**: Set the module system to use
- **strict**: Enable strict type checking
- **paths**: Configure path aliases for imports
- **include/exclude**: Specify which files to include/exclude from compilation

## ESLint Configuration

The [`.eslintrc.cjs`](.eslintrc.cjs:1) file configures ESLint for your project.

### Key Configuration Options

```javascript
module.exports = {
  // Environment
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  
  // Extends
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'astro/recommended',
    'prettier',
  ],
  
  // Parser
  parser: '@typescript-eslint/parser',
  
  // Parser options
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  
  // Plugins
  plugins: ['@typescript-eslint'],
  
  // Rules
  rules: {
    // Custom rules
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  
  // Overrides
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
```

### Customization Options

- **env**: Define the environments your code runs in
- **extends**: Extend existing ESLint configurations
- **parser**: Specify the parser to use
- **plugins**: Add ESLint plugins
- **rules**: Configure specific linting rules
- **overrides**: Override settings for specific file types

## Prettier Configuration

The [`.prettierrc`](.prettierrc:1) file configures Prettier for your project.

### Key Configuration Options

```json
{
  // Print width
  "printWidth": 100,
  
  // Tab width
  "tabWidth": 2,
  
  // Use tabs
  "useTabs": false,
  
  // Semicolons
  "semi": true,
  
  // Quotes
  "singleQuote": true,
  
  // Trailing commas
  "trailingComma": "es5",
  
  // Bracket spacing
  "bracketSpacing": true,
  
  // Bracket line
  "bracketSameLine": false,
  
  // Arrow function parentheses
  "arrowParens": "avoid",
  
  // End of line
  "endOfLine": "lf"
}
```

### Customization Options

- **printWidth**: Set the line length limit
- **tabWidth**: Set the number of spaces per indentation level
- **useTabs**: Use tabs instead of spaces
- **semi**: Add semicolons at the end of statements
- **singleQuote**: Use single quotes instead of double quotes
- **trailingComma**: Add trailing commas where valid
- **bracketSpacing**: Add spaces inside brackets
- **bracketSameLine**: Put the `>` of a multi-line JSX element at the end of the last line
- **arrowParens**: Include parentheses around a single arrow function parameter
- **endOfLine**: Set the end of line character

## Package.json Configuration

The [`package.json`](package.json:1) file defines your project's dependencies and scripts.

### Key Configuration Options

```json
{
  "name": "astro-tailwind-starter",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint . --ext .js,.ts,.astro",
    "lint:fix": "eslint . --ext .js,.ts,.astro --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "astro": "^4.0.0"
  },
  "devDependencies": {
    "@astrojs/tailwind": "^5.0.0",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "@typescript-eslint/eslint-plugin": "^6.13.0",
    "@typescript-eslint/parser": "^6.13.0",
    "astro-eslint-parser": "^0.16.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-config-prettier": "^9.0.0",
    "postcss": "^8.4.32",
    "prettier": "^3.1.0",
    "prettier-plugin-astro": "^0.12.2",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.3.0"
  }
}
```

### Customization Options

- **name**: Set your project name
- **version**: Set your project version
- **scripts**: Define custom scripts for development, building, etc.
- **dependencies**: Add runtime dependencies
- **devDependencies**: Add development dependencies

## Environment Variables

You can create a `.env` file in the root of your project to store environment variables:

```env
# Site configuration
SITE_URL=https://your-domain.com
SITE_TITLE=My Awesome Site
SITE_DESCRIPTION=A description of my site

# API keys (if needed)
ANALYTICS_ID=your-analytics-id
```

These variables can be accessed in your Astro components using `import.meta.env`:

```astro
---
const siteUrl = import.meta.env.SITE_URL;
const siteTitle = import.meta.env.SITE_TITLE;
---

<html>
  <head>
    <title>{siteTitle}</title>
  </head>
  <body>
    <!-- Your content here -->
  </body>
</html>
```

Note: Environment variables prefixed with `PUBLIC_` will be exposed to the client-side JavaScript.