import { PostType, CommentType } from "../../interfaces";

export const SET_CURRENT_POST = "POSTS/SET_CURRENT_POST";
export const SET_NEW_COMMENT = "POSTS/SET_NEW_COMMENT";

export type SetCurrentPostActionType = {
  type: typeof SET_CURRENT_POST;
  payload: PostType;
};

export type SetNewCommentActionType = {
  type: typeof SET_NEW_COMMENT;
  payload: {
    postId: number;
    comment: CommentType;
  };
};

export type PostsActionsTypes =
  | SetCurrentPostActionType
  | SetNewCommentActionType;
