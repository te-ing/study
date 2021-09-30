import { createApp } from 'vue'
import App from '~/App'
import store from '~/store'


const app = createApp(App)
app.use(store) // $store로 사용
app.mount('#app')