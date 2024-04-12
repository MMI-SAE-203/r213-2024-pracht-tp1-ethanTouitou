import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import './pages/boucle.vue'
import './pages/accordeon.vue'

import { createRouter, createWebHistory } from 'vue-router/auto'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory()
  })
)

app.mount('#app')
