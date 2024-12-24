import { createContext,useReducer, useState, useEffect } from "react";
const postObjects  = {
  postlist : [],
  fetching : false,
  addPost  : () => {},
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
    const [fetching,setfetch] = useState(false);
    const addPost = (userId,title,body,reactions,tags) => {
        dispatchPostlist({
            type : 'ADD_POST',
            payload : {
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
          controller.abort();
        }
      
      
      },[]);

    return (
        <PostlistContext.Provider value={{postlist: postlist,fetching:fetching, addPost: addPost, deletePost: deletePost}}>
            {children}
        </PostlistContext.Provider>
    )
}



export default PostlistProvider;