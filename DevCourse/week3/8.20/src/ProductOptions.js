export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement('select')
  
  $target.appendChild($select)
  
  /*
  * 상품옵션 이름 렌더링 시 상품명 + 옵션명 + 재고: n개 이런 형식으로 보여주어야 함
  * 재고가 0인 상품의 경우 옵션을 선택하지 못하게 함
  * 
  * ${this.state}는 아래와 같이 출력됨
  * [
  *   {
  *     optionId: 1,
  *     optionName: '옵션 상품',
  *     optionPrice: 1000,
  *     stock: 10
  *   },
  *   ...
  * ]
  */
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }
  
  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice}` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고 없음'})`
  }
  $select.addEventListener('change', (e) =>{ // 선택한 값이 바뀐 경우
    const optionId= parseInt(e.target.value);
    const option = this.state.find(option => option.optionId === optionId)

    if(option) {
      onSelect(option)
    }
  })

  this.render = () => { // <select>는 드롭다운 목록, <option>은 목록의 항목
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
      <option>선택</option>
        ${this.state.map(option => `<option ${option.stock === 0 ? 'disabled=' : ''} value="${option.optionId}">${createOptionFullName(option)}</option>`).join('')}
      `
    }
  }
  this.render()
}