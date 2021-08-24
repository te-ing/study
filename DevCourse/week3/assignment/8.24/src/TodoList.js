import { setItem } from "./storage.js"
export default function TodoList({ $target, initialState, isCompleted }) {
  // $todoList: $는 DOM 엘리먼트를 담고 있다는 의미. todoListEliment로도 쓰임
  const $todoList = document.createElement('div'); // $todoList = div
  $target.appendChild($todoList); // target에 div 추가
  
  this.state = initialState; // 이 함수의 state는 initialState

  this.setState = nextState => { // todoList의 변경된 상태로 렌더링
    this.state = nextState 
    this.render()
  }
  this.render = () => {
    $todoList.innerHTML = `
    <ul>
      ${this.state.map(({text}) => `<li>${text}<button id="delete">🗑</button></li>`).join('')}
    </ul>
    `
  }
  this.render();
  
  const $list = document.querySelectorAll('li') // 토글
  $list.forEach((list)=>{
    list.addEventListener('click', ()=>{
    list.classList.toggle("isCompleted")
    isCompleted = document.querySelectorAll('.isCompleted').length;
    // console.log(isCompleted);
  })
})

const $delete = document.querySelectorAll('#delete') // 삭제
  $delete.forEach((del)=>{
    del.addEventListener('click', ()=>{
      const temp = [];
      for(let x of $list) temp.push(x.innerText.slice(0,-2))
      temp.splice((Array.from(del.parentNode.parentNode.children).indexOf(del.parentNode)), 1);
      localStorage.clear();
      for (let item of temp) setItem('todos', JSON.stringify([{ "text": item}]));

  })
})

}