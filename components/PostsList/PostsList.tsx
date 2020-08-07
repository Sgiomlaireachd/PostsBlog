import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { Container } from "../styled";
import styled from "styled-components";

type PostsListProps = {
  preloadedPosts: PostType[];
};

const PostsHeader = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 15px;
`;

const PostsList: React.FC<PostsListProps> = ({ preloadedPosts }) => {
  let postItems = preloadedPosts.map((post) => (
    <PostItem key={post.id} post={post} />
  ));

  return (
    <Container paddingTop paddingBottom>
      <PostsHeader>All Posts:</PostsHeader>
      {postItems}
    </Container>
  );
};

export default PostsList;
