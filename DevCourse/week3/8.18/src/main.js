const initialState = storage.getItem('todos', [])

const $app = document.querySelector('.app')

new App({
  $target: $app,
  initialState
})


// 아래 코드는 App.js로 넘김
// new TodoForm({
//   $target: $app,
//   onSubmit: (text) =>{
//     const nextState = [...todoList.state, { // 전개연산자를 통해 복사
//       text
//     }]
//     todoList.setState(nextState)
//   }
// })

// const todoList = new TodoList ({ // setState를 받으려면 const todoList 해줘야 함
//   $target: $app,
//   initialState: data
// })

