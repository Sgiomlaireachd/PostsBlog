import { Form, Field } from "react-final-form";
import { API } from "../../api";
import { PostType } from "../../interfaces";
import { useRouter } from "next/dist/client/router";

const NewPostForm: React.FC = () => {
  const router = useRouter();

  const formSubmitHandler = (formObject: PostType) => {
    API.addNewPost(formObject);
    router.push("/");
  };

  return (
    <Form
      onSubmit={formSubmitHandler}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" placeholder="Form title..." />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <Field
              name="body"
              component="textarea"
              placeholder="Form title..."
            />
          </div>
          <div>
            <button type="submit"> Add Post </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default NewPostForm;
