import React,{useState} from 'react';
import {useDispatch , useSelector} from "react-redux"
import _ from 'underscore';

const CardComments=({post})=>{
  const [text,setText] =useState("")
 const usersData=useSelector((state)=>state.usersReducer)
 const userData = useSelector((state) => state.userReducer);
 const dispatch=useDispatch()
const handleComment=()=>{}
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
          </div>
          </div>
      </div>
    )
  })}
    </div>
  )
}
export default CardComments
