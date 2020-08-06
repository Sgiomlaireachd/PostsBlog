import axios from "axios";
import { PostType, CommentType } from "../interfaces";

const axiosInstance = axios.create({
  baseURL: "https://simple-blog-api.crew.red",
});

export const API = {
  getAllPosts: async () => {
    const res = await axiosInstance.get<PostType[]>("/posts");
    return res.data;
  },
  getPostInfo: async (postId: number) => {
    const res = await axiosInstance.get<PostType>(
      `/posts/${postId}?_embed=comments`
    );
    return res.data;
  },
  addNewPost: async ({ title, body }: PostType) => {
    await axiosInstance.post("/posts", { title, body });
  },
  addComment: async (postId: number, body: string) => {
    const res = await axiosInstance.post<CommentType>("/comments", {
      postId,
      body,
    });
    return res.data;
  },
};
