<template>
  <footer
    class="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent"
  >
    <div class="container">
      <div
        class="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]"
      >
        <div class="relative">
          <img
            src="/assets/images/logo.png"
            alt="hero-indonesia"
            class="h-16"
          />
        </div>
        <div>
          <ul class="flex flex-col gap-3 font-bold">
            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">
              Menu
            </li>
            <li>
              <router-link
                :to="{ name: 'home' }"
                class="inline-block transition hover:scale-110 hover:text-secondary"
                >Home</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none"
    >
      <div class="container">
        <div
          class="flex flex-col items-center justify-center text-center font-bold dark:text-white md:flex-row"
        >
          <div>Copyright© {{ new Date().getFullYear() }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>
