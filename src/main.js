import { createApp } from 'vue'
import './styles/styles.css'
import Toast from 'vue-toastification'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'
import router from './router/index.js'
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(Toast)
app.mount('#app')
