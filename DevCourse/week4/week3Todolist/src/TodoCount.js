export default function TodoCount({ $target, initialState }) {

const $TodoCount = document.createElement('h2')
$target.appendChild($TodoCount)

if(!new.target) {
  throw new Error('❌ new 키워드가 없습니다.')
}

this.state = initialState;

this.setState = nextState => { 
  this.state = nextState 
  this.render()
}

this.render = () => {
  $TodoCount.textContent = `
  총 ${this.state.length} 개 중
  ${this.state.filter((done)=>done.isCompleted).length}
  완료${this.state.length === this.state.filter((done)=>done.isCompleted).length ? '🎉' : ''}
  `
}

this.render() 
}