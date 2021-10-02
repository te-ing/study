import { createApp } from 'vue'
import App from '~/App'
import router from '~/routes'  // index는 생략 가능

const app = createApp(App)
app.use(router) // 플러그인 등록
app.mount('#app')