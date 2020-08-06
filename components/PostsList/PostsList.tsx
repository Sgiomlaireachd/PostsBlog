import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { Container } from "../styled";

type PostsListProps = {
  posts: PostType[];
};

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  const postItems = posts.map((post) => <PostItem key={post.id} post={post} />);

  return (
    <Container>
      <h1>Posts List!</h1>
      {postItems}
    </Container>
  );
};

export default PostsList;
