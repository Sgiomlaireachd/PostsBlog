import { NextPage, NextPageContext } from "next";
import PostInfo from "../../components/PostInfo/PostInfo";
import { API } from "../../api";
import { PostType } from "../../interfaces";

type PostPageProps = {
  postId: number;
  preloadedPost: PostType;
};

const PostPage: NextPage<PostPageProps> = (props) => {
  return <PostInfo {...props} />;
};

type PostPageContext = NextPageContext & {
  query: {
    postId: number;
  };
};

export async function getServerSideProps({ query }: PostPageContext) {
  const postId = query.postId;
  const res = await API.getPostInfo(postId);
  return {
    props: {
      postId,
      preloadedPost: res,
    },
  };
}

export default PostPage;
