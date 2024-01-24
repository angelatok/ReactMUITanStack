import { createContext, useState } from "react";
import { apiClient } from "./remoteAddr";

export interface PostDataType {
  useid: string;
  id: string;
  title: string;
  body: string;
}

type postProps = {
  type: "posts" | "love" | "tag";
}


const [queryLink, setqueryLink] = useState<postProps>("posts");

export const getPost = (props : postProps) =>{
  if(props.type == "posts"){
    setqueryLink("/posts")
  }
  

}


export const getAllPost = async () => {
  // const response = await apiClient.get<PostDataType[]>("/posts");
    const response = await apiClient.get<PostDataType[]>({queryLink});

  return response.data;
}

export const getPostbyId = async (id:any) =>{
  const response = await apiClient.get<PostDataType>(`/posts/${id}`)
  return response;
}

const createPost = async ({ useid,  title, body }: PostDataType) => {
  const response = await apiClient.post<any>("/post", { title, body });
  return response.data;
}

const updatePost = async (id: any, { title, body }: PostDataType) => {
  const response = await apiClient.put<any>(`/post/${id}`, { title, body });
  return response.data;
}

const deletePostById = async (id: any) => {
  const response = await apiClient.delete<any>(`/post/${id}`);
  return response.data;
}