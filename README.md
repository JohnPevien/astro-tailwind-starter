# Astro Tailwind Starter Template

[![Astro](https://img.shields.io/badge/Astro-4.0.0-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready starter template for building modern websites with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). This template includes pre-configured settings, reusable components, and optimized build output for fast, responsive websites.

## ✨ Features

- **Astro 4.0** - Modern static site generator with component islands architecture
- **Tailwind CSS 3.4** - Utility-first CSS framework with JIT compiler
- **TypeScript Support** - Type-safe development experience
- **Responsive Design** - Mobile-first approach with breakpoint utilities
- **Dark Mode** - Automatic dark/light theme switching
- **Optimized Build** - Minified HTML, CSS, and JavaScript output
- **ESLint & Prettier** - Code quality and formatting tools
- **Component-Based Architecture** - Reusable UI components and layout blocks

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher) or [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [Git](https://git-scm.com/) (for version control)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/astro-tailwind-starter.git
```

2. Navigate to the project directory:
```bash
cd astro-tailwind-starter
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🧪 Development

Start the development server with hot reloading:
```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:3000`.

## 🏗 Building for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist/` directory.

## 🔍 Preview Production Build

Preview your production build locally:
```bash
npm run preview
# or
yarn preview
```

This will start a local server to serve your built site.

## ☁ Deployment

### Netlify
1. Push your code to a Git repository
2. Create a new site in Netlify and connect your repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click "Deploy site"

### Vercel
1. Push your code to a Git repository
2. Create a new project in Vercel and import your repository
3. Vercel will automatically detect Astro and configure settings
4. Click "Deploy"

## 📁 Project Structure

```
├── docs/                # Documentation files
│   ├── index.md         # Main documentation index
│   ├── getting-started.md
│   ├── project-structure.md
│   ├── configuration.md
│   ├── components.md
│   ├── styling.md
│   ├── deployment.md
│   ├── customization.md
│   ├── contributing.md
│   └── faq.md
├── public/              # Static assets (images, fonts, etc.)
│   └── favicon.svg
├── src/
│   ├── blocks/          # Layout components
│   │   ├── footer.astro
│   │   ├── layout.astro
│   │   └── navigation.astro
│   ├── components/      # Reusable UI components
│   │   ├── Button.astro
│   │   ├── FeatureCard.astro
│   │   ├── Features.astro
│   │   ├── Head.astro
│   │   └── Hero.astro
│   ├── pages/           # Page components
│   │   └── index.astro
│   ├── styles/          # Global styles
│   │   └── global.css
│   └── env.d.ts         # TypeScript environment declarations
├── .eslintignore        # ESLint ignore patterns
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore patterns
├── .prettierignore      # Prettier ignore patterns
├── .prettierrc          # Prettier configuration
├── astro.config.mjs     # Astro configuration
├── LICENSE              # MIT License
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 📚 Documentation

For detailed documentation, please refer to the [`docs/`](docs/) folder:

- [Getting Started](docs/getting-started.md) - Installation and setup guide
- [Project Structure](docs/project-structure.md) - Overview of the project structure
- [Configuration](docs/configuration.md) - Configuration options for Astro, Tailwind CSS, and TypeScript
- [Components](docs/components.md) - Documentation of available components
- [Styling](docs/styling.md) - Styling with Tailwind CSS
- [Deployment](docs/deployment.md) - Deployment guide for various platforms
- [Customization](docs/customization.md) - Customization guide
- [Contributing](docs/contributing.md) - Contributing guidelines
- [FAQ](docs/faq.md) - Frequently asked questions

## 🎨 Customization

For detailed customization options, please refer to the [Customization Guide](docs/customization.md).

### Quick Customization

#### Tailwind Configuration
Modify the Tailwind CSS configuration in [`tailwind.config.mjs`](tailwind.config.mjs):
- Update color palette in `theme.extend.colors`
- Add custom spacing values in `theme.extend.spacing`
- Modify breakpoints in `theme.screens`
- Add/remove plugins in `plugins` array

#### Astro Configuration
Update project settings in [`astro.config.mjs`](astro.config.mjs):
- Change `site` URL for production deployment
- Modify build optimization settings
- Add new integrations

#### Global Styles
Customize global styles in [`src/styles/global.css`](src/styles/global.css):
- Modify CSS variables for light/dark mode
- Add custom CSS rules
- Import additional CSS files

#### Components
Create new components in `src/components/` and import them into pages or layouts.

## 🤝 Contributing

Contributions are welcome! Please see the [Contributing Guide](docs/contributing.md) for detailed information on how to contribute to this project.

### Quick Start

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests if applicable.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) creators for the utility-first CSS framework
- [Open Source Contributors](https://github.com/astro-community) for inspiration and components
