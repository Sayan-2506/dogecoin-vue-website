<script setup>
import { useI18n } from "vue-i18n";


const { t } = useI18n();

const dogepediaDocList = [
    {
        title: t('dogepedia.title'),
        description: t('dogepedia.description'),
        items: [
            { label: t('dogepedia.items.what_is_dogecoin'), url: '/dogepedia/articles/what-is-dogecoin' },
            { label: t('dogepedia.items.history_of_dogecoin'), url: '/dogepedia/articles/history-of-dogecoin' },
            { label: t('dogepedia.items.how_dogecoin_works'), url: '/dogepedia/articles/how-does-dogecoin-work' },
            { label: t('dogepedia.items.who_owns_dogecoin'), url: '/dogepedia/articles/who-owns-dogecoin' },
            { label: t('dogepedia.items.get_dogecoin'), url: '/dogepedia/articles/get-dogecoin' }
        ]
    },
    {
        title: t('dogepedia.wallets.title'),
        description: t('dogepedia.wallets.description'),
        items: [
            { label: t('dogepedia.wallets.get_wallet'), url: '/dogepedia/articles/how-do-i-get-a-wallet' },
            { label: t('dogepedia.wallets.backup_wallet'), url: '/dogepedia/articles/how-to-backup-a-wallet' },
            { label: t('dogepedia.wallets.hardware_wallet'), url: '/dogepedia/articles/dogecoin-hardware-wallets' },
            { label: t('dogepedia.wallets.recover_wallet'), url: '/dogepedia/articles/recover-a-lost-wallet' },
            { label: t('dogepedia.wallets.what_is_wallet'), url: '/dogepedia/articles/what-is-a-wallet' }
        ]
    },
    {
        title: t('dogepedia.using_doge.title'),
        description: t('dogepedia.using_doge.description'),
        items: [
            { label: t('dogepedia.using_doge.send_receive_doge'), url: '/dogepedia/articles/send-and-receive-dogecoin' },
            { label: t('dogepedia.using_doge.buy_with_doge'), url: '/dogepedia/articles/using-dogecoin-in-a-store' },
            { label: t('dogepedia.using_doge.dogecoin_privacy'), url: '/dogepedia/articles/dogecoin-and-privacy' }
        ]
    },
    {
        title: t('dogepedia.community.title'),
        items: [
            { label: t('dogepedia.community.join_community'), url: '/dogepedia/articles/what-is-the-dogecoin-foundation' },
            { label: t('dogepedia.community.help_doge'), url: '/dogepedia/articles/how-can-i-help-doge' },
            { label: t('dogepedia.community.accept_dogecoin'), url: '/dogepedia/articles/how-can-my-business-accept-dogecoin' },
            { label: t('dogepedia.community.merchants_dogecoin'), url: '/dogepedia/articles/merchants-accepting-doge' },
            { label: t('dogepedia.community.charities_dogecoin'), url: '/dogepedia/articles/charities-accepting-doge' },
            { label: t('dogepedia.community.folding_at_home'), url: '/dogepedia/articles/dogecoin-folding-at-home' }
        ]
    }
];


const dogepediaHowList = [
    {
        title: '',
        description: 'For all the shibes who want to learn new tricks.',
        items: [
            { label: 'Operating a Dogecoin Node', url: '/dogepedia/how-tos/operating-a-node' },
            { label: 'Mining Dogecoin', url: '/dogepedia/how-tos/mining-dogecoin' },
            { label: 'Making Memes', url: '/dogepedia/how-tos/making-memes' },
        ]
    },

]

const dogepediaFaqList = [
    {
        title: '',
        description: 'Let’s fight against the disinformation surrounding Dogecoin! Much wow!',
        items: [
            { label: 'Dogecoin is just a joke!', url: '/dogepedia/faq/dogecoin-is-a-joke' },
            { label: 'Dogecoin has no utility!', url: '/dogepedia/faq/dogecoin-has-no-utility' },
            { label: 'Dogecoin has no developers!', url: '/dogepedia/faq/dogecoin-has-no-developers' },
            { label: 'Why don’t the devs burn some of the supply?', url: '/dogepedia/faq/dogecoin-and-coin-burning' },
        ]
    },

]

</script>

<template>
    <div class="overflow-hidden">

        <div class="w-full mt-[15%] mb-12">
            <div class="container-mini">
                <div class="flex flex-col items-center mb-[30%] text-black dark:text-white">
                    <h1 class="font-bold text-5xl mb-7">{{ t("dogepediaTitle") }}</h1>
                    <div class="flex items-center gap-2 text-xl">
                        <a class="hover:text-d-orange hover:underline" href="/">
                            < {{ t("goBack") }}</a>
                                <span class="text-d-orange">- Dogepedia</span>
                    </div>
                </div>
                <div class="text-lg mb-11 text-black dark:text-white">
                    <p>
                        {{ t("dogepediaDesk") }}
                    </p>
                </div>
                <div class="mb-16 text-black dark:text-white">
                    <DogepediaTitle>{{ t("documentation") }}</DogepediaTitle>
                    <hr class="text-[#4e4e57] mb-4 mt-4">
                    <div v-for="(item, index) in dogepediaDocList" class="mb-4">
                        <DogepediaInfo :item="item" :key="index" />
                    </div>
                </div>
                <div id="how" class="mb-16 text-black dark:text-white">
                    <DogepediaTitle>{{ t("howTos") }}</DogepediaTitle>
                    <hr class="text-[#4e4e57] mb-4 mt-4">
                    <div v-for="(item, index) in dogepediaHowList">
                        <DogepediaInfo :item="item" :key="index" />
                    </div>
                </div>
                <div id="faq" class="text-black dark:text-white">
                    <DogepediaTitle>{{ t("faqFad") }}</DogepediaTitle>
                    <hr class="text-[#4e4e57] mb-4 mt-4">
                    <div v-for="(item, index) in dogepediaFaqList">
                        <DogepediaInfo :item="item" :key="index" />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>