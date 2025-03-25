<script setup>
import { useI18n } from "#imports";
import { onMounted } from "vue";

const { setLocale } = useI18n();

onMounted(() => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) setLocale(savedLang);
});
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
