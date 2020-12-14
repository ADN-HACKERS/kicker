import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'underscore';
import moment from 'moment';
import StarButton from './StarButton';
const Card =({post}) =>{
 const usersData=useSelector((state)=>state.usersReducer)
  const userData = useSelector((state) => state.userReducer);
   
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
                    })
                    .join("")}
              </h3>
            </div>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          <p>{post.message}</p>
          {post.picture && (<img src={post.picture} alt= 'card-pic'  />)}
          {post.video && (<iframe width="300" height="300" src={post.video} frameborder="0" allow="accelerometer; autoplay ;clipboard-write ;encrypted-media;gyroscope;picture-in-picture" allowFullScreen title={post._id}></iframe>)}
          <div>
            <div>
              <img src=""  alt="comment" />
              <span>{post.comments.length}</span>
              
            </div>
            < StarButton post={post}/>
          </div>

        </div>
      </>
    </li>
  );
}
export default Card;
        
   
      