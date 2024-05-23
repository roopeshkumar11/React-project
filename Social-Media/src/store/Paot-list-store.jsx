
import { createContext, useReducer } from "react";



export const PostList=createContext({
    postlist:[],
    addPost:()=>{},
    deletePost: ()=>{},
})
   

const postlistReducer=(currPostlist,action)=>{

    let newPost=currPostlist
    if(action.type=== "DELETE_POST"){
        newPost=currPostlist.filter((post)=>post.id !== action.payload.postid)
    }
    else if(action.type=== "ADD_POST"){
        newPost=[action.payload,...currPostlist]
    }
    return  newPost
}

const PostlistProvider=({children})=>{
    
  const [postlist,disptchPostlist] = useReducer(postlistReducer,DEFAULT_POST_LLIST)
const addPost =(userid,posttitle,postbody,reaction,tags)=>{
disptchPostlist({
    type:"ADD_POST",
    payload:{
        id:Date.now,
title:posttitle,
body:postbody,
reaction:reaction,
userid:userid,
tags:tags
    }
})
}
const deletePost =(postid)=>{
    disptchPostlist({
        type: "DELETE_POST",
        payload:{
            postid,
        }
    })
   
}

 

 
    return <PostList.Provider value={
      {  postlist,
        addPost,
        deletePost}
    }>
        {children}
    </PostList.Provider>
}


const DEFAULT_POST_LLIST=[{
id:"1",
title:"Go to Mumbai",
body:"hi friends i am going to mumbai for my vacation .hpe to enjoy",
reaction:2,
userid:"user-9",
tags:["vaction","mumbai","enjoy"]

},
{
id:"2",
title:"pass ho bhai",
body:"4 sal ki masti k baad bgi ho gaye",
reaction:15,
userid:"user-12",
tags:["graduting","unbeliveable"]

}
]

export default PostlistProvider