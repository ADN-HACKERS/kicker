import React,{useState} from 'react';
import {useDispatch , useSelector} from "react-redux"
import {addComment,getPosts} from "../../actions/post.actions"
import EditDeleteComment from './EditDeleteComment'
import _ from 'underscore';
import moment from 'moment'
const CardComments=({post})=>{
  const [text,setText] =useState("")
 const usersData=useSelector((state)=>state.usersReducer)
 const userData = useSelector((state) => state.userReducer);
 const dispatch=useDispatch()
const handleComment=(e)=>{
  e.preventDefault()
  if(text){
    dispatch(addComment(post._id,userData._id,text,userData.username))
    .then(()=>dispatch(getPosts()))
    .then(()=>setText(''))
  }

}
  return (
    <div>
  {post.comments.map((comment)=>{
    return (
      <div>
        <div>
          <img src={
              !_.isEmpty(usersData[0]) &&
              usersData
                .map((user) => {
                  if (user._id === comment.commenterId) return user.picture;
                  else return null
                })
                .join("")
            } alt='commenter-pic'/>
        </div>
        <div >
          <div>
            <div>
              <h3>{comment.commenterUsername}</h3>
            </div>
            <span>{moment(comment.timestamp).fromNow()}</span>
          </div>
          <p>{comment.text}</p>
          <EditDeleteComment  comment={comment} postId={post._id}/>
          </div>
      </div>
    )
  })}
  {userData._id && (
    <form action="" onSubmit={handleComment} >
      <input type='text' value={text} name='text' onChange={(e)=>setText(e.target.value)} placeholder=" comment ..."/>
      <br />
      <input type='submit' value='send' />
    </form>
  )}
    </div>
  )
}
export default CardComments
