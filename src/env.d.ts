/// <reference types="astro/client" />

/// <reference types="astro/client-image" />
/// <reference types="astro/client-logger" />

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.avif" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const styles: string;
  export default styles;
}

declare module "*.scss" {
  const styles: string;
  export default styles;
}

declare module "*.sass" {
  const styles: string;
  export default styles;
}

declare module "*.less" {
  const styles: string;
  export default styles;
}

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.mdx" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "tailwindcss" {
  const config: any;
  export default config;
}

interface ImportMetaEnv {
  readonly [key: string]: string | boolean | number | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
