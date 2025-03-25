// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
      { code: "de", iso: "de-DE", name: "Deutsch", file: "de.json" },
      { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales/",
    lazy: true,
    vueI18n: "./i18n/i18n.config.ts",
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  googleFonts: {
    families: {
      "Comic+Neue": [400, 700], // Добавляем Comic Neue с начертаниями 400 и 700
      Roboto: true,
      Inter: [400, 700],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    display: "swap", // Рекомендуется для улучшения производительности
  },

  app: {
    head: {
      link: [
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com/" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com/",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700",
        },
      ],
    },
  },
});
