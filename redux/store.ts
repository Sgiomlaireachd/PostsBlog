import { createStore, combineReducers, applyMiddleware } from "redux";
import { postsReducer } from "./posts-reducer";
import thunkMiddleware from "redux-thunk";

const globalReducer = combineReducers({
  posts: postsReducer,
});

type ReducerType = typeof globalReducer;
export type StateType = ReturnType<ReducerType>;

export const store = createStore(
  globalReducer,
  applyMiddleware(thunkMiddleware)
);
