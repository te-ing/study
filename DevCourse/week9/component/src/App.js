
import axios from 'axios'
import { useAsync } from './hooks'
import { Header, Spinner } from './components'
import PostList from './components/domain/PostList'
import PostProvider from './components/contexts/PostProvider'
import { useCallback } from 'react'
import PostAddForm from './components/domain/PostAddForm'

// 컴포넌트는 순수할 수록 좋다
// 1. 사이드 이펙트를 걱정하지 않아도 된다.
// 2. 확장에 유연하다.
// 3. 테스트가 쉽다.

const App = () => {
  const initialPosts = useAsync(async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
  }, [])

  const handleAddPost = useCallback(async (post) => {
    return await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then((response) => response.data);
  }, [])

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => ({ id }));
  }, [])

  return (
    <PostProvider
      initialPosts={initialPosts.value}
      handleDeletePost={handleDeletePost}
      handleAddPost={handleAddPost}
    >
      <div>
        <Header>Posts</Header>
        <PostAddForm />
        {initialPosts.isLoading ? <Spinner /> : <PostList />}
      </div>
    </PostProvider>
  )
}

export default App;
