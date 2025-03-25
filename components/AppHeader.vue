<script setup>
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import { toggleDarkMode, applySavedTheme } from "@/utils/theme";

const { setLocale } = useI18n();

const selectedFlag = ref("circle-flags:us"); // Изначально английский флаг
const flags = {
  en: "circle-flags:us",
  fr: "circle-flags:fr",
  de: "circle-flags:de",
  ru: "circle-flags:ru",
};


const underMenuOpen = ref(false);
const toggleUnderMenu = (state) => {
  underMenuOpen.value = state;
};


const isMenuOpen = ref(false);
const isLangMenuOpen = ref(false);

const toggleMenu = (event) => {
  event.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event) => {
  if (!event.target.closest(".menu") && !event.target.closest(".burger-menu")) {
    isMenuOpen.value = false;
  }
};


const toggleLangMenu = (event) => {
  event.stopPropagation();
  isLangMenuOpen.value = !isLangMenuOpen.value;
};

const setLanguage = (lang) => {
  setLocale(lang);
  selectedFlag.value = flags[lang];
  isLangMenuOpen.value = false;
};

const isDownMenuOpen = ref(false);
const toggleDownList = (event) => {
  event.stopPropagation();
  isDownMenuOpen.value = !isDownMenuOpen.value;
}

onMounted(() => {
  applySavedTheme();
  document.addEventListener("click", closeMenu);
  isMenuOpen.value = false; // Закрываем меню при загрузке страницы
  underMenuOpen.value = false; // Закрываем меню при загрузке страницы
});
</script>

