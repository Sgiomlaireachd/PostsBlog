import { CommentType } from "../../interfaces";
import CommentsForm from "./CommentsForm";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";

type PostCommentsProps = {
  comments: CommentType[];
  commentFormSubmitHandler: (formObject: any) => void;
};

const PostComments: React.FC<PostCommentsProps> = ({
  comments,
  commentFormSubmitHandler,
}) => {
  const commentItems = comments?.map((comment) => (
    <h5 key={comment.id}>{comment.body}</h5>
  ));

  return (
    <>
      <h1>Post comments:</h1>
      {commentItems}
      <CommentsForm commentFormSubmitHandler={commentFormSubmitHandler} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, null)(PostComments);
