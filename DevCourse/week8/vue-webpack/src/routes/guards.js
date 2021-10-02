import router from './index'
import store from '~/store'

router.beforeEach(to => { // to: 페이지의 정보 from: 이전페이지 정보 next: return 키워드 기능
  console.log(store)
  if(to.meta.requiresAuth && !store.state.user.isLoggedIn) { // 로그인하지 않았다면
    return {
      path: '/login',
      query: { redirect: to.fullPath } // login 후 이전 페이지(redirect)로 돌려보내주는 것
    }
  }
}) 