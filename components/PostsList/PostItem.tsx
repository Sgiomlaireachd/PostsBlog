import { PostType } from "../../interfaces";
import Link from "next/link";

type PostItemProps = {
  post: PostType;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link href={`/posts/[postId]`} as={`/posts/${post.id}`}>
        <a>Info</a>
      </Link>
    </>
  );
};

export default PostItem;
