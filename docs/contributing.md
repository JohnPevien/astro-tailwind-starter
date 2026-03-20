# Contributing

Thank you for your interest in contributing to the Astro + Tailwind CSS Starter template! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

This project adheres to a Code of Conduct. By participating in this project, you agree to abide by its terms.

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by creating an issue on GitHub. When reporting a bug, please include:

1. A clear and descriptive title
2. A detailed description of the problem
3. Steps to reproduce the issue
4. Expected behavior
5. Actual behavior
6. Screenshots (if applicable)
7. Your environment (OS, browser, Node.js version, etc.)

### Suggesting Enhancements

If you have an idea for an enhancement, please create an issue on GitHub. When suggesting an enhancement, please include:

1. A clear and descriptive title
2. A detailed description of the enhancement
3. The motivation for the enhancement
4. Proposed solution (if applicable)
5. Alternative solutions (if applicable)

### Submitting Pull Requests

If you'd like to contribute code, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes
4. Test your changes
5. Commit your changes
6. Push your branch to your fork
7. Create a pull request

## Development Setup

### Prerequisites

- Node.js (v18.0 or higher)
- npm, yarn, or pnpm
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/your-username/astro-tailwind-starter.git
cd astro-tailwind-starter
```

3. Add the original repository as a remote:

```bash
git remote add upstream https://github.com/original-username/astro-tailwind-starter.git
```

4. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

5. Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

## Coding Standards

### TypeScript

This project uses TypeScript with strict type checking. Please ensure your code follows these guidelines:

1. Use TypeScript for all new code
2. Define types for all props and variables
3. Use interfaces for object types
4. Avoid using `any` type
5. Use proper type assertions when necessary

### Astro

This project uses Astro for static site generation. Please ensure your code follows these guidelines:

1. Use `.astro` files for components and pages
2. Use the frontmatter for JavaScript/TypeScript code
3. Use slots for flexible content composition
4. Use props for component configuration
5. Use the `Astro.props` interface for type safety

### Tailwind CSS

This project uses Tailwind CSS for styling. Please ensure your code follows these guidelines:

1. Use utility classes for styling
2. Avoid writing custom CSS when possible
3. Use responsive variants for responsive design
4. Use dark mode variants for dark mode support
5. Use the `@layer` directive for custom styles

### ESLint and Prettier

This project uses ESLint and Prettier for code formatting and linting. Please ensure your code follows these guidelines:

1. Run the linter before committing:

```bash
# Using npm
npm run lint

# Using yarn
yarn lint

# Using pnpm
pnpm lint
```

2. Fix any linting issues:

```bash
# Using npm
npm run lint:fix

# Using yarn
yarn lint:fix

# Using pnpm
pnpm lint:fix
```

3. Format your code:

```bash
# Using npm
npm run format

# Using yarn
yarn format

# Using pnpm
pnpm format
```

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. Please follow these guidelines:

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

```
feat: add button component

feat(button): add variant prop

fix: correct typo in navigation

fix(navigation): correct mobile menu toggle

docs: update contributing guide

docs(contributing): add commit guidelines

style: format code with prettier

style(button): format button component

refactor: simplify hero component

refactor(hero): extract feature cards

perf: optimize image loading

perf(images): lazy load images

test: add button component tests

test(button): add variant tests

build: update dependencies

build(deps): update tailwindcss to v3.3.0

ci: add github actions workflow

ci(github): add build workflow

chore: update readme

chore(readme): add installation instructions
```

## Pull Request Guidelines

### Pull Request Process

1. Ensure your code follows the coding standards
2. Ensure your code is properly tested
3. Ensure your commit messages follow the commit guidelines
4. Update the documentation if necessary
5. Create a pull request with a clear title and description
6. Link any relevant issues in the pull request description
7. Wait for your pull request to be reviewed
8. Address any feedback from the reviewers
9. Once approved, your pull request will be merged

### Pull Request Template

When creating a pull request, please use the following template:

```markdown
## Description

[Description of the changes made in this pull request]

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Checklist

- [ ] My code follows the coding standards of this project
- [ ] My code is properly tested
- [ ] My commit messages follow the commit guidelines
- [ ] I have updated the documentation as necessary
- [ ] I have read the [CONTRIBUTING](docs/contributing.md) document
- [ ] I have signed-off my commits with `git commit -s`

## Related Issues

[Closes #123, Fixes #456, etc.]
```

## Testing

### Running Tests

This project currently doesn't have a test suite, but you can manually test your changes by:

1. Starting the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

2. Testing your changes in the browser
3. Building the project:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

4. Previewing the build:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

### Cross-Browser Testing

Please test your changes in the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Please test your changes on the following screen sizes:

- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px and above)

## Documentation

### Updating Documentation

If your changes affect the functionality of the project, please update the relevant documentation files:

- [`README.md`](README.md:1) - Project overview and setup instructions
- [`docs/getting-started.md`](docs/getting-started.md:1) - Installation and setup guide
- [`docs/project-structure.md`](docs/project-structure.md:1) - Project structure overview
- [`docs/configuration.md`](docs/configuration.md:1) - Configuration options
- [`docs/components.md`](docs/components.md:1) - Component documentation
- [`docs/styling.md`](docs/styling.md:1) - Styling with Tailwind CSS
- [`docs/deployment.md`](docs/deployment.md:1) - Deployment guide
- [`docs/customization.md`](docs/customization.md:1) - Customization guide
- [`docs/faq.md`](docs/faq.md:1) - Frequently asked questions

### Adding New Documentation

If you need to add new documentation, please create a new Markdown file in the `docs` directory and update the table of contents in [`docs/index.md`](docs/index.md:1).

## Release Process

This project follows [Semantic Versioning](https://semver.org/) for releases. The release process is as follows:

1. Update the version in `package.json`
2. Update the changelog
3. Create a release tag
4. Create a release on GitHub

## Questions

If you have any questions about contributing to this project, please feel free to:

1. Create an issue on GitHub
2. Join our community discussions
3. Contact the maintainers directly

Thank you for contributing to the Astro + Tailwind CSS Starter template!