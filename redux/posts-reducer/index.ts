import { PostType, CommentType } from "../../interfaces";
import {
  SET_POSTS,
  PostsActionsTypes,
  SetPostsActionType,
  SetCurrentPostActionType,
  SET_CURRENT_POST,
  SET_NEW_COMMENT,
  SetNewCommentActionType,
} from "./types";

const initialState = {
  posts: [] as PostType[],
  currentPost: null as PostType | null,
};

type StateType = typeof initialState;

export const postsReducer = (
  state = initialState,
  action: PostsActionsTypes
): StateType => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case SET_NEW_COMMENT:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [...state.currentPost?.comments, action.payload.comment],
        },
      };
    default:
      return state;
  }
};

// Actions

export const setPosts = (posts: PostType[]): SetPostsActionType => ({
  type: SET_POSTS,
  payload: posts,
});

export const setCurrentPost = (post: PostType): SetCurrentPostActionType => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export const setNewComment = (
  postId: number,
  comment: CommentType | undefined
): SetNewCommentActionType => ({
  type: SET_NEW_COMMENT,
  payload: {
    postId,
    comment,
  },
});
