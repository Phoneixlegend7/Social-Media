import { createContext,useReducer } from "react";
const postObjects  = {
  postlist : [],
  addPost  : () => {},
  addPosts : () => {},
  deletePost : () => {}
};
export const PostlistContext = createContext(postObjects);




const postListFunction=  (currPostList,action) =>{

    let updatedPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        updatedPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
    else if(action.type === 'ADD_POST') {
        updatedPostList = [action.payload,...currPostList];
    } 
    else if(action.type === 'ADD_INITIAL_POST') {
        updatedPostList = action.payload.posts;
    }
    return updatedPostList;
}
const PostlistProvider = ({children}) =>{

    const [postlist, dispatchPostlist] = useReducer(postListFunction, []);

    const addPost = (userId,title,body,reactions,tags) => {
        dispatchPostlist({
            type : 'ADD_POST',
            payload : {
                id : Math.floor(Math.random() * 1000),
                userId : userId,
                title : title,
                body : body,
                reactions : reactions,
                tags : tags
            }
        })
    }

    const addPosts = (posts) => {
        dispatchPostlist({
            type : 'ADD_INITIAL_POST',
            payload : {
              posts
            }
        })
    }

    const deletePost = (postId) => {
        
        dispatchPostlist({
            type : 'DELETE_POST',
            payload : {
                postId : postId
            }
        })
   
    }
    return (
        <PostlistContext.Provider value={{postlist: postlist, addPost: addPost,addPosts:addPosts, deletePost: deletePost}}>
            {children}
        </PostlistContext.Provider>
    )
}



export default PostlistProvider;