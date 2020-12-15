import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import _ from 'underscore';
import moment from 'moment';
import StarButton from './StarButton';
import {updatePost} from "../../actions/post.actions"
import DeleteCard from './DeleteCard';
import CardComments from './CardComments';
const Card =({post}) =>{
 const usersData=useSelector((state)=>state.usersReducer)
  const userData = useSelector((state) => state.userReducer);
  const [isUpdated,setIsUpdated]=useState(false)
   const [textUpdate,setTextUpdate]=useState(null)
   const [showComments,setShowComments]=useState(false)
   const dispatch=useDispatch()
   const updateItem= ()=>{
          if(textUpdate){
             dispatch(updatePost(post._id,textUpdate))
          }
          setIsUpdated(false)
   }
 useEffect(()=>{
   
 },[usersData])
  return (
    <li key={post._id}>
      <>
        <div>
          <img
            src={
              !_.isEmpty(usersData[0]) &&
              usersData
                .map((user) => {
                  if (user._id === post.posterId) return user.picture;
                  else return null
                })
                .join("")
            }
            alt="poster-pic"
            style={{ width: "20%", height: "10%" }}
          />
        </div>

        <div>
          <div>
            <div>
              {" "}
              <h3>
                {!_.isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) return user.username;
                      else return null
                    })
                    .join("")}
              </h3>
            </div>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          {isUpdated === false && <p>{post.message}</p> }
          {isUpdated && ( 
            <div>
              <textarea  defaultValue={post.message} onChange={(e)=>setTextUpdate(e.target.value)}/>
              <div>
                <button onClick={updateItem}> confirm Update</button>
              </div>
               </div>
          )}

          {post.picture && (<img src={post.picture} alt= 'card-pic'  />)}
          {post.video && (<iframe width="300" height="300" src={post.video} frameborder="0" allow="accelerometer; autoplay ;clipboard-write ;encrypted-media;gyroscope;picture-in-picture" allowFullScreen title={post._id}></iframe>)}
          {userData._id === post.posterId && (
            <div>
              <div onClick={()=> setIsUpdated(!isUpdated)}>
              
                <img src='' alt='edit' />
              </div>
             <DeleteCard  id={post._id}/>
            </div>
          )}
          <div>
            <div>
              <img src=""  alt="comment"  onClick={()=>setShowComments(!showComments)}/>
              <span>{post.comments.length}</span>
              
            </div>
            < StarButton post={post}/>
          </div>
            {showComments && <CardComments post={post} />}
        </div>
      </>
    </li>
  );
}
export default Card;
        
   
      