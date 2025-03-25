<script setup>
defineProps({
    item: Object
});
</script>

<template>
    <div>
        <h3 class="text-2xl font-semibold" :class="{ 'mb-2': item['title'] }">{{ item['title'] }}</h3>
        <p class="mb-4 text-lg">{{ item['description'] }}</p>
        <ul class="ml-10 mb-4 text-lg">
            <li class="border-l-2 pl-3.5 mb-0.5 border-white" v-for="(infoItem, i) in item['items']">
                <a class="hover:text-d-orange" :href="infoItem['url']">{{ infoItem['label'] }}</a>
            </li>
        </ul>
    </div>
</template>
