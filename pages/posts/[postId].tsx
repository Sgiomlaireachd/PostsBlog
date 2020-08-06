import { NextPage, NextPageContext } from "next";
import { PostType } from "../../interfaces";
import PostInfo from "../../components/PostInfo/PostInfo";
import { API } from "../../api";

type PostPageProps = {
  post: PostType;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return <PostInfo post={post} />;
};

type PostPageContext = NextPageContext & {
  query: {
    postId: number;
  };
};

export async function getServerSideProps({ query }: PostPageContext) {
  const postId = query.postId;
  const post = await API.getPostInfo(postId);

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
