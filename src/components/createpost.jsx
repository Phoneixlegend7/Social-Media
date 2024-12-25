import { useContext, useRef } from "react"
import { PostlistContext } from "../store/postListStore";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {

  //const {addPost} = useContext(PostlistContext);
  return (
    <Form method="POST" className="create-post">
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><b>Title</b></label>
    <input type="text" name = "title" className="form-control" id="exampleInputEmail1" placeholder="Enter appropiate Title" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"><b>Content</b></label>
    <textarea row = '4'name="body" type="text" className="form-control" id="body" placeholder="How u Feelin'"/>
  </div>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label"><b>userId</b></label>
    <input type="text" name="userId" className="form-control" id="userId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="likes" className="form-label"><b>Number Of Likes</b></label>
    <input type="text" name="likes" className="form-control" id="likes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dislikes" className="form-label"><b>Number Of Dislikes</b></label>
    <input type="text" name="dislikes" className="form-control" id="dislikes"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label"><b>Enter Tags using space </b></label>
    <input type="text" name="tags" className="form-control" id="tags"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
  )
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(' ');
  const reactions = {likes: postData.likes, dislikes: postData.dislikes};
  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(
    resObj =>{
      // addPost(resObj.userId,resObj.title,resObj.body,resObj.reactions,resObj.tags)
      console.log(resObj);
      }
  );

  return redirect('/');
}

export default CreatePost