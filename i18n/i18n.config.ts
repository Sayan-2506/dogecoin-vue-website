export default defineI18nConfig(() => ({
  legacy: false, // Должно быть false для Composition API
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true, // Чтобы можно было использовать $t
}));
