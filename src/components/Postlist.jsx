import { useContext } from 'react'
import  {PostlistContext}  from '../store/postListStore';
import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
const Postlist = () => {
  const {postlist,addPosts } = useContext(PostlistContext);

  const handkeGetPostsClick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addPosts(data.posts); 
    });
  }
  return (
    <>
      {postlist.length === 0 && <WelcomeMessage handkeGetPostsClick = {handkeGetPostsClick}/>}
      {postlist.map((post) =>(
        <Post key={post.id} post = {post} />
      ))}
    </>
  )
}

export default Postlist