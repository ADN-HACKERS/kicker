import React from 'react'
import {useDispatch} from "react-redux"
import {deletePost}from "../../actions/post.actions"
const DeleteCard =(props)=>{
  const dispatch =useDispatch()

  const deleteQuote =()=>{
    dispatch(deletePost(props.id))
  }
  
  return (
     <div onClick={()=>{
       if(window.confirm('Are you sure you want to delete this card')){
         deleteQuote()
       }
     }}>
       <img src={"https://icon-library.com/images/delete-icon/delete-icon-14.jpg"} alt="delete" style={{maxHeight:'50px',width:'50px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}} />
     </div>
  )
}
export default DeleteCard