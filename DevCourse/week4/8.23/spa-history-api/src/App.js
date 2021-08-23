import HomePage from "./HomePage.js"
import ListPage from "./ListPage.js"
import DetailPage from "./DetailPage.js"

export default function App ({ $target }) {
  const homePage = new HomePage({ $target })
  const listPage = new ListPage({ $target })
  const detailPage = new DetailPage({ $target })

  this.render = () => {
    const { pathname } = location

    $target.innerHTML = ''

    if (pathname === '/'){
      homePage.render()
      return
    } else if (pathname === '/list'){
      listPage.render()
      return
      // List rendering
    } else if (pathname.includes('#detatil') === '/detail'){
      detailPage.render()
      return
      // Detail rendering
    } else {
      // not found page rendering
    }

  }

  this.render()

  window.addEventListener('click', e => {
    if (e.target.className === 'link') {
      const href = e.target.getAttribute('href')
      history.pushState(null, null, href)

      console.log(href);
      e.preventDefault()
      
      this.render()
    }
  })
}
