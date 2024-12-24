import { useContext} from 'react'
import  {PostlistContext}  from '../store/postListStore';
import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';
const Postlist = () => {
  const {postlist,fetching } = useContext(PostlistContext);

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