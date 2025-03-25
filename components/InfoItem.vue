<script setup>
defineProps({
  img: "",
  title: "",
  text: "",
  linkText: "",
  link: "",
});
</script>

<template>
  <div class="p-4 flex flex-col gap-4 text-d-black bg-[#fcf4df] rounded-lg">
    <NuxtImg class="sm:w-[98px] w-[68px] object-cover" :src="img" :alt="img" />
    <h3 class="font-bold text-xl">{{ title }}</h3>
    <p class="text-lg">{{ text }}</p>
    <a :href="link" class="text-lg block underline">{{ linkText }}</a>
  </div>
</template>
