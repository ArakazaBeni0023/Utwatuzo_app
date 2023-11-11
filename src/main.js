import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import './assets/bi-1.9.1/bootstrap-icons.css'
// import VueTouch from 'vue-touch'
import axios from 'axios'

window.axios = axios;

createApp(App)
  .use(store)
  .use(router)
  .mixin(mixins)
  .mount('#app')
// app.use(VueTouch)

window.axios = axios
