<template>
  <div>
    <div class="bg-black pt-[82px] lg:overflow-hidden lg:pt-[106px]">
      <div
        class="bg-[url(/assets/images/world-map.png)] bg-cover bg-no-repeat pt-14 lg:pt-20"
      >
        <div class="container">
          <div class="relative">
            <div
              class="text-center lg:w-2/3 lg:ltr:text-left lg:rtl:text-right"
            >
              <h2
                class="relative text-3xl font-black text-white sm:text-5xl lg:text-[80px] lg:leading-[100px]"
              >
                K.H Ahmad Dahlan
                <svg
                  width="59"
                  height="107"
                  viewBox="0 0 59 107"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute bottom-5 ltr:-left-8 rtl:-right-8 rtl:rotate-y-180"
                >
                  <path
                    opacity="0.1"
                    d="M2.99181 104.456C0.123358 63.6362 48.4681 6.12462 55.7077 39.4953C60.866 63.2729 24.484 67.2303 15.4891 1.9999"
                    stroke="url(#paint0_linear_1479_14247)"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1479_14247"
                      x1="17"
                      y1="113"
                      x2="17"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </h2>
            </div>
            <div class="relative py-10 text-white md:py-16 lg:max-w-[330px]">
              <router-link to="#biografi-singkat">
                <button
                  type="button"
                  class="absolute left-2.5 top-1/2 -translate-y-1/2 bg-secondary py-3 px-5 text-lg font-extrabold transition hover:bg-primary"
                >
                  Memulai
                </button>
              </router-link>
            </div>
            <div
              class="grid gap-y-10 gap-x-6 pb-14 text-sm font-extrabold sm:grid-cols-3 lg:max-w-[490px] lg:pb-24"
            >
              <div class="text-center">
                <img
                  src="/assets/images/garuda-siluet.png"
                  alt=""
                  class="mx-auto mb-4 w-16"
                />
                <p>Pahlawan Nasional</p>
              </div>
              <div class="text-center">
                <img
                  src="/assets/images/muhammadiyah-siluet.png"
                  alt=""
                  class="mx-auto mb-4 w-16"
                />
                <p>Pendiri Muhammadiyah</p>
              </div>
            </div>
            <div
              class="absolute bottom-0 hidden w-3/5 ltr:-right-24 rtl:-left-24 rtl:rotate-y-180 lg:block"
            >
              <img
                src="/assets/images/person.png"
                alt=""
                class="w-full"
                data-aos="fade-up"
                data-aos-duration="800"
              />
              <div class="absolute top-[32%] left-4">
                <img
                  src="/assets/images/logo-muhammadiyah.png"
                  class="w-1/4 invert brightness-0"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="overflow-x-hidden bg-white py-14 dark:bg-gray-dark">
      <div class="container">
        <div class="items-center lg:flex">
          <h2
            class="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right"
          >
            ORGANISASI
          </h2>
          <swiper
            class="mt-10 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
            :loop="true"
            slidesPerView="auto"
            :spaceBetween="10"
            :speed="4000"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="[Autoplay]"
            :breakpoints="{
              320: {
                slidesPerView: 1.7,
              },
              600: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1142: {
                slidesPerView: 5,
              },
            }"
            :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
            :key="store.direction === 'rtl' ? 'true' : 'false'"
          >
            <swiper-slide
              v-for="(content, index) of storeContent.organisations"
              :key="index"
            >
              <div>
                <img
                  class="w-1/2 dark:invert dark:brightness-0"
                  :src="content.logo"
                  :alt="content.title"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <div
      class="bg-gradient-to-t from-white/50 to-transparent py-14 dark:bg-none md:py-20"
    >
      <div class="container" id="biografi-singkat">
        <div class="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div class="relative">
            <img
              src="/assets/images/kh-ahmad-dahlan.jpg"
              alt=""
              class="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div class="mb-2">
              <h6 class="mb-4 text-lg font-extrabold uppercase text-secondary">
                <span class="text-primary">/</span> Biografi Singkat
              </h6>
              <h2
                class="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]"
              >
                Pendiri Muhammadiyah
              </h2>
            </div>
            <p class="text-lg text-justify font-medium">
              Organisasi ini didirkan pertama kali di sebuah kampung bernama
              Kauman yang berada di Yogyakarta pada 18 November 1912 atau 8
              Dzulhijjah 1330 H oleh pendirinya yaitu Muhammad Darwis atau
              dikenal pula dengan nama Kyai Haji Ahmad Dahlan.
            </p>
            <p class="text-lg text-justify font-medium my-5">
              Ahmad Dahlan memiliki nama kecil Muhammad Darwis. Ia adalah anak
              keempat dari tujuh bersaudara dan termasuk keturunan dari Mulana
              Malik Ibrahin yaitu adalah salah seorang terkemuka di antara para
              walisongo, yaitu pelopor dari penyebaran agama Islam di Jawa.
            </p>
            <router-link :to="{ name: 'biografi' }">
              <button
                type="button"
                class="bg-secondary py-3 px-5 text-lg text-white font-extrabold transition hover:bg-primary"
              >
                Baca Selengkapnya
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <section
      class="relative overflow-x-hidden bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20"
    >
      <div class="absolute inset-x-0 top-0 h-[580px] bg-black">
        <img
          src="/assets/images/personal-portfolio/star-icon.svg"
          alt=""
          class="absolute top-0 ltr:left-0 rtl:right-0 rtl:rotate-y-180"
          data-aos="fade-down"
          data-aos-duration="1000"
        />
      </div>
      <div class="container relative z-[1]">
        <div class="mb-10 max-w-[510px]">
          <div class="mb-5 flex items-center gap-10">
            <h6 class="text-lg font-extrabold uppercase text-secondary">
              <span class="text-primary">/</span> Organisasi
            </h6>
            <div class="flex gap-2.5">
              <button
                type="button"
                class="portfolio-slider-button-prev flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
              >
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="rtl:rotate-180"
                >
                  <path
                    d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="portfolio-slider-button-next flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
              >
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="rtl:rotate-180"
                >
                  <path
                    d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <h2
            class="text-3xl font-black leading-normal text-white md:text-[40px]"
          >
            Semua Organisasi Yang Didirikan
          </h2>
        </div>
        <swiper
          class="xl:w-[1680px]"
          :loop="true"
          slidesPerView="auto"
          :spaceBetween="30"
          :speed="1000"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.portfolio-slider-button-next',
            prevEl: '.portfolio-slider-button-prev',
          }"
          :modules="[Navigation, Autoplay]"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1142: {
              slidesPerView: 3,
            },
          }"
          :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
          :key="store.direction === 'rtl' ? 'true' : 'false'"
        >
          <swiper-slide
            v-for="(content, index) of storeContent.organisations"
            :key="index"
          >
            <div class="bg-white dark:bg-gray-dark">
              <div class="h-72 md:h-96">
                <img
                  :src="content.image"
                  :alt="content.title"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="flex items-center justify-between gap-2 p-4 md:p-7">
                <div class="font-extrabold">
                  <h4 class="py-4 text-xl text-black dark:text-white">
                    {{ content.title }}
                  </h4>
                  <router-link
                    :to="{ name: 'organisasi', params: { slug: content.slug } }"
                    class="group flex items-center gap-4 font-semibold transition hover:text-secondary"
                  >
                    <span>Baca Selengkapnya</span>
                    <span class="transition-all group-hover:pl-2">
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </router-link>
                </div>
                <div class="flex items-center gap-3 md:gap-7">
                  <div class="w-10 md:w-16">
                    <img
                      :src="content.logo"
                      :alt="content.title"
                      class="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useAppStore } from "../stores/index";
import { useContentStore } from "../stores/contents";
const store = useAppStore();
const storeContent = useContentStore();
</script>
