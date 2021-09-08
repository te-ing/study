export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false

  const $photoList = document.createElement('div');
  $target.appendChild($photoList)
  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
      <ul class="PhotoList__photos"></ul>
        
      `
      isInitialize = true
    }

    const { photos } = this.state
    const $photos = $photoList.querySelector('.PhotoList__photos')

    photos.forEach(photo => {
      // photo의 id 기준으로 렌더링이 되어있는지 체크
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement('li')
        $li.setAttribute('data-id', photo.id)
        $li.style = 'list-style: none;'
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`
        
        $photos.appendChild($li)
      }
    })
  }

  this.render()

  window.addEventListener('scroll', () => {
    const { isLoading, totalCount, photos } = this.state
    const isScrollEnded = (window.innerHeight + window.scrollY) + 200 >= document.body.offsetHeight;

    if (isScrollEnded && !isLoading && photos.length < totalCount) {
      onScrollEnded()
    }
  })
}