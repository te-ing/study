export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement('form');

  $target.appendChild($form)

  if(!new.target) {
    throw new Error('❌ new 키워드가 없습니다.')
  }

  let isInit = false

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" />
      <button>추가</button>
    `
    if (!isInit) {
      $form.addEventListener('submit', e => { 
        e.preventDefault() 
        
        const $todo =  $form.querySelector('input[name=todo]')
        const text = $todo.value
        const isCompleted = false

        if (text.length > 1) { 
        $todo.value = ''
        onSubmit(text,isCompleted);
        }
        })
        isInit = true
      }
    }

  this.render()
}