export default function Header({ $target, text }) {
  const $header = document.createElement('h1')

  $target.appendChild($header)

  if(!new.target) {
    throw new Error('❌ new 키워드가 없습니다.')
  }

  this.render = () => {
    $header.textContent = text
  }

  this.render() 
}