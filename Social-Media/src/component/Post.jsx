
import { useContext } from "react"
import { AiFillDelete } from "react-icons/ai"
import { PostList } from "../store/Paot-list-store"

function Post({post}) {
  const { deletePost}=useContext(PostList)
  return (
    <div className="card post-card" style={{width: "30rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">{post.title}
    
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  onClick={()=>deletePost(post.id)}>
    <AiFillDelete  />
   
  </span>
</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(    <span key={tag} class="badge text-bg-primary hastag">{tag}</span>))}

    <div class="alert alert-success reactions" role="alert">
  
  This Post has been reacted by {post.reaction} people
</div>
  </div>
</div>
  )
}

export default Post