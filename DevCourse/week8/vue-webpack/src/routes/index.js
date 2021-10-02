import { createRouter, createWebHistory } from 'vue-router'
import About from './About'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      component: About
    }
  ]
})