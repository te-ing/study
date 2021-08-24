export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement('form');

  $target.appendChild($form)

  let isInit = false

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" />
      <button>Add</button>
    `
    if (!isInit) {
      $form.addEventListener('submit', e => { // <button>에는 기본적으로 type=submit이 들어있음
        e.preventDefault() // 태그의 고유기능을 막음 (버튼눌러도 새로고침 X)
        
        const $todo =  $form.querySelector('input[name=todo]')
        const text = $todo.value
        // name이 todo인 입력받은 텍스트를 받아올 수 있음
        if (text.length > 1) { // 입력값이 있을 때
        $todo.value = '' // 입력 후 todo.value 초기화
        onSubmit(text);
        }
        })
        isInit = true
      }
    }

  this.render()
}