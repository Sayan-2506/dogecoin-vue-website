export default defineAppConfig({
  // 🔹 Глобальные настройки приложения
  name: "Dogecoin",
  version: "1.0.0",

  // 🔹 Кастомные настройки
  ui: {
    primaryColor: "#ff6600",
    theme: "dark",
  },

  // 🔹 Настройки для i18n (если используешь мультиязычность)
  i18n: {
    locales: ["en", "fr", "de", "ru"],
    defaultLocale: "en",
  },

  // 🔹 Настройки API
  api: {
    baseUrl: "https://api.example.com",
  },
});
