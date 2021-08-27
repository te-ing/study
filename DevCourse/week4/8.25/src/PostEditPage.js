import { request } from "./api.js"
import Editor from "./Editor.js"
import { getItem, setItem } from "./storage.js"

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement('div')
  
  this.state = initialState


  const TEMP_POST_SAVE_KEY = `temp-post-${this.state.postId}`

  const post = getItem(TEMP_POST_SAVE_KEY, {
    title: '', // 비어있을 때
    content: ''
  })

  let timer = null
  const editor = new Editor({ 
    $target: $page, 
    initialState: this.state.post,
    onEditing: (post) => {
    if (timer !== null){
      clearTimeout(timer) // setTimeout에서 나온 숫자값을 클리어
    } timer = setTimeout(() => { // 디바운스: 입력의 발생을 지연시켜서 마지막 입력 후 일정시간이 지나면 실행 clearTimeout, setTimeout으로 실행
        setItem(TEMP_POST_SAVE_KEY, {
          ...post,
          tempSaveData: new Date() // 저장한 시간
        })
      }, 1000)
    }
  })

  this.setState = async nextState => {
    if(this.state.postId !== nextState.postId) { // 방어코드
      this.state = nextState
      await fetchPost()
      return
  }
    this.state = nextState
    this.render()

    editor.setState(this.state.post)
  }
  
  this.render = () =>{
    $target.appendChild($page)
  }
  
  const fetchPost = async () => {
    const { postId } = this.state
    if (this.state.postId !== 'new') {
      const post = await request(`/posts/${postId}`)

      this.setState({
        ...this.state,
        post
      })
    }
  }
}
