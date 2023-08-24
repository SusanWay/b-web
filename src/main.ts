import {createApp} from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import router from "./router/router"
import {createPinia} from "pinia";

createApp(App).use(store).use(router).use(createPinia()).mount('#app')
