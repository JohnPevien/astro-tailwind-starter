# Components

This document provides detailed information about the components included in the Astro + Tailwind CSS Starter template.

## Overview

The template includes a set of reusable components that you can use throughout your site. These components are organized into two main categories:

1. **Blocks** (`src/blocks/`): Layout components that define the structure of your site
2. **Components** (`src/components/`): Reusable components that can be used across your site

## Blocks

### Layout Component

The [`Layout`](src/blocks/layout.astro:1) component is the main layout component that wraps all pages.

#### Props

- `title` (string): The page title
- `description` (string): The page description

#### Usage

```astro
---
import Layout from '../blocks/layout.astro';

const title = 'Home';
const description = 'Welcome to my website';
---

<Layout title={title} description={description}>
  <main>
    <h1>Welcome to my website</h1>
    <p>This is the home page.</p>
  </main>
</Layout>
```

### Navigation Component

The [`Navigation`](src/blocks/navigation.astro:1) component is the responsive navigation bar with dark mode toggle.

#### Features

- Responsive design with mobile hamburger menu
- Dark mode toggle with persistence
- Logo and navigation links
- Smooth transitions and hover effects

#### Usage

The navigation component is automatically included in the layout component. You can customize it by modifying the `src/blocks/navigation.astro` file.

#### Customization

To add or modify navigation links:

```astro
<!-- In src/blocks/navigation.astro -->
<li>
  <a href="/new-page" class="hover:text-primary-600 transition-colors">New Page</a>
</li>
```

### Footer Component

The [`Footer`](src/blocks/footer.astro:1) component is the footer with multiple sections and social media links.

#### Features

- Multiple sections for different types of content
- Social media links
- Copyright notice with dynamic year
- Responsive design

#### Usage

The footer component is automatically included in the layout component. You can customize it by modifying the `src/blocks/footer.astro` file.

#### Customization

To add or modify footer sections:

```astro
<!-- In src/blocks/footer.astro -->
<div class="mb-6">
  <h3 class="text-lg font-semibold mb-3">New Section</h3>
  <ul class="space-y-2">
    <li>
      <a href="/new-link" class="text-gray-600 hover:text-primary-600 transition-colors">New Link</a>
    </li>
  </ul>
</div>
```

## Components

### Button Component

The [`Button`](src/components/Button.astro:1) component is a versatile button component with variants and sizes.

#### Props

- `variant` (string): The button variant ('primary', 'secondary', 'outline', 'ghost')
- `size` (string): The button size ('sm', 'md', 'lg')
- `href` (string, optional): The URL to link to (renders as `<a>` if provided)
- `type` (string, optional): The button type ('button', 'submit', 'reset')
- `disabled` (boolean, optional): Whether the button is disabled

#### Usage

```astro
---
import Button from '../components/Button.astro';
---

<!-- Primary button -->
<Button variant="primary" size="md">Click me</Button>

<!-- Secondary button -->
<Button variant="secondary" size="md">Click me</Button>

<!-- Outline button -->
<Button variant="outline" size="md">Click me</Button>

<!-- Ghost button -->
<Button variant="ghost" size="md">Click me</Button>

<!-- Link button -->
<Button variant="primary" href="/about">About</Button>

<!-- Disabled button -->
<Button variant="primary" disabled>Disabled</Button>
```

### Hero Component

The [`Hero`](src/components/Hero.astro:1) component is a full-width hero section with headline and CTAs.

#### Props

- `title` (string): The hero title
- `description` (string, optional): The hero description
- `primaryButtonText` (string, optional): The primary button text
- `primaryButtonHref` (string, optional): The primary button URL
- `secondaryButtonText` (string, optional): The secondary button text
- `secondaryButtonHref` (string, optional): The secondary button URL
- `backgroundImage` (string, optional): The background image URL

#### Usage

```astro
---
import Hero from '../components/Hero.astro';
---

<Hero
  title="Welcome to our website"
  description="We create amazing experiences for our customers."
  primaryButtonText="Get Started"
  primaryButtonHref="/get-started"
  secondaryButtonText="Learn More"
  secondaryButtonHref="/about"
/>
```

