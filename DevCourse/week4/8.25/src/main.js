import App from "./App.js"
import Editor from "./Editor.js"
import { setItem, getItem } from "./storage.js"

const $target = document.querySelector('#app')

// new App({
//   $target
// })

const TEMP_POST_SAVE_KEY = 'temp-post'

const post = getItem(TEMP_POST_SAVE_KEY, {
  title: '', // 비어있을 때
  content: ''
})

let timer = null
new Editor({ 
  $target, 
  initialState: post,
    onEditing: (post) => {
    clearTimeout(timer)
    timer = setTimeout(() => { // 입력의 발생을 지연시켜서 마지막 입력 후 일정시간이 지나면 실행
      setItem(TEMP_POST_SAVE_KEY, {
        ...post,
        tempSaveData: new Date() // 저장한 시간
      })
    }, 1000)
  }
})