import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { Container } from "../styled";
import styled from "styled-components";
import fp from "lodash/fp";

type PostsListProps = {
  preloadedPosts: PostType[];
};

const PostsHeader = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 15px;
`;

const PostsList: React.FC<PostsListProps> = ({ preloadedPosts }) => {
  const postItems = fp.map((post: PostType) => (
    <PostItem key={post.id} post={post} />
  ))(preloadedPosts);

  return (
    <Container paddingTop paddingBottom>
      <PostsHeader>All Posts:</PostsHeader>
      {postItems}
    </Container>
  );
};

export default PostsList;
