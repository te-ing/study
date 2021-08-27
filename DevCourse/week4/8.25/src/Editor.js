export default function Editor({ $target, initialState={
  title: '',
  content: ''
}, onEditing }) {
  const $editor = document.createElement('div') 

  let isinitialState = false
  this.state = initialState

  $editor.style.width = '400px'
  $editor.style.height = '200px'

  $target.appendChild($editor)

  this.setState = (nextState) => {
    this.state = nextState
    $editor.querySelector('[name=title').value = this.state.title
    $editor.querySelector('[name=content').value = this.state.content
    this.render()
  }
  this.render = () => {
    if (!isinitialState) { // 한번만 실행
      $editor.innerHTML = `
      <input type="text" name="title" style='width:400px;' value="${this.state.title}"/>
      <textarea name="content" style='width:400px; height:200px;'>${this.state.content}</textarea>
      `
      isinitialState = true
    }
  }
  this.render()

  $editor.addEventListener('keyup', (e)=>{
    const { target } = e
    
    const name = target.getAttribute('name')
    if(this.state[name] !== undefined) { // 방어코드 this.state[name]이 있는지
      const nextState = {
        ...this.state,
        [name]: target.value
      }
      this.setState(nextState)
      onEditing(this.state)
    } 
  })
}