import React, { useContext } from 'react'
import Post from './Post'
import { PostList as  Postlistdata} from '../store/Paot-list-store'

const Postlist=()=> {
 const {postlist} =useContext(Postlistdata)

  return (
    <>
    {/* {postlist.map((post)=>(<Post/>))} */}
    {postlist.map((post) => <Post key={post.id} post= {post} />)}

 
    
    </>
  )
}

export default Postlist