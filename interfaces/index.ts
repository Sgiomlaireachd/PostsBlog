export type CommentType = {
  id: number;
  postId: number;
  body: string;
};

export type PostType = {
  id: number;
  title: string;
  body: string;
  comments: CommentType[] | undefined;
};
