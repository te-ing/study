import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import LogIn from './LogIn'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about', 
      component: About,
      meta : {
        requiresAuth: true // 로그인 해야만 접속 가능하도록. 이름은 맘대로 가능
      }
    },
    {
      path: '/login',
      component: LogIn,
      meta : {
        requiresAuth: false
      }
    }
  ]
})