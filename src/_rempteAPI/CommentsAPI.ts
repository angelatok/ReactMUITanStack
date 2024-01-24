import { apiClient } from "./remoteAddr";

export interface CommentDataType {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export const getAllPost = async () => {
  const response = await apiClient.get<CommentDataType[]>("/posts");
  return response.data;
}

export const getPostbyId = async (id:any) =>{
  const response = await apiClient.get<CommentDataType>(`/posts/${id}`)
  return response;
}

const createPost = async ({ postId,  name, email, body }: CommentDataType) => {
  const response = await apiClient.post<any>("/post", { postId,  name, email, body });
  return response.data;
}

const updatePost = async (id: any, { postId,  name, email, body}: CommentDataType) => {
  const response = await apiClient.put<any>(`/post/${id}`, { postId,  name, email, body });
  return response.data;
}

const deletePostById = async (id: any) => {
  const response = await apiClient.delete<any>(`/post/${id}`);
  return response.data;
}