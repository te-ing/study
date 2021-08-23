export default function TodoList({ $target, initialState }) {
  const $todoList = document.createElement('div'); 
  $target.appendChild($todoList); 

  this.state = initialState; 
  this.isCompleted = false // TodoList 완료 여부

  this.setState = nextState => {
    this.state = nextState 
    this.render()
  }
  
  $todoList.addEventListener('click', ()=>{ // isCompleted 토글
    // this.style.textDecoration = 'line-through'
    console.log(this.state);
    $todoList.style.textDecoration = 'line-through'
    this.render();
  })
  
  this.render = () => {
    $todoList.innerHTML = `
    <ul>
    ${this.state.map(({text}) => `<li style="text-decoration: none>${text}</li>`).join('')}
    </ul>
    `
    // isCompleted 상태에 따른 삭선처리
    // if(this.isCompleted) $todoList.style.textDecoration = 'line-through'
    // else $todoList.style.textDecoration = 'none'
    
  }
    this.render();
  }
  
