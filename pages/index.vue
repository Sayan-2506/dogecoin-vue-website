<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import StartedItem from "@/components/StartedItem.vue";
import InfoItem from "@/components/InfoItem.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const items = computed(() => [
  {
    title: t("gettingStarted.items.item1.tlte"),
    text: t("gettingStarted.items.item1.text"),
    buttonName: t("gettingStarted.button"),
  },
  {
    title: t("gettingStarted.items.item2.tlte"),
    text: t("gettingStarted.items.item2.text"),
    buttonName: t("gettingStarted.button"),
  },
  {
    title: t("gettingStarted.items.item3.tlte"),
    text: t("gettingStarted.items.item3.text"),
    buttonName: t("gettingStarted.button"),
  },
]);

// Отслеживание скролла
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const selectedCategory = ref({ label: t("tabs.categories.label1") });

const categories = computed(() => [
  { label: t("tabs.categories.label1") },
  { label: t("tabs.categories.label2") },
  { label: t("tabs.categories.label3") },
  { label: t("tabs.categories.label4") },
]);

const faqs = computed(() => [
  {
    question: t("tabs.tab1.accordion.acc1.question"),
    answer: t("tabs.tab1.accordion.acc1.answer"),
  },
  {
    question: t("tabs.tab1.accordion.acc2.question"),
    answer: t("tabs.tab1.accordion.acc2.answer"),
  },
  {
    question: t("tabs.tab1.accordion.acc3.question"),
    answer: t("tabs.tab1.accordion.acc3.answer"),
  },
  {
    question: t("tabs.tab1.accordion.acc4.question"),
    answer: t("tabs.tab1.accordion.acc4.answer"),
  },
  {
    question: t("tabs.tab1.accordion.acc5.question"),
    answer: t("tabs.tab1.accordion.acc5.answer"),
  },
]);

const howTo = computed(() => [
  {
    question: t("tabs.tab3.accordion.acc1.question"),
    answer: t("tabs.tab3.accordion.acc1.answer"),
  },
  {
    question: t("tabs.tab3.accordion.acc2.question"),
    answer: t("tabs.tab3.accordion.acc2.answer"),
  },
]);

const documentation = computed(() => [
  {
    question: t("tabs.tab4.accordion.acc1.question"),
    answer: t("tabs.tab4.accordion.acc1.answer"),
  },
  {
    question: t("tabs.tab4.accordion.acc2.question"),
    answer: t("tabs.tab4.accordion.acc2.answer"),
  },
  {
    question: t("tabs.tab4.accordion.acc3.question"),
    answer: t("tabs.tab4.accordion.acc3.answer"),
  },
  {
    question: t("tabs.tab4.accordion.acc4.question"),
    answer: t("tabs.tab4.accordion.acc4.answer"),
  },
  {
    question: t("tabs.tab4.accordion.acc5.question"),
    answer: t("tabs.tab4.accordion.acc5.answer"),
  },
]);

