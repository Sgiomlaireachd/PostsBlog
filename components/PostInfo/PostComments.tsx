import { PostType } from "../../interfaces";
import CommentsForm from "./CommentsForm";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";

type MapStateProps = {
  currentPost?: PostType | null;
};

const PostComments: React.FC<MapStateProps> = ({ currentPost }) => {
  const commentItems = currentPost?.comments?.map((comment) => {
    return <h5 key={comment.id}>{comment.body}</h5>;
  });

  return (
    <>
      <h1>Post comments:</h1>
      {commentItems}
      <CommentsForm />
    </>
  );
};

const mapStateToProps = (state: StateType): MapStateProps => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, null)(PostComments);
