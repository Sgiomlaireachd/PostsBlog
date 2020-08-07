import { useEffect } from "react";
import { PostType } from "../../interfaces";
import PostComments from "./PostComments";
import { API } from "../../api";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setCurrentPost } from "../../redux/posts-reducer";
import styled from "styled-components";
import themes from "../../themes";
import { Container, PostHeader, PostBody, LoadingMessage } from "../styled";
const { colors } = themes;

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

const PostCard = styled.div`
  padding: 30px;
  margin: 0 auto;
  border: 1px solid ${colors.grey};
`;

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

  if (!currentPost) return <LoadingMessage>Loading...</LoadingMessage>;

  return (
    <Container paddingTop paddingBottom>
      <PostCard>
        <h1>Title</h1>
        <PostHeader marginTop> {currentPost.title}</PostHeader>
        <hr />
        <br />
        <h1>Body</h1>
        <PostBody>{currentPost.body}</PostBody>
        <hr />
        <br />
        <PostComments />
      </PostCard>
    </Container>
  );
};

const mapStateToProps = (state: StateType) => ({
  currentPost: state.posts.currentPost,
});

export default connect(mapStateToProps, { setCurrentPost })(PostInfo);
