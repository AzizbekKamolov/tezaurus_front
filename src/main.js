import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import VueRouter from './router'
import store from './store'

const app = createApp(App)
app.use(store);
app.use(VueRouter).mount('#app')
