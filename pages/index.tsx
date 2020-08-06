import { API } from "../api";
import PostsListContainer from "../components/PostsList/PostsList";
import { PostType } from "../interfaces";
import { NextPage } from "next";

type IndexPagePropsType = {
  posts: PostType[];
};

const IndexPage: NextPage<IndexPagePropsType> = ({ posts }) => (
  <PostsListContainer posts={posts} />
);

export async function getServerSideProps() {
  const res = await API.getAllPosts();
  return {
    props: {
      posts: res,
    },
  };
}

export default IndexPage;
