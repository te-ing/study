import { createStore } from 'vuex'

export default createStore({
    state() { // 데이터 추가, 데이터는 함수로 만들어야 참조관계에 문제가 생기지 않음
      return {
        msg: 'Hello Vue!?',
        count: 1
      }
    }, 
    getters: { // 상태의 의존하여 데이터를 만들어냄 computed와 비슷
      reversedMsg(state) { // creatStore의 state 참조
        return state.msg.split('').reverse().join('')
      }
    },
    mutations: { // 데이터(상태)를 변화시키는 역할 (동기)
      increaseCount(state) { // creatStore의 state 참조
        state.count += 1
      },
      updateMsg(state, newMsg) {
        state.msg = newMsg
      }
    }, // actions에서 대부분의 로직 사용 (비동기)
    actions: { // context => state, getters, commit, dispatch 들어있음 
      // 상태를 참조하는 state, 계산된 상태를 참조하는 getters, mutation을 실행할 수 있는 commit, 다른 액션을 실행할 수 있는 dispatch
      async fetchTodo({ commit }) { // { context 구조분해할당 }
        const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        console.log(todo)
        commit('updateMsg', todo.title) // commit으로 mutation의 updateMsg 실행
        
      }
    }
  })