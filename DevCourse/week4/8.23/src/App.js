import HomePage from "./HomePage.js"

export default function App ({ $target }) {


  const homePage = new HomePage({ $target })

  this.render = () => {
    const { hash } = window.location
    $target.innerHTML = ''

    if (hash === ''){
      homePage.render()
      return
    } else if (hash === '#list'){
      // List rendering
    } else if (hash === '#detail'){
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
