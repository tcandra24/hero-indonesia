<template>
  <div>
    <div
      class="bg-[url(https://s3-jak01.storageraya.com/challenge-hut-ri/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]"
    >
      <div class="relative">
        <div class="container">
          <div
            class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]"
          >
            <div
              class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right"
            >
              <h6>Organisasi</h6>
              <h4 class="!text-white">{{ content.title }}</h4>
              <ul
                class="items-center justify-center pt-6 sm:flex lg:justify-start"
              ></ul>
            </div>
            <div
              class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
              :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
              data-aos-duration="1000"
            >
              <img
                :src="content.image"
                :alt="content.title"
                class="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      class="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]"
    >
      <div class="container">
        <div class="prose max-w-full dark:prose-invert text-justify">
          <h2>Apa itu {{ content.title }} ?</h2>
          <p>
            {{ content.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from "../../stores/index";
import { useContentStore } from "../../stores/contents";
import { useRoute } from "vue-router";
const store = useAppStore();
const storeContent = useContentStore();

const route = useRoute();
const slug = route.params.slug;

const content: any = storeContent.organisations.find(
  (element) => element.slug === slug
);
</script>
