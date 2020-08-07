import { PostType } from "../../interfaces";
import CommentsForm from "./CommentsForm";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import styled from "styled-components";
import themes from "../../themes";
const { colors } = themes;

type MapStateProps = {
  currentPost?: PostType | null;
};

const CommentItem = styled.p`
  overflow-wrap: break-word;
  line-height: 1.5;
  padding: 7px 0;
  color: ${colors.grey};

  & + & {
    margin-top: 10px;
  }
`;

const PostComments: React.FC<MapStateProps> = ({ currentPost }) => {
  const commentItems = currentPost?.comments?.map((comment) => {
    return (
      <div key={comment.id}>
        <CommentItem>{comment.body || "NO_COMMENT_BODY"}</CommentItem>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Comments</h1>
      <br />
      {commentItems}
      <CommentsForm />
    </>
  );
};

const mapStateToProps = (state: StateType): MapStateProps => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, null)(PostComments);
