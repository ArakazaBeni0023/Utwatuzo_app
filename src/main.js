import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/bi-1.9.1/bootstrap-icons.css'
import './assets/fonts/Heyjintan-9YVPK.otf'
// import VueTouch from 'vue-touch'
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(VueTouch)
app.use(Swiper, SwiperSlide)
app.mount('#app')

window.axios = axios