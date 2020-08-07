import { Form, Field } from "react-final-form";
import { API } from "../../api";
import { PostType } from "../../interfaces";
import { useRouter } from "next/dist/client/router";
import {
  Container,
  StyledForm,
  Button,
  ErrorSpan,
  FormLabel,
  FormBlock,
} from "../styled";
import styled from "styled-components";

const required = (value: any) => (value ? undefined : "Required");

const NewPostFormContainer = styled.div`
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 0 5px #000;
  text-align: center;
`;

const NewPostForm: React.FC = () => {
  const router = useRouter();

  const formSubmitHandler = (formObject: PostType) => {
    API.addNewPost(formObject);
    router.push("/");
  };

  return (
    <Container>
      <NewPostFormContainer>
        <h1>Create New Post</h1>
        <Form
          onSubmit={formSubmitHandler}
          render={({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Field name="title" validate={required}>
                {({ input, meta }) => (
                  <FormBlock>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <input {...input} type="text" placeholder="Title" />
                    {meta.error && meta.touched && (
                      <ErrorSpan>{meta.error}</ErrorSpan>
                    )}
                  </FormBlock>
                )}
              </Field>
              <Field name="body" validate={required}>
                {({ input, meta }) => (
                  <FormBlock>
                    <FormLabel htmlFor="body">Body</FormLabel>
                    <input {...input} type="text" placeholder="Body" />
                    {meta.error && meta.touched && (
                      <ErrorSpan>{meta.error}</ErrorSpan>
                    )}
                  </FormBlock>
                )}
              </Field>
              <FormBlock>
                <Button type="submit">Add Post</Button>
              </FormBlock>
            </StyledForm>
          )}
        ></Form>
      </NewPostFormContainer>
    </Container>
  );
};

export default NewPostForm;
