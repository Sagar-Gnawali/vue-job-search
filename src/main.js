import { createApp } from 'vue'
import './styles/styles.css'
import 'primeicons/primeicons.css'
import router from './router/index.js'
import App from './App.vue'

const app = createApp(App);

app.use(router);

app.mount('#app')
