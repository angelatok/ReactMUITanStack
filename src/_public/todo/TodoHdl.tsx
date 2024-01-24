import { useInView } from 'react-intersection-observer';

import { Link } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import {  todo } from './todo';
import { useEffect } from 'react';
import TodoCard from './TodoCard';


const TodoHdl = () => {
  
 const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
  );
  return res.json();
};
  
   const {data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
});


/* infinite scroll */
const { ref, inView } = useInView();

useEffect(() =>{
  if(inView && hasNextPage){
    fetchNextPage();
  }
},[inView, hasNextPage, fetchNextPage]);


/* innerRef is responsible for infinite scrolling */
const content = data?.pages.map((todos: todo[]) =>
    todos.map((todo, index) =>{
      if(todos.length == index +1 ){
          return <TodoCard innerRef = {ref} key={todo.id} todo={todo} />    
      }
    return <TodoCard key={todo.id} todo={todo} />
  })
);
  

if(status === 'pending'){
  return <p> Loading.....</p>
}

if (status === 'error') {
  return <p>Error : {error.message}</p>
}

return (
    <div>
        {content} 
        {isFetchingNextPage && <h3> Loading....</h3>}

        <Link to='/'>
        <Button variant="contained"> GO HOME </Button>
      </Link>
      </div>
  )
}

export default TodoHdl
