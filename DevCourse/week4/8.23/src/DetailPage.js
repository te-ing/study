import Nav from "./Nav.js"
import ProductDetail from "./ProductDetail.js"

export default function DetailPage({ $target }) {
  const $page = document.createElement('div')
  const { hash } = window.location.hash

  const getProductId = () => {
    const { hash } = window.location
    return hash.split('-')[1]
  }
  new Nav({ $target: $page })
  const productDetail = new ProductDetail({ $target: $page, initialState: {
    productId: getProductId()
 }})

  // this.setState = () => {
  //   this.state = nextState
  //   this.render()
  // }

  this.render = () => {
    productDetail.setState({
      productId: getProductId()
    })
    $target.appendChild($page)
  }
  this.render()
}