### FeatureCard Component

The [`FeatureCard`](src/components/FeatureCard.astro:1) component is a card component for displaying features.

#### Props

- `title` (string): The feature title
- `description` (string): The feature description
- `icon` (string, optional): The icon name or URL
- `iconAlt` (string, optional): The icon alt text

#### Usage

```astro
---
import FeatureCard from '../components/FeatureCard.astro';
---

<FeatureCard
  title="Fast Performance"
  description="Optimized for speed and performance."
  icon="/icons/fast.svg"
  iconAlt="Fast performance icon"
/>
```

### Features Component

The [`Features`](src/components/Features.astro:1) component is a grid of feature cards.

#### Props

- `title` (string, optional): The section title
- `description` (string, optional): The section description
- `features` (array): An array of feature objects

#### Usage

```astro
---
import Features from '../components/Features.astro';
---

Features
  title="Our Features"
  description="Explore the amazing features we offer."
  features={[
    {
      title: "Fast Performance",
      description: "Optimized for speed and performance.",
      icon: "/icons/fast.svg",
      iconAlt: "Fast performance icon"
    },
    {
      title: "Responsive Design",
      description: "Looks great on all devices.",
      icon: "/icons/responsive.svg",
      iconAlt: "Responsive design icon"
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive interface.",
      icon: "/icons/easy.svg",
      iconAlt: "Easy to use icon"
    }
  ]}
/>
```

### Head Component

The [`Head`](src/components/Head.astro:1) component is the SEO head component with meta tags and structured data.

#### Props

- `title` (string): The page title
- `description` (string): The page description
- `url` (string, optional): The page URL
- `imageUrl` (string, optional): The image URL for social sharing
- `type` (string, optional): The page type ('website', 'article', etc.)
- `keywords` (string, optional): Comma-separated keywords
- `noIndex` (boolean, optional): Whether to noindex the page

#### Usage

```astro
---
import Head from '../components/Head.astro';
---

<Head
  title="Home"
  description="Welcome to our website"
  url="https://example.com"
  imageUrl="https://example.com/images/og-image.jpg"
  type="website"
  keywords="astro, tailwind, starter, template"
/>
```

## Creating Custom Components

You can create your own components by adding `.astro` files to the `src/components/` directory.

### Example: Custom Card Component

```astro
---
// src/components/Card.astro
// Props interface
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

### Using the Custom Component

```astro
---
import Card from '../components/Card.astro';
---

<Card
  title="Custom Card"
  description="This is a custom card component."
  imageUrl="/images/card-image.jpg"
  imageAlt="Card image"
>
  <p class="mt-4">This content is in the slot.</p>
</Card>
```

## Component Best Practices

1. **Keep components small and focused**: Each component should have a single responsibility.
2. **Use props for configuration**: Make components configurable through props rather than hardcoding values.
3. **Use slots for content**: Use slots for content that might vary between instances.
4. **Document your components**: Include comments and documentation for your components.
5. **Use TypeScript**: Define prop interfaces for type safety.
6. **Follow naming conventions**: Use PascalCase for component file names.
7. **Organize components logically**: Group related components together.

## Component Styling

Components are styled using Tailwind CSS classes. You can customize the appearance of components by modifying the classes in the component files.

### Example: Custom Button Styles

```astro
---
// src/components/Button.astro
export interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  // ... other props
}

const { variant = 'primary', size = 'md', ...props } = Astro.props;

// Variant classes
const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  ghost: 'text-blue-600 hover:bg-blue-50',
  custom: 'bg-purple-600 text-white hover:bg-purple-700',
};

// Size classes
const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const classes = `${variantClasses[variant]} ${sizeClasses[size]} rounded-md font-medium transition-colors`;
---

<!-- Button element -->
<button class={classes} {...props}>
  <slot />
</button>
```

This approach makes it easy to add new variants and customize existing ones.