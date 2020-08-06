import { useState } from "react";
import { PostType } from "../../interfaces";
import PostComments from "./PostComments";
import { API } from "../../api";

type PostInfoProps = {
  post: PostType;
};

const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const [comments, setComments] = useState(post.comments);

  const commentFormSubmitHandler = async (formObject: any) => {
    const comment = await API.addComment(post.id, formObject.newComment);
    setComments([...comments, comment]);
  };

  return (
    <>
      <h1>Post: {post.title}</h1>
      <p>{post.body}</p>
      <PostComments
        comments={comments}
        commentFormSubmitHandler={commentFormSubmitHandler}
      />
    </>
  );
};

export default PostInfo;
