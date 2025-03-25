<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="pt-16 pb-16 bg-white dark:bg-black">
    <div class="max-w-[1140px] mx-auto px-12">
      <div class="flex flex-wrap md:justify-between gap-8 lg:grid lg:grid-cols-4 lg:justify-items-end lg:flex-none">
        <div>
          <a class="flex gap-2" href="/">
            <NuxtImg
              src="/doge-logo.png"
              alt="logo"
              class="w-[42px] object-contain pb-2.5"
            />
            <span class="text-black dark:text-white md:text-[1.8em] text-[1.4em] font-semibold"
              >DOGECOIN</span
            >
          </a>
          <p class="text-d-sh dark:text-white">
            {{ t("footerItems.item1.text") }}
          </p>
        </div>
        <div class="text-center md:order-0 order-last">
          <h3 class="text-[20px] text-black dark:text-white pb-2.5 font-semibold">
            {{ t("footerItems.item2.title") }}
          </h3>
          <a class="text-black dark:text-white" href="/trademarks">{{
            t("footerItems.item2.linkText")
          }}</a>
        </div>
        <div>
          <h3 class="text-[20px] text-black dark:text-white pb-2.5 font-semibold">
            {{ t("footerItems.item3.title") }}
          </h3>
          <ul class="text-black dark:text-white">
            <li class="mb-2.5">
              <a href="/">{{ t("footerItems.item3.list.listItem1") }}</a>
            </li>
            <li class="mb-2.5">
              <a href="/#what-is-dogecoin">{{
                t("footerItems.item3.list.listItem2")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="/wallets/">{{
                t("footerItems.item3.list.listItem3")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="/#community">{{
                t("footerItems.item3.list.listItem4")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="/dogepedia/">{{
                t("footerItems.item3.list.listItem5")
              }}</a>
            </li>
          </ul>
        </div>
        <div class="text-black dark:text-white">
          <h3 class="text-[20px] pb-2.5 font-semibold">
            {{ t("footerItems.item4.title") }}
          </h3>
          <ul>
            <li class="mb-2.5">
              <a href="https://foundation.dogecoin.com/about/">{{
                t("footerItems.item4.list.listItem1")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="https://foundation.dogecoin.com/manifesto/">{{
                t("footerItems.item4.list.listItem2")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="https://foundation.dogecoin.com/about/">{{
                t("footerItems.item4.list.listItem3")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="https://foundation.dogecoin.com/announcements/">{{
                t("footerItems.item4.list.listItem4")
              }}</a>
            </li>
            <li class="mb-2.5">
              <a href="https://foundation.dogecoin.com/trailmap/prologue/">{{
                t("footerItems.item4.list.listItem5")
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
