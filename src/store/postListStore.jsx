import { createContext,useReducer } from "react";
const postObjects  = {
  postlist : [],
  addPost  : () => {},
  deletePost : () => {}
};
export const PostlistContext = createContext(postObjects);


const DEFAULT_POSTLIST = [{
    id: 1,
    title: 'Going to Mumbai',
    body: 'Hi I am going to Mumbai',
    reactions : 3,
    userId: 'user-1',
    tags : ['vacation','mumbai','fun']
},

{
  id: 2,
  title: 'Going to Delhi',
  body: 'Hi I am going to Delhi',
  reactions : 7,
  userId: 'user-2',
  tags : ['vacation','Delhi','pollution']
}
];

const postListFunction=  (currPostList,action) =>{

    let updatedPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        updatedPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
    else if(action.type === 'ADD_POST') {
        updatedPostList = [action.payload,...currPostList];
    } 
    return updatedPostList;
}
const PostlistProvider = ({children}) =>{

    const [postlist, dispatchPostlist] = useReducer(postListFunction, DEFAULT_POSTLIST);

    const addPost = (userId,title,body,reactions,tags) => {
        console.log(userId,title,body,reactions,tags);
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

    const deletePost = (postId) => {
        
        dispatchPostlist({
            type : 'DELETE_POST',
            payload : {
                postId : postId
            }
        })
   
    }
    return (
        <PostlistContext.Provider value={{postlist: postlist, addPost: addPost, deletePost: deletePost}}>
            {children}
        </PostlistContext.Provider>
    )
}



export default PostlistProvider;