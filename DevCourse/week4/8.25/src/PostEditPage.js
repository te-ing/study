import { request } from "./api.js"
import Editor from "./Editor.js"
import { getItem, removeItem, setItem } from "./storage.js"

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement('div')
  
  this.state = initialState


  let postLocalSaveKey = `temp-post-${this.state.postId}`

  const post = getItem(postLocalSaveKey, {
    title: '', // 비어있을 때
    content: ''
  })

  let timer = null
  const editor = new Editor({ 
    $target: $page, 
    initialState: post,
    onEditing: (post) => {
    if (timer !== null){
      clearTimeout(timer) // setTimeout에서 나온 숫자값을 클리어
    } timer = setTimeout(async () => { // 디바운스: 입력의 발생을 지연시켜서 마지막 입력 후 일정시간이 지나면 실행 clearTimeout, setTimeout으로 실행
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveDate: new Date() // 저장한 시간
        })

        const isNew = this.state.postId === 'new'
        if (isNew) {
          const createdPost = await request('/posts', {
            method: 'POST',
            body: JSON.stringify(this.state)
          })
          history.replaceState(null, null, `/posts/${createdPost.id}`)
          removeItem(postLocalSaveKey)
        } else{
        }


      }, 1000)
    }
  })

  this.setState = async nextState => {
    if(this.state.postId !== nextState.postId) { // 방어코드
      postLocalSaveKey = `temp-post-${nextState.postId}`

      this.state = nextState
      await fetchPost()
      return
  }
    this.state = nextState
    this.render()

    editor.setState(this.state.post || {
      title: '',
      content: ''
    })
  }
  
  this.render = () =>{
    $target.appendChild($page)
  }
  
  const fetchPost = async () => {
    const { postId } = this.state
    if (this.state.postId !== 'new') {
      const post = await request(`/posts/${postId}`)

      const tempPost = getItem(postLocalSaveKey, {
        title: '',
        content: ''
      })

      if(tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm('저장되지 않은 임시 데이터가 있습니다. 불러올까요?')) {
          this.setState({
            ...this.state,
            post: tempPost
          })    
          return
        }
      }

      this.setState({
        ...this.state,
        post
      })
    }
  }
}
