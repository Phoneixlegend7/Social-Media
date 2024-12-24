import { useContext, useRef } from "react"
import { PostlistContext } from "../store/postListStore";

const CreatePost = () => {

  const {addPost} = useContext(PostlistContext);
  const userId = useRef();
  const posttitle = useRef();
  const  postcontent = useRef();
  const  postlikes = useRef();
  const postdislikes = useRef();
  const  posttags = useRef();


  const handleSubmit = (e) =>{
    e.preventDefault();
    const userIdElement = userId.current.value;
    const title = posttitle.current.value;
    const body = postcontent.current.value;
    const likes = postlikes.current.value;
    const dislikes = postdislikes.current.value;
    const tags = posttags.current.value.split(' ');

    const reactions = {
      likes : likes,
      dislikes : dislikes
    }
    
  
    userId.current.value = '';
    posttitle.current.value = '';
    postcontent.current.value = '';
    postlikes.current.value = '';
    postdislikes.current.value = '';
    posttags.current.value = '';
    
    addPost(userIdElement,title,body,reactions,tags);
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId : userIdElement,
        title : title,
        body : body,
        reactions : reactions,
        tags : tags
      })
    })
    .then(res => res.json())
    .then(
      resObj =>{
        console.log(resObj);
         addPost(resObj.userId,resObj.title,resObj.body,resObj.reactions,resObj.tags)}
    
    );

  }
  return (
    <form className="create-post" onSubmit={(e) => handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><b>Title</b></label>
    <input type="text" ref={posttitle} className="form-control" id="exampleInputEmail1" placeholder="Enter appropiate Title" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"><b>Content</b></label>
    <textarea row = '4'ref={postcontent} type="text" className="form-control" id="body" placeholder="How u Feelin'"/>
  </div>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label"><b>userId</b></label>
    <input type="text" ref={userId} className="form-control" id="userId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="likes" className="form-label"><b>Number Of Likes</b></label>
    <input type="text" ref={postlikes} className="form-control" id="likes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dislikes" className="form-label"><b>Number Of Dislikes</b></label>
    <input type="text" ref={postdislikes} className="form-control" id="dislikes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label"><b>Enter Tags using space </b></label>
    <input type="text" ref={posttags} className="form-control" id="tags"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost