export default function TodoList({ $target, initialState }) {
  const $todoList = document.createElement('div'); 

  $target.appendChild($todoList); 

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
    const list = document.querySelectorAll('#list')
    list.forEach(($list)=>{
      $list.addEventListener('click', (e)=>{
        const {target} = e
      if (target.style.textDecoration === 'line-through') {
        target.style.textDecoration = 'none'
      } else target.style.textDecoration = 'line-through'
    })
    })
    
    console.log(JSON.parse(localStorage.getItem("todos")));

    const btn = document.querySelectorAll('button')
    btn.forEach(($button)=>{
      $button.addEventListener('click', (e)=>{
        const {target} = e
        /* 로컬스토리지의 text들을 기록
        * 클릭한 리스트의 text를 삭제
        * 로컬스토리지 삭제
        * 리스트에 있던 것들 다시 기입
        */
      const list = document.querySelectorAll('#list')
      //  const todosItem = localStorage.getItem("todos")
       const temp = [];
         
      for(let item of JSON.parse(localStorage.getItem("todos"))) 
      temp.push(item.text);

      console.log(temp);
      temp.splice(temp.indexOf($button.parentNode.textContent.slice(0,$button.parentNode.textContent.length-2)),1)
      // console.log($button.parentNode.textContent.slice(0,$button.parentNode.textContent.length-2))
      console.log(temp);
      // localStorage.removeItem('todos');
      // for(const item of temp) localStorage.setItem('todos',temp)
      

         
       
        // console.log($button.parentNode);
        // localStorage.setItem('todos','')


        // $button.parentNode
      // if (target.style.textDecoration === 'line-through') {
      //   target.style.textDecoration = 'none'
      // } else target.style.textDecoration = 'line-through'
    })
    })
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
