import { Route, Switch } from 'react-router';
import { PostPage, PostsPage, NotFoundPage } from '@pages';
import DefaultTemplate from '@components/template/DefaultTemplate'

const App = () => {
  return (
    <DefaultTemplate>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/posts" exact>
          <PostsPage />
        </Route>
        <Route path="/posts/:postId">
          <PostPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </DefaultTemplate>
  )
}

export default App;
