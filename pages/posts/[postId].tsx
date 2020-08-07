import { NextPage, NextPageContext } from "next";
import PostInfo from "../../components/PostInfo/PostInfo";

type PostPageProps = {
  postId: number;
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
  return {
    props: {
      postId,
    },
  };
}

export default PostPage;
