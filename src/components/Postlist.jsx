import { useContext, useEffect, useState } from 'react'
import  {PostlistContext}  from '../store/postListStore';
import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';
const Postlist = () => {
  const {postlist,addPosts } = useContext(PostlistContext);
  const [fetching,setfetch] = useState(false);
  useEffect(() => {
    setfetch(true);
    const controller  = new AbortController();
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addPosts(data.posts); 
      setfetch(false);
    });

    return () => {
    console.log('cleaning up');
      controller.abort();
    }
  
  
  },[]);
 
  return (
    <>
      {fetching  && <LoadingSpinner/>}
      {!fetching && postlist.length === 0 && <WelcomeMessage/>}
      {!fetching && postlist.map((post) =>(
        <Post key={post.id} post = {post} />
      ))}
    </>
  )
}

export default Postlist