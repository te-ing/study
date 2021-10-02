import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Docs from './Docs'
import DocsId from './DocsId'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(), // 반환해서 사용해야 함
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/documents', 
      component: Docs,
    },
    {
      path: '/documents/:id', 
      name: 'docsId',
      component: DocsId
    },
    {
      path: '/:notFound(.*)', // .*: 모든의미의 문자(지정하지 않은 페이지)
      component: NotFound // NotFound 페이지
    }
  ]
})
