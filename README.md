# Astro Tailwind Starter
Astro with tailwind and primary blocks (nav, layout, footer)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── components/
│   └── blocks/
│       └── navigation.astro
│       └── layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/components/` and `src/blocks` is where we would ideally put any Astro/React/Vue/Svelte/Preact components/blocks.


Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:3000`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help`    | Get help using the Astro CLI                     |

## 🤔 Not familiar with Astro and TailwindCSS?

### Astro
Check their [documentation](https://docs.astro.build) or jump into Astro's [Discord server](https://astro.build/chat).

### Tailwind
Check tailwind's [documentation](https://tailwindcss.com/docs/installation)

