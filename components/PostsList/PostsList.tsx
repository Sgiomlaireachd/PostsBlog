import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { Container } from "../styled";

type PostsListProps = {
  preloadedPosts: PostType[];
};

const PostsList: React.FC<PostsListProps> = ({ preloadedPosts }) => {
  let postItems = preloadedPosts.map((post) => (
    <PostItem key={post.id} post={post} />
  ));

  return (
    <Container>
      <h1>Posts List!</h1>
      {postItems}
    </Container>
  );
};

export default PostsList;
