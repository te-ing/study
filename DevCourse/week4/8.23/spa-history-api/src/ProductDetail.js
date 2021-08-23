export default function ProductDetail({ $target, initialState }) {
  const $productDetail = document.createElement('div')
  $target.appendChild($productDetail)

  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }
  this.render = () => {
    $productDetail.innerHTML = `
    <h1>Product ${this.state.productId} Detail Page</h1>
    <a class="link" href= "/list">Back to list</a>
    `
  }
  this.render()
}