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
  })
  this.render()
}