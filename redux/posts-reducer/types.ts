import { PostType } from "../../interfaces";

export const SET_POSTS = "POSTS/SET_POSTS";
export const SET_CURRENT_POST = "POSTS/SET_CURRENT_POST";

export type SetPostsActionType = {
  type: typeof SET_POSTS;
  payload: PostType[];
};

export type SetCurrentPostActionType = {
  type: typeof SET_CURRENT_POST;
  payload: PostType;
};

export type PostsActionsTypes = SetPostsActionType | SetCurrentPostActionType;
