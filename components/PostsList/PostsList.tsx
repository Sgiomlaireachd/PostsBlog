import { PostType } from "../../interfaces";
import PostItem from "./PostItem";
import { Container } from "../styled";
import { useEffect } from "react";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setPosts } from "../../redux/posts-reducer";
import { API } from "../../api";

type MapStateProps = {
  posts: PostType[];
};

type MapDispatchProps = {
  setPosts: (posts: PostType[]) => void;
};

type PostsListProps = MapStateProps & MapDispatchProps;

const PostsList: React.FC<PostsListProps> = ({ posts, setPosts }) => {
  useEffect(() => {
    const callAPI = async () => {
      const posts = await API.getAllPosts();
      setPosts(posts);
    };

    callAPI();
  }, []);

  const postItems = posts.map((post) => <PostItem key={post.id} post={post} />);

  return (
    <Container>
      <h1>Posts List!</h1>
      {postItems}
    </Container>
  );
};

const mapStateToProps = (state: StateType) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { setPosts })(PostsList);
