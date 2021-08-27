export default function Editor({ $target, initialState={
  title: '',
  content: ''
}, onEditing }) {
  const $editor = document.createElement('div') 

  $editor.innerHTML = `
  <input type="text" name="title" style='width:400px;'/>
  <div name="content" contentEditable="true" style='width:400px; height:200px; border: 1px black solid; margin: 4px 0px;'></div>
  `

  this.state = initialState

  $target.appendChild($editor)

  this.setState = (nextState) => {
    this.state = nextState
    
    this.render()
  }
  this.render = () => {
    const richContent = this.state.content.split('\n').map(line => {
      if (line.indexOf('# ') === 0) {
        return `<h1>${line.substr(2)}</h1>`
      } else if (line.indexOf('## ') === 0) {
        return `<h2>${line.substr(3)}</h2>`
      } else if (line.indexOf('### ') === 0) {
        return `<h3>${line.substr(3)}</h3>`
      }
      return line
    }).join('<br>')

    $editor.querySelector('[name=title]').value = this.state.title
    $editor.querySelector('[name=content]').innerHTML = richContent
  }
  this.render()

  $editor.querySelector('[name=title]').addEventListener('keyup', e => {
    const nextState = {
      ...this.state,
      title: e.target.value
    }
    
    this.setState(nextState)
    onEditing(this.state)
  })

  $editor.querySelector('[name=content]').addEventListener('input', e =>{ // value가 아닌 innerHtml이기 때문에
    const nextState = {
      ...this.state,
      content: e.target.innerHTML
    }
    this.setState(nextState)
    onEditing(this.state)
  })
}