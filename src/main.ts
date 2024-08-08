import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/css/app.css";
import "aos/dist/aos.css";
import router from "./router";

import App from "./App.vue";
import appSetting from "./app-setting";
import AOS from "aos";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

AOS.init({
  once: true,
});

appSetting.init();
app.mount("#app");
