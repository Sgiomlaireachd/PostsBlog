import { PostType, CommentType } from "../../interfaces";

export const SET_POSTS = "POSTS/SET_POSTS";
export const SET_CURRENT_POST = "POSTS/SET_CURRENT_POST";
export const SET_NEW_COMMENT = "POSTS/SET_NEW_COMMENT";

export type SetPostsActionType = {
  type: typeof SET_POSTS;
  payload: PostType[];
};

export type SetCurrentPostActionType = {
  type: typeof SET_CURRENT_POST;
  payload: PostType;
};

export type SetNewCommentActionType = {
  type: typeof SET_NEW_COMMENT;
  payload: {
    postId: number;
    comment: CommentType | undefined;
  };
};

export type PostsActionsTypes =
  | SetPostsActionType
  | SetCurrentPostActionType
  | SetNewCommentActionType;
