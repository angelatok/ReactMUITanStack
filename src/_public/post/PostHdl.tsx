
import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "../../_rempteAPI/PostsAPI";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


 
const PostHdl = () => {

  
  /* Fetch data */
  const {isLoading, data, isError, error  } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPost,
  });

  if (isLoading){
    return <h2>Loading....</h2>
  }
  if (isError){
    return <p> Error : {error.message}</p>
  }


  return (
    <div>
      <h1>PostHdl page</h1>
      { data?.map((posts: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
        return <div key={posts.id}>{posts.title}</div>
      })}
     
     
    </div>
  );
}

export default PostHdl
