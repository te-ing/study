import ProductOptions from "./ProductOptions.js";
import Cart from "./Cart.js";
import { request } from "./api.js"

/* stage 구조
* {
    productId: 1,
    product: Product,
    optionData: []
    selectedOption: []
  }
*/
export default function ProductPage({
  $target,
  initialState
}) {
  const $product = document.createElement('div')


  this.state = initialState

  const productOptions = new ProductOptions({
    $target: $product,
    initialState: [],
    onSelect: (option) => {
      const nextState = {...this.state}

      const { selectedOptions } = nextState

      const selectedOptionIndex = selectedOptions.findIndex(selectedOption => selectedOption.optionId === option.optionId)

      if(selectedOptionIndex > -1) {
        nextState.selectedOptions[selectedOptionIndex].ea++
      } else {
        nextState.selectedOptions.push({
          optionId: option.optionId,
          optionName: option.optionName,
          optionPrice: option.optionPrice,
          ea: 1
        })
      }
      this.setState(nextState)
    }
  })
  const cart = new Cart({
    $target:$product,
    initialState: {
      productName: '',
      basePrice: 0,
      selectedOptions: []
    },
    onRemove: () => {
    }
  })
  this.setState = nextState => {
    // if (nextState.productId !== this.state.productId) {
    //   fetchOptionData(nextState.productId)
    //   return
    // }

    this.state = nextState

    const { product, selectedOptions, optionData } = this.state
    
    productOptions.setState(optionData)
    cart.setState({
      productName: product.name,
      basePrice: product.basePrice,
      selectedOptions: selectedOptions
    })
  }

  this.render = () => {
  $target.appendChild($product)
  }

  const fetchOptionData = (productId) => {
    return request(`/products/${productId}`)
      .then(product => {
        this.setState({
          ...this.state,
          product,
          optionData: [],
          selectedOptions: []
        })
        return request(`/product-options?product.id=${product.id}`)
      })
      .then(productOptions => {
        return Promise.all([
          Promise.resolve(productOptions), // promise를 두번 돌림
          Promise.all(
          productOptions.map(productOption => productOption.id).map(id => {
            return request(`/product-option-stocks?productOption.id=${id}`)
          })
        )
      ])
    })
    .then(data => {
      const [productOptions, stocks] = data
      const optionData = productOptions.map((productOption, i) => {
        const stock = stocks[i][0].stock
  
        return {
          optionId: productOption.id,
          optionName: productOption.optionName,
          optionPrice: productOption.optionPrice,
          stock
        }
      })

      this.setState({
        ...this.setState,
        optionData
      })
    })
  }

  fetchOptionData(this.state.productId)

  // const productOptionsComponent = new ProductOptions({
  //   $target,
  //   initialState: [],
  //   onSelect: (option) => {
  //     alert(option.optionName)
  //   }
  // })
}