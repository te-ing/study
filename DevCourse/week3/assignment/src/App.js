import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { setItem } from "./storage.js"

export default function App({ $target, initialState }) {
  new Header({ 
    $target, 
    text: 'Simple Todo List'
  })
  let id = 0 // 구분을 위한  id 추가
  if(JSON.parse(localStorage.getItem("todos"))!==null) id += JSON.parse(localStorage.getItem("todos")).length+1 // id 중복방지
  // id += JSON.parse(localStorage.getItem("todos")).length
  
  new TodoForm({
    $target,
    onSubmit: (text => {
      const nextState = [...todoList.state, {
        text,id
      }]
      todoList.setState(nextState)
      
      setItem('todos', JSON.stringify(nextState))
      id++
    })
  })

  const todoList = new TodoList({
    $target,
    initialState
  })
}