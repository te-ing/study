import { createApp } from 'vue'
import App from '~/App'
import Modal from '~/components/Modal'

const app = createApp(App)
app.component('Modal', Modal)
app.mount('#app')