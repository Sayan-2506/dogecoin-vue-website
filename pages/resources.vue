<script setup>
import { useI18n } from "vue-i18n";


const { t } = useI18n();

const resourcesDocList = [
    {
        title: t("resourcesDocList.tools.title"),
        items: [
            { label: t("resourcesDocList.tools.items.sochain"), url: 'https://sochain.com/DOGE' },
            { label: t("resourcesDocList.tools.items.dogechain"), url: 'https://dogechain.info/' },
            { label: t("resourcesDocList.tools.items.blockcypher"), url: 'https://live.blockcypher.com/doge/' },
            { label: t("resourcesDocList.tools.items.blockshibe"), url: 'https://blockshibe.net/' },
            { label: t("resourcesDocList.tools.items.blockchair"), url: 'https://blockchair.com/dogecoin/nodes' }
        ]
    },
    {
        title: t("resourcesDocList.shop_directories.title"),
        items: [
            { label: t("resourcesDocList.shop_directories.items.shopdoge"), url: 'https://shopdoge.xyz/' },
            { label: t("resourcesDocList.shop_directories.items.cryptwerk"), url: 'https://cryptwerk.com/pay-with/doge/' }
        ]
    },
    {
        title: t("resourcesDocList.payment_providers.title"),
        items: [
            { label: t("resourcesDocList.payment_providers.items.coinbase"), url: 'https://commerce.coinbase.com/integrate' },
            { label: t("resourcesDocList.payment_providers.items.bitpay"), url: 'https://bitpay.com/integrations/' }
        ]
    },
    {
        title: t("resourcesDocList.communities.title"),
        items: [
            { label: t("resourcesDocList.communities.items.reddit_dogecoin"), url: 'https://reddit.com/r/dogecoin' },
            { label: t("resourcesDocList.communities.items.reddit_dev"), url: 'https://reddit.com/r/dogecoindev' },
            { label: t("resourcesDocList.communities.items.reddit_edu"), url: 'https://reddit.com/r/dogeducation' }
        ]
    }
];




</script>

<template>
    <div class="overflow-hidden">

        <div class="w-full mt-[15%] mb-12">
            <div class="container-mini">
                <div class="flex flex-col items-center mb-[30%] text-black dark:text-white">
                    <h1 class="font-bold text-5xl mb-7">Resources</h1>
                    <div class="flex items-center gap-2 text-xl">
                        <a class="hover:text-d-orange hover:underline" href="/">
                            < {{ t("goBack") }}</a>
                                <span class="text-d-orange">- Resources</span>
                    </div>
                </div>
                <div class="text-lg mb-11 text-black dark:text-white">
                    <p>
                        A list of resources created by shibes that can be useful to work with Dogecoin and to research it.
                    </p>
                </div>
                <div class="mb-16 text-black dark:text-white">
                    <div v-for="(item, index) in resourcesDocList" class="mb-4">
                        <DogepediaInfo :item="item" :key="index" />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>