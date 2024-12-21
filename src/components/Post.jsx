import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { PostlistContext}  from "../store/postListStore";
const Post = ({post}) => {

  const {deletePost} = useContext(PostlistContext);
  return (
    <div className="card post-card" style={{minWidth: "30rem"}}>
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick=  {() =>deletePost(post.id)}>
    <TiDelete />
    <span className="visually-hidden">unread messages</span>
  </span>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => ( <span key = {tag}className="badge text-bg-primary hashtag">{tag}</span>))}
    <div className="alert alert-success reactions" role="alert">
       This post has been reacted by {post.reactions} People.
    </div>
  </div>
</div>
  )
}

export default Post;