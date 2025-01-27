import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import { Button } from 'primevue';




const app = createApp(App)

app.use(router)
app.component('Button', Button)
app.use(PrimeVue)

app.mount('#app')
