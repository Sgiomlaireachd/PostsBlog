import { Form, Field } from "react-final-form";
import { useState } from "react";

type CommentsFormProps = {
  commentFormSubmitHandler: (formObject: any) => void;
};

const CommentsForm: React.FC<CommentsFormProps> = ({
  commentFormSubmitHandler,
}) => {
  const [newCommentText, setNewCommentText] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(e.target.value);
  };

  type FormFieldsTypes = {
    newComment: string;
  };

  const formSubmitHandler = (formObject: FormFieldsTypes) => {
    setNewCommentText("");
    commentFormSubmitHandler(formObject);
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

export default CommentsForm;
