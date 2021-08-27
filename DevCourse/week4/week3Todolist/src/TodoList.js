export default function TodoList({ $target, initialState, onToggle, onRemove }) {
  const $todoList = document.createElement('div'); 
  $target.appendChild($todoList); 

  if(!new.target) {
    throw new Error('❌ new 키워드가 없습니다.')
  }

  this.state = initialState; 

  this.setState = nextState => { 
    this.state = nextState 
    this.render()
  }

  this.render = () => {
    $todoList.innerHTML = 
    `<ul>
    ${this.state.map(({text,isCompleted}) => `
    <li class="todo-item">
    ${isCompleted ? `<s>${text}</s>` : text}
    <button class="remove">🗑</button>
    </li>
    `).join('')}
    </ul>`
  }
  
  $todoList.addEventListener('click', (e) =>{
    const $li = e.target.closest('.todo-item')
    const $liIndex = Array.from($li.parentNode.children).indexOf($li)
    if($li) {
      const { className } = e.target
      if(className === 'remove') {
        onRemove($liIndex)
      } else {
        onToggle(initialState[$liIndex].isCompleted, $liIndex)
      }
    }
  })

  this.render();
}


