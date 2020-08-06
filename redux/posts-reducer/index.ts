import { PostType, CommentType } from "../../interfaces";
import {
  PostsActionsTypes,
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
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case SET_NEW_COMMENT:
      return {
        ...state,
        // @ts-ignore: Unreachable code error
        currentPost: {
          ...state.currentPost,
          comments: state.currentPost?.comments?.concat(action.payload.comment),
        },
      };
    default:
      return state;
  }
};

// Actions
export const setCurrentPost = (post: PostType): SetCurrentPostActionType => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export const setNewComment = (
  postId: number,
  comment: CommentType
): SetNewCommentActionType => ({
  type: SET_NEW_COMMENT,
  payload: {
    postId,
    comment,
  },
});
