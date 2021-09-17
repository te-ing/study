import PhotoList from "./PhotoList.js";
import { request } from "./api.js";

export default function App ({ $target }) {
  const $h1 = document.createElement('h1')
  $h1.innerText = 'Cat Photo'
  $h1.style.textAlign = 'center'
  $target.appendChild($h1)

  this.state = {
    limit: 5,
    nextStart: 0, // limit 개수만큼 계속 더해짐
    photos: [],
    totalCount: 0,
    isLoading: false, // 여러번 호출하는 것을 막기 위함
  }

  const photoListComponent = new PhotoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos()
    }
  })
  
  this.setState = (nextState) => {
    this.state = nextState
    
    photoListComponent.setState({
      isLoading: this.state.isLoading,
      photos: nextState.photos,
      totalCount: this.state.totalCount,
    })
  }
  
  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true
    })
    const { limit, nextStart } = this.state

    const photos = await request(`/cat-photos?_limit=${limit}&_start=${nextStart}`)
    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: this.state.photos.concat(photos),
      isLoading: false
    })
  }

  const isInitialize = async () => {
    const totalCount = await request('/cat-photos/count')

    this.setState({
      ...this.state,
      totalCount
    })

    await fetchPhotos()
  }

  isInitialize()
}