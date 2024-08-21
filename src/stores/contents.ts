import { defineStore } from "pinia";
export const useContentStore = defineStore("contents", {
  state: () => ({
    organisations: [
      {
        title: "Muhammadiyah",
        slug: "muhammadiyah",
        description: `Muhammadiyah adalah sebuah organisasi Islam besar di Indonesia yang didirikan oleh 
            K.H. Ahmad Dahlan pada 8 Agustus 1912 di Yogyakarta. Nama organisasi ini diambil dari 
            nama Nabi Muhammad SAW. Muhammadiyah adalah gerakan Islam dakwah amar ma'ruf nahi munkar 
            dan tajdid (pembaruan tentang pokok ajaran Islam) yang bersumber pada al-Qur'an dan as-Sunnah as-Sohihah. 
            Muhammadiyah memiliki tuntunan beribadah yang sesuai dengan Al-hadist dan Al-qur'an.`,
        logo: "/assets/images/logo-muhammadiyah.png",
        image: "/assets/images/image-muhammadiyah.png",
      },
      {
        title: "Aisyiyah",
        slug: "aisyiyah",
        description: `Aisyiyah adalah sebuah organisasi perempuan otonom di bawah Muhammadiyah, 
            salah satu dari dua organisasi Islam terbesar di Indonesia. Aisyiyah didirikan pada 19 Mei 1917 
            (27 Rajab 1335 H) di Yogyakarta oleh Siti Walidah (Nyai Ahmad Dahlan) dan suaminya, Kiai Haji Ahmad Dahlan. 
            Nama Aisyiyah diambil dari nama istri nabi Muhammad, 'Aisyah, yang dikenal cerdas dan mumpuni. 
            Aisyiyah bermaksud untuk berdampingan dengan Muhammadiyah dalam berdakwah.`,
        logo: "/assets/images/logo-aisyiyah.png",
        image: "/assets/images/image-aisyiyah.png",
      },
      {
        title: "Hizbul Wathan",
        slug: "hizbul-wathan",
        description: `Hizbul Wathan (HW) adalah sebuah gerakan kepanduan di lingkungan Persyarikatan Muhammadiyah 
            di Indonesia. HW didirikan pada tahun 1918 oleh K.H. Ahmad Dahlan, pendiri Muhammadiyah, 
            dengan tujuan untuk mendidik anak-anak dan pemuda agar 
            menjadi pribadi muslim yang beriman, berilmu, berteknologi, dan berakhlak mulia.`,
        logo: "/assets/images/logo-hizbul-wathan.png",
        image: "/assets/images/image-hizbul-wathan.png",
      },
    ],
  }),
});
