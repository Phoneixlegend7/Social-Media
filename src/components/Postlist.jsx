import { useContext } from 'react'
import  {PostlistContext}  from '../store/postListStore';
import Post from './Post';
const Postlist = () => {
  const {postlist} = useContext(PostlistContext);

  return (
    <>
      {postlist.map((post) =>(
        <Post key={post.id} post = {post} />
      ))}
    </>
  )
}

export default Postlist