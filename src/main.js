import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/bi-1.9.1/bootstrap-icons.css'
// import VueTouch from 'vue-touch'
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(VueTouch)
app.mount('#app')

window.axios = axios