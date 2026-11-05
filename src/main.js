import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import './styles/styles.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'
import router from './router/index.js'
import App from './App.vue'

const toastOptions = {
    position: POSITION.TOP_CENTER,
    // timeout: 400,
    // transition: "enter"
}
const app = createApp(App);

app.use(router);
app.use(Toast, toastOptions)
app.mount('#app')
