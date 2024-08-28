import { createApp } from "vue";
import App from "./App.vue";
import LichtUI from "@licht-ui/components";
import "@licht-ui/theme-chalk/index.scss";
createApp(App).use(LichtUI).mount("#app");
