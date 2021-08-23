import Nav from './Nav.js'
import ListMain from './ListMain.js'

export default function ListPage({ $target }) {
  const $page = document.createElement('div')

  this.state = [
    {
      id: 1,
      productName: '이디어츠 티셔츠 모음'
    },
    {
      id: 2,
      productName: '씩제프 굿즈 모음'
    },
    {
      id: 3,
      productName: '극동아시아타이거즈 굿즈 모음'
    }
  ]

  new Nav({ $target: $page })
  new ListMain({ $target: $page, initialState: this.state })

  this.render = () => {
    $target.appendChild($page)
  }
  this.render()
}