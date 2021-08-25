import { setItem, getItem, removeItem } from './storage.js'

const TODO_TEMP_SAVE_KEY = 'TODO_TEMP_SAVE_KEY' // 오타방지
export default function TodoForm({
  $target,
  onSubmit
}) {
  const $form = document.createElement('form')

  $target.appendChild($form)

  // 서버와 통신중일때 제출하지 않도록 하는 방법
  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="할일을 입력하세요.">
      <button>추가하기</button>
    `
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault()

    const $input = $form.querySelector('input')
    const content = $input.value

    onSubmit(content)

    $input.value= ''
    removeItem(TODO_TEMP_SAVE_KEY)
  })

  this.render()

  const $input = $form.querySelector('input')
  $input.value =  getItem(TODO_TEMP_SAVE_KEY, '') // 키에 해당하는 값이 없으면 빈 문자열

  $input.addEventListener('keyup', (e) => {
    setItem(TODO_TEMP_SAVE_KEY, e.target.value)
  })
}