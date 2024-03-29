import HomePage from "./HomePage.js"
import ListPage from "./ListPage.js"
import DetailPage from "./DetailPage.js"

export default function App ({ $target }) {
  const homePage = new HomePage({ $target })
  const listPage = new ListPage({ $target })
  const detailPage = new DetailPage({ $target })

  this.render = () => {
    const { hash } = window.location
    $target.innerHTML = ''

    if (hash === ''){
      homePage.render()
      return
    } else if (hash === '#list'){
      listPage.render()
      return
      // List rendering
    } else if (hash.includes('#detatil') === '#detail'){
      DetailPage.render()
      return
      // Detail rendering
    } else {
      // not found page rendering
    }

  }

  this.render()

  window.addEventListener('hashchange', () => {
    this.render()
  })
}
