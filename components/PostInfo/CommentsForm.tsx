import { Form, Field } from "react-final-form";
import { useState } from "react";
import { connect } from "react-redux";
import { setNewComment } from "../../redux/posts-reducer";
import { CommentType } from "../../interfaces";
import { useRouter } from "next/router";
import { API } from "../../api";
import { StyledForm, Button, ErrorSpan } from "../styled";

type MapDispatchProps = {
  setNewComment: (postId: number, comment: CommentType) => void;
};

const required = (value: any) => (value ? undefined : "Comment can't be empty");

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
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="newComment"
            validate={required}
            defaultValue={newCommentText}
          >
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="Leave Comment"
                  onChange={inputChangeHandler}
                />
                <Button type="submit">Add Comment</Button>
                {meta.error && meta.touched && (
                  <ErrorSpan>{meta.error}</ErrorSpan>
                )}
              </div>
            )}
          </Field>
        </StyledForm>
      )}
    ></Form>
  );
};

export default connect(null, { setNewComment })(CommentsForm);