<template>
  <header class="px-2 py-3 lg:px-4 lg:py-3.5 bg-black sticky top-0 w-full z-20 shadow-lg">
    <div class="max-w-[1200px] mx-auto flex justify-between items-center">
      <a href="/">
        <NuxtImg src="/dogecoin-logo.png" alt="logo" class="object-cover sm:w-[192px] w-[142px]" />
      </a>

      <!-- Бургер-меню и язык/тема для мобильных устройств -->
      <div class="flex gap-3 items-center lg:hidden">
        <button class="relative cursor-pointer" @click="toggleDarkMode">
          <Icon name="proicons:dark-theme" size="25" class="!block !dark:hidden !text-white" />
        </button>
        <div class="relative lang-menu z-4">
          <button class="flex items-center space-x-1 cursor-pointer" @click="toggleLangMenu">
            <Icon :name="selectedFlag" size="22" />
            <Icon name="lucide:chevron-down" size="16" class="text-gray-500 transition-transform duration-300"
              :class="{ 'rotate-180': isLangMenuOpen }" />
          </button>
          <div v-show="isLangMenuOpen"
            class="absolute left-0 mt-2 w-18 bg-white shadow-lg rounded-lg transition-all duration-300">
            <ul class="py-2 text-gray-800">
              <li v-for="(flag, lang) in flags" :key="lang"
                class="lg:px-4 lg:py-2 px-3 py-1 lg:text-[16px] text-sm hover:bg-gray-200 cursor-pointer flex items-end"
                @click="setLanguage(lang)">
                <Icon :name="flag" size="18" class="mr-2" />
                {{ lang.toUpperCase() }}
              </li>
            </ul>
          </div>
        </div>
        <button class="burger-menu lg:hidden z-2 cursor-pointer" @click="toggleMenu">
          <Icon name="mdi:menu" size="30" class="text-white" v-if="!isMenuOpen" />
          <Icon name="mdi:close" size="30" class="text-white" v-else />
        </button>
      </div>

      <!-- Основное меню -->
      <nav :class="{ 'menu': true, 'menu-open': isMenuOpen }">
        <ul class="flex flex-col lg:flex-row items-end space-y-4 lg:space-y-0 lg:space-x-4 text-[16px]">
          <li class="pb-1 pt-1" @click="isMenuOpen = false">
            <a class="hover:underline hover:text-d-yellow" href="/">{{ $t("nav.home") }}</a>
          </li>
          <li class="pb-1 pt-1" @click="isMenuOpen = false">
            <a class="hover:underline hover:text-d-yellow" href="#what-is-dogecoin">{{ $t("nav.whatIs") }}</a>
          </li>
          <li class="pb-1 pt-1" @click="isMenuOpen = false">
            <a class="hover:underline hover:text-d-yellow" href="#">{{ $t("nav.wallets") }}</a>
          </li>
          <li class="pb-1 pt-1" @click="isMenuOpen = false">
            <a class="hover:underline hover:text-d-yellow" href="#community">{{ $t("nav.community") }}</a>
          </li>
          <li @click="isMenuOpen = false" class="pb-1 pt-1 desk-down-list" @mouseover="toggleUnderMenu(true)"
            @mouseleave="toggleUnderMenu(false)">
            <a class="relative hover:underline hover:text-d-yellow" href="#">
              {{ $t("nav.dogepedia") }}
            </a>
            <ul class="absolute top-[52px] bg-black rounded-md px-2 py-2 flex flex-col space-y-2"
              :class="{ 'hidden': !underMenuOpen }">
              <li class="hover:underline hover:text-d-yellow">
                <NuxtLink to="/dogepedia">Documentation</NuxtLink>
              </li>
              <li class="hover:underline hover:text-d-yellow">
                <NuxtLink to="/dogepedia#faq">FAQ</NuxtLink>
              </li>
              <li class="hover:underline hover:text-d-yellow">
                <NuxtLink to="/dogepedia#how">How Tos</NuxtLink>
              </li>
              <li class="hover:underline hover:text-d-yellow">
                <NuxtLink to="/resources">Resources</NuxtLink>
              </li>
            </ul>
          </li>
          <li @click="toggleDownList" class="relative text-right cursor-pointer mob-down-list">
            <Icon name="lucide:chevron-down" size="16" class="text-gray-500 transition-transform duration-300"
              :class="{ 'rotate-180': isDownMenuOpen }" />
            <a class="relative hover:underline hover:text-d-yellow ml-1" href="#">
              {{ $t("nav.dogepedia") }}
            </a>
            <!-- Анимация появления -->
            <transition name="slide-fade">
              <ul v-if="isDownMenuOpen" class="mob-down-list-ul mt-2">
                <li @click="isMenuOpen = false" class="hover:underline hover:text-d-yellow">
                  <NuxtLink to="/dogepedia">{{ $t("nav.downList.label1") }}</NuxtLink>
                </li>
                <li @click="isMenuOpen = false" class="hover:underline hover:text-d-yellow">
                  <NuxtLink to="/dogepedia#faq">{{ $t("nav.downList.label2") }}</NuxtLink>
                </li>
                <li @click="isMenuOpen = false" class="hover:underline hover:text-d-yellow">
                  <NuxtLink to="/dogepedia#how">{{ $t("nav.downList.label3") }}</NuxtLink>
                </li>
                <li @click="isMenuOpen = false" class="hover:underline hover:text-d-yellow">
                  <NuxtLink to="/resources">{{ $t("nav.downList.label4") }}</NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
      <div class="hidden lg:flex items-center space-x-1">
        <button class="flex self-center cursor-pointer" @click="toggleDarkMode">
          <Icon name="proicons:dark-theme" size="25" class="block dark:hidden" />
        </button>
        <div class="relative lang-menu">
          <button class="flex items-center space-x-1 cursor-pointer" @click="toggleLangMenu">
            <Icon :name="selectedFlag" size="22" />
            <Icon name="lucide:chevron-down" size="16" class="text-gray-500 transition-transform duration-300"
              :class="{ 'rotate-180': isLangMenuOpen }" />
          </button>
          <div v-show="isLangMenuOpen"
            class="absolute left-[-30px] mt-2 w-18 bg-white shadow-lg rounded-lg transition-all duration-300">
            <ul class="py-2 text-gray-800">
              <li v-for="(flag, lang) in flags" :key="lang"
                class="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center text-sm" @click="setLanguage(lang)">
                <Icon :name="flag" size="15" class="mr-2" />
                {{ lang.toUpperCase() }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 55px;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: end;
  transition: right 0.3s ease-in-out;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 25px;
}

.menu-open {
  right: 0;
}

.burger-menu {
  height: 30px;
}

.mob-down-list {
  display: none;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Стили списка */
.mob-down-list-ul {
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
}


@media (min-width: 1024px) {
  .menu {
    position: static;
    width: auto;
    height: auto;
    background: transparent;
    backdrop-filter: none;
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
}

@media (max-width: 1024px) {
  .mob-down-list {
    display: block;
  }

  .desk-down-list {
    display: none;
  }
}
</style>
