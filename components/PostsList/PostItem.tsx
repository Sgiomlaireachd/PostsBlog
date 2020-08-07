import { PostType } from "../../interfaces";
import Link from "next/link";
import styled from "styled-components";
import themes from "../../themes";
import { PostHeader } from "../styled";
const { colors } = themes;

type PostItemProps = {
  post: PostType;
};

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 5px ${colors.grey};
  transition: box-shadow 0.2s ease;
  text-align: center;

  &:hover {
    box-shadow: 0 0 7px ${colors.grey};
    cursor: pointer;
  }

  & + & {
    margin-top: 20px;
  }
`;

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Link href={`/posts/[postId]`} as={`/posts/${post.id}`}>
      <Post>
        <PostHeader>{post.title || "NO_TITLE"}</PostHeader>
        <p>{post.body || "NO_BODY"}</p>
      </Post>
    </Link>
  );
};

export default PostItem;
