import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import TodoCount from "./TodoCount.js"
import { setItem } from "./storage.js"

export default function App({ $target, initialState }) {

  if(!new.target) {
    throw new Error('❌ new 키워드가 없습니다.')
  }

  new Header({ 
    $target, 
    text: '무엇을 해야 하나요?'
  })
  
  new TodoForm({
    $target,
    onSubmit: ((text, isCompleted) => {
      const nextState = [...todoList.state, {
        text,isCompleted
      }]
      
      setItem('todos', JSON.stringify(nextState))
      todoList.setState(nextState)
      todoCount.setState(nextState)
      // history.go(0);
    })
  })

  const todoList = new TodoList({
    $target,
    initialState,
    onToggle: (item, index) => {
      if(item){
        const temp = [...todoList.state]
        temp[index].isCompleted = false
        localStorage.clear()
        setItem('todos', JSON.stringify(temp))
        todoList.setState(temp)
        todoCount.setState(temp)
      } else {
      const temp = [...todoList.state]
        temp[index].isCompleted = true
        localStorage.clear()
        setItem('todos', JSON.stringify(temp))
        todoList.setState(temp)
        todoCount.setState(temp)
      }
    },
    onRemove: (index) => {
      const temp = [...todoList.state]
      temp.splice(index,1)
      localStorage.clear()
      setItem('todos', JSON.stringify(temp))
      todoList.setState(temp)
      todoCount.setState(temp)
    }
  })

  const todoCount = new TodoCount({ 
    $target, 
    initialState
  })
}