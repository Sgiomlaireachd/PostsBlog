import { useEffect } from "react";
import { PostType } from "../../interfaces";
import PostComments from "./PostComments";
import { API } from "../../api";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setCurrentPost } from "../../redux/posts-reducer";

type OwnProps = {
  postId: number;
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
}) => {
  useEffect(() => {
    const callAPI = async () => {
      const post = await API.getPostInfo(postId);
      setCurrentPost(post);
    };

    callAPI();
  }, []);

  if (!currentPost) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Post: {currentPost.title}</h1>
      <p>{currentPost.body}</p>
      <PostComments />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, { setCurrentPost })(PostInfo);
