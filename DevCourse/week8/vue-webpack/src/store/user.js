import router from '~/routes' 
export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    initialize({ commit }) {
      if (localStorage.getItem('isLoggedIn')) {
        commit('updateLoggedIn', true)
      }
    },
    logIn({ commit }, payload) {
      const { id, pw } = payload
      if (id && pw) {
        localStorage.setItem('isLoggedIn', true)
        commit('updateLoggedIn', true) 
        // $route 정보조회 $router 페이지제어, 하지만 다음과 같이 정보조회 가능 router.currentRoute.value.query.redirect 
        const redirect = router.currentRoute.value.query.redirect 
        if (redirect) {
          router.push(redirect)
        } else {
          router.push('/')
        }
      }
    },
    logOut({ commit }) {
      localStorage.removeItem('isLoggedIn')
      commit('updateLoggedIn', false)
      const { requiresAuth } = router.currentRoute.value.meta
      if (requiresAuth) { // 로그인 해야만 볼 수 있는 페이지라면
        router.push('/')
      }
    },
  }
}