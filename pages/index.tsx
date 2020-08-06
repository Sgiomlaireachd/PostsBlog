import PostsListContainer from "../components/PostsList/PostsList";
import { NextPage } from "next";
import { API } from "../api";
import { PostType } from "../interfaces";

type IndexPageProps = {
  preloadedPosts: PostType[];
};

const IndexPage: NextPage<IndexPageProps> = ({ preloadedPosts }) => (
  <PostsListContainer preloadedPosts={preloadedPosts} />
);

export async function getServerSideProps() {
  const res = await API.getAllPosts();
  return {
    props: {
      preloadedPosts: res,
    },
  };
}

export default IndexPage;
