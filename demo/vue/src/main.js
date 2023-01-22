import { createApp } from 'vue'
import App from './App.vue'

import artemis from "./Lib/artemis";

const app = createApp(App);
app.config.globalProperties.artemis = artemis;

app.mount("#app");