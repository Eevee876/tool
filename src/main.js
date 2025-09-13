import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "@/router";
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';

createApp(App).use(router).use(VueDiff).mount('#app');
