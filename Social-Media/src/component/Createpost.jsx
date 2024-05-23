import React, { useContext, useRef } from 'react'
import  { PostList } from '../store/Paot-list-store'

function Createpost() {

 const {addPost}=  useContext(PostList)
 const useridelement= useRef()
 const posttilelement= useRef()
 const postbodyelement= useRef()
 const reactionelement= useRef()
 const tagselement=useRef()


 const handlesubmit=(event)=>{
  event.preventDefault();
  const userid=useridelement.current.value
  const posttitle=posttilelement.current.value
  const postbody=postbodyelement.current.value
  const reaction=reactionelement.current.value
  const tags=tagselement.current.value.split(" ")

  useridelement.current.value=""

  posttilelement.current.value=""
  postbodyelement.current.value=""
  reactionelement.current.value=""
  tagselement.current.value=" "
  addPost(userid,posttitle,postbody,reaction,tags)
 }
  return (
   
    <form className='create-post' onSubmit={handlesubmit}>



<div className="mb-3">
    <label htmlfor="element" className="form-label">Enter your user id</label>
    <input ref={useridelement} type="text" className="form-control" id="userid" placeholder='your user id' />
   
  </div>

  <div className="mb-3">
    <label htmlfor="title" className="form-label">Post title</label>
    <input ref={posttilelement} type="text" className="form-control" id="title" placeholder='How are you filing today' />
   
  </div>
  
  <div className="mb-3">
    <label htmlfor="title" className="form-label">Post content</label>
    <textarea ref={postbodyelement} rows="4"type="text" className="form-control" id="title" placeholder='content about' />
   
  </div>
  
  <div className="mb-3">
    <label htmlfor="reaction" className="form-label">Post title</label>
    <input ref={reactionelement}type="text" className="form-control" id="reaction" placeholder="how many people reaction" />
   
  </div>

  
  <div className="mb-3">
    <label htmlfor="tag" className="form-label">Enter hastag</label>
    <input ref={tagselement} type="text" className="form-control" id="tag" placeholder='please enter tagg' />
   
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default Createpost