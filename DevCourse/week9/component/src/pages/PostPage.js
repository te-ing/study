import { useAsync } from "@hooks"
import { useParams } from "react-router"
import { Spinner, Header, Text } from "@components"
import axios from "axios";
import { Fragment } from "react";

const PostPage = () => {
  const { postId } = useParams();

  const post = useAsync(async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.data)
  }, [postId])

  return <div>
    {post.isLoading ? <Spinner />
      : (
        <Fragment>
          <Header strong>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </Fragment>
      )}
  </div>
}
// const channel = {
//   authRequired: true, // 사용되지 않음
//   posts: ["post1", "post2", "post3"],
//   _id: "free",
//   name: "자유",
//   description: "자유채널",
//   createdAt: "2011.10.18",
//   updatedAt: "2021.10.18",
// };

export default PostPage
