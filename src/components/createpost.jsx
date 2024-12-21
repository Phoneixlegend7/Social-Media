import { useContext, useRef } from "react"
import { PostlistContext } from "../store/postListStore";

const CreatePost = () => {

  const {addPost} = useContext(PostlistContext);
  const userId = useRef();
  const posttitle = useRef();
  const  postcontent = useRef();
  const  postreactions = useRef();
  const  posttags = useRef();


  const handleSubmit = (e) =>{
    e.preventDefault();
    const userIdElement = userId.current.value;
    const title = posttitle.current.value;
    const body = postcontent.current.value;
    const reactions = postreactions.current.value;
    const tags = posttags.current.value.split(' ');

    addPost(userIdElement,title,body,reactions,tags);
    userId.current.value = '';
    posttitle.current.value = '';
    postcontent.current.value = '';
    postreactions.current.value = '';
    posttags.current.value = '';
    

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
    <label htmlFor="reactions" className="form-label"><b>Number Of Reactions</b></label>
    <input type="text" ref={postreactions} className="form-control" id="reactions"/>
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