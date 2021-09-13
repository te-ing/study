export default function TodoList ({ $target, initialState }) {
  const $todoList = document.createElement('div')
  $todoList.setAttribute('droppable', 'true')
  $target.appendChild($todoList)
  
  
  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { title, todos = [] } = this.state
    $todoList.innerHTML = `
      <h2>${title}</h2>
      <ul>
        ${todos.map(todo => `<li data-id="${todo._id}" draggable="true">${todo.content}</li>`).join('')}
      </ul>
      ${todos.length === 0 ? '설정된 일이 없습니다.' : ''}
    `
  }

  this.render()

  $todoList.addEventListener('dragstart', e => {
    const $li = e.target.closest('li')

    e.dataTransfer.setData('todo', JSON.stringify({
      id: $li.dataset.id,
      content: $li.textContent
    }))
  })
  $todoList.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  })

  $todoList.addEventListener('drop', e => {
    e.preventDefault()
    console.log(JSON.parse(e.dataTransfer.getData('todo')));
  })
}