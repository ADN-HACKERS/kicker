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
    <div key={post._id} style={{border: '1px solid gray',margin: '40',padding: '10px',width: '800px',display: 'flex'}}>
      <div style={{width: '50px' ,display: 'flex',justifyContent: 'space-between' ,margin:'40px'}}>
        <div >
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
            style={{maxHeight:'150px',width:'150px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}}
          />
        </div>

        <div style={{margin:'40px'}}> 
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

          {post.picture && (<img src={post.picture} alt= 'card-pic' style={{maxHeight:'400px',width:'400px'}} />)}
          {post.video && (<iframe width="300" height="300" src={post.video} frameborder="0" allow="accelerometer; autoplay ;clipboard-write ;encrypted-media;gyroscope;picture-in-picture" allowFullScreen title={post._id}></iframe>)}
          {userData._id === post.posterId && (
            <div>
              <div onClick={()=> setIsUpdated(!isUpdated)}>
              
                <img src={"https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png"} alt='edit' style={{maxHeight:'50px',width:'50px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}}/>
              </div>
             <DeleteCard  id={post._id}/>
            </div>
          )}
          <div>
            <div>
              <img src={"https://cdn3.iconfinder.com/data/icons/education-flat-icon/130/92-512.png"}  alt="comment"  onClick={()=>setShowComments(!showComments)} style={{maxHeight:'50px',width:'50px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}}/>
              <span>{post.comments.length}</span>
              
            </div>
            < StarButton post={post}/>
          </div>
            {showComments && <CardComments post={post} />}
        </div>
      </div>
    </div>
  );
}
export default Card;
        
   
      