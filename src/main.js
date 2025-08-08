import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import router from "./router";
import "primeicons/primeicons.css";

import "./style.css";
import App from "./App.vue";
import TypeAhead from "./components/TypeAhead.vue";
import SearchInput from "./components/SearchInput.vue";
import Accordion from "./components/Accordion.vue";
import AccordionTab from "./components/AccordionTab.vue";
import MultiSelect from "./components/MultiSelect.vue";
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
});
app.use(router);
app.component("TypeAhead", TypeAhead);
app.component("SearchInput", SearchInput);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("MultiSelect", MultiSelect);
app.mount("#app");
