export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false

  const $photoList = document.createElement('div');
  $target.appendChild($photoList)
  this.state = initialState

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.state.isLoading) {
        console.log('페이지 끝', entry);
        if(this.state.totalCount > this.state.photos.length) {
          onScrollEnded()
        }
      }
    })
  }, {
    threshold: 0.5   // 2번째 인자는 설정값. threshold는 마지막 콘텐츠가 얼만큼 보여졌을 때 추가데이터를 받는지
  })

  let $lastLi = null

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
        $li.style = 'list-style: none; min-height: 500px;'
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`
        
        $photos.appendChild($li)
      }
    })

    const $nextLi = $photos.querySelector('li:last-child')
  
    if($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi)
      }
      $lastLi = $nextLi
      observer.observe($lastLi)
    }
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