const infoList = [
  {
    img: "foundation.png",
    title: t("moreAbout.items.item1.title"),
    text: t("moreAbout.items.item1.text"),
    linkText: t("moreAbout.items.item1.linkText"),
    link: "https://foundation.dogecoin.com/",
  },
  {
    img: "blogs.png",
    title: t("moreAbout.items.item2.title"),
    text: t("moreAbout.items.item2.text"),
    linkText: t("moreAbout.items.item2.linkText"),
    link: "https://foundation.dogecoin.com/blog/",
  },
  {
    img: "announcements.png",
    title: t("moreAbout.items.item3.title"),
    text: t("moreAbout.items.item3.text"),
    linkText: t("moreAbout.items.item3.linkText"),
    link: "https://foundation.dogecoin.com/announcements/",
  },
  {
    img: "faqs.png",
    title: t("moreAbout.items.item4.title"),
    text: t("moreAbout.items.item4.text"),
    linkText: t("moreAbout.items.item4.linkText"),
    link: "trademarks/",
  },
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <section class="relative w-full h-screen overflow-hidden">
      <div
        class="absolute w-full h-full"
        :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      >
        <!-- Видео -->
        <video
          preload="metadata"
          autoplay
          loop
          muted
          class="w-full h-full object-cover"
          v-if="scrollY < 370"
        >
          <source src="/Header_Video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <!-- Черный фон -->
        <div v-else class="w-full h-full bg-black"></div>
      </div>

      <!-- Картинка поверх видео -->
      <div
        class="relative flex flex-col items-center justify-center min-h-screen"
      >
        <div class="relative">
          <!-- Картинка -->
          <NuxtImg
            src="/doge.svg"
            alt="Doge"
            class="!w-60 sm:min-w-lg sm:min-h-lg object-contain"
            loading="lazy"
          />

          <!-- Текст поверх картинки -->
          <div
            class="absolute sm:right-[-65px] right-[-12px] top-[175px] sm:top-[135px] flex justify-center sm:w-40"
          >
            <div
              class="px-4 py-2 bg-amber-50 text-black font-semibold rounded text-center shadow-lg animate-pulse"
            >
              {{ $t("frontPage.dogespeak") }}
            </div>
          </div>
        </div>

        <!-- Заголовки под картинкой -->
        <h1
          class="sm:text-8xl text-5xl font-bold uppercase font-stretch-normal mt-6 text-center"
        >
          dogecoin
        </h1>
        <span class="sm:text-2xl text-lg text-center">{{
          $t("frontPage.peoplecurency")
        }}</span>
      </div>
    </section>

    <!-- Контентные блоки -->
    <section id="what-is-dogecoin" class="pt-28">
      <div class="container">
        <div class="flex flex-wrap justify-between">
          <div class="lg:w-lg w-full">
            <BlockTitle class="mb-4">{{
              $t("whatIsDogecoin.dogetitle")
            }}</BlockTitle>
            <p
              class="sm:text-2xl text-lg text-black dark:text-white leading-[36px] mb-4"
            >
              {{ $t("whatIsDogecoin.description.line1") }}
              <span class="text-d-orange">{{
                $t("whatIsDogecoin.description.line2")
              }}</span>
            </p>
            <p class="sm:text-[19px] text-lg text-black dark:text-white">
              {{ $t("whatIsDogecoin.description.line3") }}
              {{ $t("whatIsDogecoin.description.line4") }}
              <a
                class="underline"
                href="https://foundation.dogecoin.com/manifesto/"
                >{{ $t("whatIsDogecoin.description.manifestoLink") }}</a
              >
              {{ $t("whatIsDogecoin.description.line5") }}
              <NuxtLink class="underline" to="/about">{{
                $t("whatIsDogecoin.description.learnMore")
              }}</NuxtLink>
            </p>
          </div>

          <div class="w-md">
            <NuxtImg
              src="/doge.webp"
              alt="Doge"
              class="w-full lg:max-w-lg lg:max-h-lg object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="pt-28">
      <div class="container">
        <BlockTitle class="mb-5">{{ t("gettingStarted.title") }}</BlockTitle>
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          <StartedItem
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
            :number="index + 1"
            :text="item.text"
            :buttonName="item.buttonName"
          />
        </div>
      </div>
    </section>

    <section id="community" class="pt-28">
      <div class="container">
        <div class="grid grid-cols-4 gap-8 w-full">
          <NuxtImg src="/d-letter-img.png" alt="d-letter" class="w-full" />
          <NuxtImg src="/o-letter-img.png" alt="o-letter" class="w-full" />
          <NuxtImg src="/g-letter-img.png" alt="g-letter" class="w-full" />
          <NuxtImg src="/e-letter-img.png" alt="e-letter" class="w-full" />
        </div>
      </div>
    </section>

    <section class="pt-28 pb-12">
      <div class="container">
        <div>
          <div class="grid md:grid-cols-2 gap-8 w-full items-center pb-20">
            <a href="https://www.youtube.com/embed/_KVZmS_UO5I">
              <NuxtImg
                class="object-cover w-full"
                src="/whatisdogecoin.jpg"
                alt="whatisdogecoin"
              />
            </a>
            <div class="max-w-xl">
              <BlockTitle class="mb-4">{{ t("socials.title") }}</BlockTitle>
              <p class="text-xl text-black dark:text-white">
                {{ t("socials.text") }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-3 justify-items-center items-center gap-4">
            <a href="https://www.reddit.com/r/dogecoin"
              ><NuxtImg
                class="w-40 block dark:hidden"
                src="/Twitter_Logo.svg"
                alt="twitter"
              />
              <NuxtImg
                class="w-40 h-7 hidden dark:block"
                src="/Twitter_Dark_Logo.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.reddit.com/r/dogecoin"
              ><NuxtImg
                class="w-40 block dark:hidden"
                src="/Reddit_Logo.svg"
                alt="reddit"
              />
              <NuxtImg
                class="w-40 hidden dark:block"
                src="/Reddit_Dark_Logo.svg"
                alt="reddit"
              />
            </a>
            <a href="https://discord.gg/X3fHfpvpCM"
              ><NuxtImg
                class="w-40 block dark:hidden"
                src="/Discord_Logo.svg"
                alt="discord"
              />
              <NuxtImg
                class="w-40 hidden dark:block"
                src="/Discord_Dark_Logo.svg"
                alt="discord"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="acc" class="pt-16 pb-16 bg-[#fafafa] text-d-txt min-h-[500px]">
      <div class="container">
        <div
          class="flex lg:justify-between justify-center items-center flex-wrap"
        >
          <!-- Левая часть с изображением -->
          <div
            class="flex sm:justify-between sm:flex-row flex-col sm:w-auto w-full gap-6 items-start"
          >
            <NuxtImg
              src="/dogepedia.png"
              alt="DOGEPEDIA"
              class="w-[261px] object-contain"
              loading="lazy"
            />
            <!-- Левая колонка (Список категорий) -->
            <div>
              <Listbox
                v-model="selectedCategory"
                :options="categories"
                optionLabel="label"
                class="w-full"
                :style="{
                  backgroundColor: 'transparent',
                  border: 'none',
                  width: '100%',
                }"
              >
                <template #option="slotProps">
                  <div
                    class="hover:bg-[#fafafa]"
                    :class="['p-3 text-lg font-semibold']"
                    :style="{
                      'border-bottom': '1px solid gainsboro',
                      width: '100%',
                      color: '#212529',
                    }"
                  >
                    {{ slotProps.option.label }}
                  </div>
                </template>
              </Listbox>
            </div>

            <!-- Правая колонка (Аккордеон с вопросами) -->
          </div>
          <div class="lg:w-sm w-full flex flex-col items-start">
            <!-- FAQ -->
            <Accordion
              v-show="selectedCategory['label'] === categories[0]['label']"
            >
              <AccordionTab v-for="(faq, index) in faqs" :key="index">
                <template #header>
                  <span class="text-lg font-semibold">{{ faq.question }}</span>
                </template>
                <p>{{ faq.answer }}</p>
              </AccordionTab>
            </Accordion>

            <div v-show="selectedCategory['label'] === categories[1]['label']">
              <div class="mb-4 text-base">
                <p>
                  {{ t("tabs.tab2.text") }}
                </p>
              </div>
              <h3 class="text-2xl mb-2">
                {{ t("tabs.tab2.title") }}
              </h3>
              <ul class="list-disc text-base pl-4">
                <li>{{ t("tabs.tab2.list.item1") }}</li>
                <li>{{ t("tabs.tab2.list.item2") }}</li>
                <li>{{ t("tabs.tab2.list.item3") }}</li>
                <li>
                  {{ t("tabs.tab2.list.item4") }}
                </li>
                <li>
                  {{ t("tabs.tab2.list.item5") }}
                </li>
              </ul>

              <p>Read More…</p>
            </div>

            <!-- How To -->
            <Accordion
              v-show="selectedCategory['label'] === categories[2]['label']"
            >
              <AccordionTab v-for="(howTo, index) in howTo" :key="index">
                <template #header>
                  <span class="text-lg font-semibold">{{
                    howTo.question
                  }}</span>
                </template>
                <p>{{ howTo.answer }}</p>
              </AccordionTab>
            </Accordion>

            <!-- Documentation -->
            <Accordion
              v-show="selectedCategory['label'] === categories[3]['label']"
            >
              <AccordionTab
                v-for="(documentation, index) in documentation"
                :key="index"
              >
                <template #header>
                  <span class="text-lg font-semibold">{{
                    documentation.question
                  }}</span>
                </template>
                <p>{{ documentation.answer }}</p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 pb-16 text-d-txt dark:text-white">
      <div class="container">
        <h3
          class="text-center text-black dark:text-white mb-12 text-3xl font-bold"
        >
          {{ t("moreAbout.title") }}
        </h3>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <InfoItem
            v-for="(item, index) in infoList"
            :key="index"
            :img="item.img"
            :title="item.title"
            :text="item.text"
            :linkText="item.linkText"
            :link="item.link"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.p-listbox:not(.p-disabled)
  .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
  background: none !important;
  color: inherit !important;
  box-shadow: none !important;
  border: none !important;
}

.p-listbox-list-container {
  overflow: hidden !important;
  max-height: 100% !important;
}

.p-listbox {
  box-shadow: none !important;
  background: transparent !important;
}

li {
  background-color: transparent !important;
}

.p-accordionheader {
  background: #fafafa !important;
}
.p-accordionheader:hover {
  background: none !important;
  color: inherit !important;
  box-shadow: none !important;
  border: none !important;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader,
.p-accordioncontent-content {
  background: none !important;
}

.p-accordionpanel {
  border: none !important;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader,
.p-accordionheader,
.text-d-txt,
.p-accordioncontent-content {
  color: black !important;
}

.p-accordionheader-toggle-icon {
  color: black !important;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader:hover {
  color: blue;
}

.p-accordion.p-component {
  width: 100%;
}

@media (max-width: 640px) {
  div[bis_skin_checked="1"]:nth-child(2) {
    width: 100% !important;
  }
}
</style>
