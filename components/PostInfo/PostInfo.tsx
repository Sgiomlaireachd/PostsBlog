import { useEffect } from "react";
import { PostType } from "../../interfaces";
import PostComments from "./PostComments";
import { API } from "../../api";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setCurrentPost } from "../../redux/posts-reducer";

type OwnProps = {
  postId: number;
  preloadedPost: PostType;
};

type MapStateProps = {
  currentPost: PostType | null;
};

type MapDispatchProps = {
  setCurrentPost: (post: PostType) => void;
};

type PostInfoProps = OwnProps & MapStateProps & MapDispatchProps;

const PostInfo: React.FC<PostInfoProps> = ({
  currentPost,
  setCurrentPost,
  postId,
  preloadedPost,
}) => {
  useEffect(() => {
    const callAPI = async () => {
      const post = await API.getPostInfo(postId);
      setCurrentPost(post);
    };

    callAPI();
  }, []);

  let post: PostType | null;
  if (!currentPost && preloadedPost) post = preloadedPost;
  else post = currentPost;

  if (!post) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Post: {post.title}</h1>
      <p>{post.body}</p>
      <PostComments />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, { setCurrentPost })(PostInfo);
