# Dogecoin Vue Website

This is a multi-language website built with [Nuxt 3](https://nuxt.com) and Vue 3. It serves as a hub for the Dogecoin community containing documentation, how‑to guides, frequently asked questions and more.

The project uses:

- **PrimeVue** components with the Aura theme for UI elements
- **Tailwind CSS** for styling
- **@nuxtjs/i18n** to provide translations in English, French, German and Russian
- **Google Fonts** for typography
- Dark mode and language selection stored in local storage

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

### Other Package Managers

You can also use `pnpm`, `yarn` or `bun` if preferred:

```bash
pnpm install && pnpm dev
# or
yarn install && yarn dev
# or
bun install && bun run dev
```

## Building for Production

Create an optimized production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `pages/` – main pages such as the Dogepedia and Resources sections
- `components/` – reusable Vue components including the navigation menu and footer
- `i18n/` – locale files and i18n configuration
- `assets/` – global styles and images

## Deployment

The site is statically generated and can be deployed to any static hosting service. See the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.
