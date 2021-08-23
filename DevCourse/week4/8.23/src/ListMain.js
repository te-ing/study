export default function Listmain({ $target, initialState }) {
  const $listMain = document.createElement('div')

  $target.appendChild($listMain)

  this.state = initialState

  this.render = () => {
      $listMain.innerHTML = `
        <h1>Product List</h1>
        <ul>
        ${this.state.map(item => `<li><a href="/#detail-${item.id}">${item.productName}</a></li>`)}
        </ul>
      `
  }

  this.render()
}