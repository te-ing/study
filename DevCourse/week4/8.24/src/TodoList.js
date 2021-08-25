export default function TodoList({ $target, initialState, onToggle, onRemove}) {
  const $todo = document.createElement('div')

  $target.appendChild($todo)

  this.state = initialState

  this.setState = (nextState) =>{
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { isLoading, todos } = this.state

    if (!isLoading && todos.length === 0) {
      $todo.innerHTML = `Todo가 없습니다!`
      return
    }

    $todo.innerHTML = `
      <ul>
        ${todos.map(({_id, content, isCompleted}) => `
          <li data-id="${_id}" class="todo-item">
            ${isCompleted ? `<s>${content}</s>` : content}
            <button class="remove">x</button>
          </li>
        `).join('')}
      </ul>
    `
  }

  $todo.addEventListener('click', (e) =>{ // 이벤트 델리게이션 패턴
    const $li = e.target.closest('.todo-item')

    if($li) {
      const { id } = $li.dataset // data 접두사가 붙은 것들을 뽑아옴
    // 실제 이벤트를 발생시킨 곳을 찾는 법은
      const { className } = e.target
      if (className === 'remove') {
        onRemove(id)
      } else {
        onToggle(id)
      }
    }
  })
  this.render()
}