import PostsPage from "./PostPage.js";

export default function App ({ $target }) {
  const postsPage = new PostsPage({ $target })

  postsPage.render()
}