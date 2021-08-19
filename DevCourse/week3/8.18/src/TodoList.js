export default function TodoList({ $target, initialState }) {
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
      ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
    </ul>
    `
  }
  this.render();
}
    
    // let html = ''
    
    // <ul>
    //   ${this.state.map(todo => )}

    // for(let i = 0; i < this.state.length; i++) {
    //   html += `<li>${this.state[i].text}</li>`
    // }

    // html = `<ul>${html}>/ul`

    // $todoList.innerHTML = html;
//   }
// }

