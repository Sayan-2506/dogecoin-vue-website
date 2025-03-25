export const toggleDarkMode = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// Применяем тему при загрузке страницы
export const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
};
