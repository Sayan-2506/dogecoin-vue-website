<script setup>
defineProps({
  number: Number,
  title: String,
  text: String,
  buttonName: String,
});
</script>

<template>
  <div
    class="flex md:w-full flex-col h-full p-4 border rounded-lg text-black dark:text-white"
  >
    <h3
      class="lg:text-[26px] text-[22px] text-black dark:text-white font-semibold mb-4"
    >
      <span class="bg-d-yellow rounded-lg px-[8px] py-[3px]">
        0{{ number }}
      </span>
      {{ title }}
    </h3>

    <p class="lg:text-xl text-lg text-black dark:text-white mb-4 flex-1">
      {{ text }}
    </p>

    <Button
      class="!text-black dark:!text-white"
      :label="buttonName"
      variant="outlined"
      severity="contrast"
    />
  </div>
</template>

<style scoped>
.p-button-outlined.p-button-contrast {
  width: fit-content;
}
</style>
