import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import VueRouter from './router'
import ui_components from './ui_components'

const app = createApp(App)
ui_components.map(component => app.component(component.name, component))

createApp(App).use(VueRouter).mount('#app')
