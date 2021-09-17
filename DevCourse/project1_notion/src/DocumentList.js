import { docsTreeToArray } from "./tool.js"
import { request, USERNAME } from "./api.js"
import { push, initRouter } from "./router.js"
import Editor from "./Editor.js"

export default function DocumentList({ $target, initialState, onDocsClick }) {
  const $documentList = document.createElement('div')
  $documentList.classList = "sideBar"
  $target.appendChild($documentList)

  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }
  
  this.render = () => {
    if (this.state && Array.isArray(this.state)) { // 방어코드
      $documentList.innerHTML = `
      <h2>${USERNAME}의 페이지 목록 📚</h2>
      ${this.state.map(doc => `
      <li data-id="${doc.id}">${doc.title}
      <button class="removeBtn">삭제</button></li>
     `).join('')}
    `
    }
  }

  this.render()
  
  $documentList.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const { className } = e.target

    if ($li) {
    const { id } = $li.dataset
    onDocsClick = id

    if(className === 'removeBtn'){ // 삭제버튼
      if(confirm("삭제하실건가요?")) {
        removeDocument(id)
        history.go(0)
      }
    } else if (className === 'foldupBtn') {
      const originTitle = docsTreeToArray(this.state).filter(obj=>obj.id==id)[0]
      $li.innerHTML = `${originTitle.title} <button class="removeBtn">삭제</button>`
    } else{ // 클릭 시 펼침
      fetchDocument(onDocsClick)
      const originTitle = docsTreeToArray(this.state).filter(obj=>obj.id==id)[0]
      if(originTitle){
        $li.innerHTML = `${originTitle.title} <button class="removeBtn">삭제</button>${originTitle.documents.length ? `<button class="foldupBtn" >접기</button>` : ''}
        ${originTitle.documents.map(doc => `
        <li data-id="${doc.id}" class="spreadTitle">${doc.title} <button class="removeBtn">삭제</button></li>
      `).join('')}
      `}
      }
    }
  })
  
  //  조회하기
  const editor = new Editor({ 
    $target,
    initialState: {
      title: `${USERNAME} 님 반가워요 😃`,
      content: '',
      createdAt: '',
      updatedAt: ''
    }
   })
  const fetchDocument = async (id) => {
  const document = await request(`/documents/${id}`,{
    method: 'GET',
  })
  editor.setState(document)
  
  }

  //삭제하기
  const removeDocument = async (id) => {
    const document = await request(`/documents/${id}`,{
      method: 'DELETE',
    })
  }


  this.render()
}
