import { request } from "./api.js";
import TodoList from "./TodoList.js";
import SyncTaskQueue from "./TaskManager.js";

export default function App ({ $target }) {
  const tasks = new SyncTaskQueue();

  this.state = {
    todos: []
  }

  const incompletedTodoList = new TodoList({ 
    $target,
    initialState: {
      title: '완료되지 않은 일들',
      todos: []
    },
    onDrop: async (todoId) => {
      console.log(`완료처리 된 Todo에서 ${todoId}가 넘어옴!`);

      const nextTodos = [...this.state.todos]
      const todoIndex = nextTodos.findIndex(todo => todo._id === todoId)

      nextTodos[todoIndex].isCompleted = false
      this.setState({
        ...this.state,
        todos:nextTodos
      })

      /*
      tasks.addTasks(async () => {
        await request(`/${todoId}/toggle`, {
          method: 'PUT'
        })
      })*/

      tasks.addTasks({
        url: `/${todoId}/toggle`,
        method: 'PUT'
      })
      

      // await fetchTodos()
    }
  });
  const completedTodoList = new TodoList ({
    $target,
    initialState: {
      title: '완료된 일들',
      todos: [],
    },
    onDrop: async (todoId) => {
      console.log(`미완료처리 된 Todo에서 ${todoId}가 넘어옴!`);

      const nextTodos = [...this.state.todos]
      const todoIndex = nextTodos.findIndex(todo => todo._id === todoId)
      
      nextTodos[todoIndex].isCompleted = true
      this.setState({
        ...this.state,
        todos:nextTodos
      })
      
      /*tasks.addTasks(async () => {
        await request(`/${todoId}/toggle`, {
          method: 'PUT'
        })
      })*/

      tasks.addTasks({
        url: `/${todoId}/toggle`,
        method: 'PUT'
      })
      
      // await fetchTodos()
    }
  })


  this.setState = nextState => {
    this.state = nextState;

    const { todos } = this.state

    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter(todo => !todo.isCompleted)
    })

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter(todo => todo.isCompleted)
    })
  }

  const fetchTodos = async () => {
    const todos = await request('')

    this.setState({
      ...this.state,
      todos
    })
  }

  fetchTodos()

  const $button = document.createElement('button')
  $button.textContent = '변경내용 동기화'

  $target.appendChild($button)

  $button.addEventListener('click', () => tasks.run())
}