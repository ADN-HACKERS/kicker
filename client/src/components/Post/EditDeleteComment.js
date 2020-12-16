import React,{useContext,useState,useEffect} from 'react';
import {UidContext} from "../AppContext"
import {useDispatch} from 'react-redux'
import {editComment} from "../../actions/post.actions"
const EditDeleteComment =({comment,postId}) => {
  const [isAuthor,setIsAuthor] =useState(false)
  const [edit ,setEdit] = useState(false)
  const [text,setText] = useState('')
  const uid=useContext(UidContext)
  const dispatch =useDispatch()
  const handleEdit =(e)=>{
    e.preventDefault()
    if(text) {
   dispatch(editComment(postId,comment._id,text))
   setText('')
   setEdit(false)
    }
  }
  useEffect(()=>{
    const checkAuthor =() =>{
      if(uid === comment.commenterId){
        setIsAuthor(true)
      }
    }
    checkAuthor()
  },[uid,comment.commenterId])
  return (
    <div>
      {isAuthor && edit=== false && (
        <span onClick={()=>setEdit(!edit)}>
          <img src={"https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png"} alt='edit-comment' />
        </span>
      )}
      {isAuthor && edit && (
        <form action='' onSubmit={handleEdit}>
          <label htmlFor='text' onClick={()=>setEdit(!edit)}>Edit</label>
          <br />
          <input type='text' name='text' onChange={(e)=>setText(e.target.value)} defaultValue={comment.text}/>
          <br/>
          <input type='submit' value='confirm your change' />
        </form>
      )}
    </div>
  )
}
export default EditDeleteComment