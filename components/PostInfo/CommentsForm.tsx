import { Form, Field } from "react-final-form";
import { useState } from "react";
import { connect } from "react-redux";
import { setNewComment } from "../../redux/posts-reducer";
import { CommentType } from "../../interfaces";
import { useRouter } from "next/router";
import { API } from "../../api";

type MapDispatchProps = {
  setNewComment: (postId: number, comment: CommentType) => void;
};

const CommentsForm: React.FC<MapDispatchProps> = ({ setNewComment }) => {
  const router = useRouter();
  const [newCommentText, setNewCommentText] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(e.target.value);
  };

  type FormFieldsTypes = {
    newComment: string;
  };

  const formSubmitHandler = async ({ newComment }: FormFieldsTypes) => {
    const postId = Number(router.query.postId);
    const res = await API.addComment(postId, newComment);
    setNewComment(postId, res);
    setNewCommentText("");
  };

  return (
    <Form
      onSubmit={formSubmitHandler}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="newComment"
            onChange={inputChangeHandler}
            component="input"
            placeholder="Leave comment"
            defaultValue={newCommentText}
          />
        </form>
      )}
    ></Form>
  );
};

export default connect(null, { setNewComment })(CommentsForm);
