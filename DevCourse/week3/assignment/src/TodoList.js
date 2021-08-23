export default function TodoList({ $target, initialState, test }) {
  const $todoList = document.createElement('div'); 
  const $test = document.createElement('div')

  $target.appendChild($todoList); 
  $target.appendChild($test)

  this.state = initialState; 

  this.setState = nextState => {
    this.state = nextState 
    this.render()
  }
  
  this.render = () => {
    $todoList.innerHTML = `
    <ul>
    ${this.state.map(({text}) => `<li id="list">${text}<button class="complete">🛒</button></li>`).join('')}
    </ul>
    `
    // const list = document.querySelectorAll('#list')
    // list.forEach(($list)=>{
    //   $list.addEventListener('click', (e)=>{
    //     const {target} = e
    //   if (target.style.textDecoration === 'line-through') {
    //     target.style.textDecoration = 'none'
    //   } else target.style.textDecoration = 'line-through'
    // })
    // })
  }
  
  

  // document.getElementById("list").addEventListener('click', ()=>{
  //     console.log("test");
  //   })
  // const btn = document.querySelector('.delete')
  // console.log(btn);
  // btn.addEventListener('click', ()=>{
  //   // $todoList.removeChild(document.querySelector('button'))
  // })
  
  this.render();
}
