import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'underscore';

const Card =({post}) =>{
const [isLoading , setIsLoading] =useState(false)
 const userData = useSelector((state)=>state.userReducer)
 const usersData=useSelector((state)=>state.usersReducer)
 
 useEffect(()=>{
  !_.isEmpty(usersData[0]) && setIsLoading(true) 
 },[usersData])
  return (
    <li key ={post._id}>
     { console.log(usersData.length)}
      {isLoading ? (<i className='fas fa-spinner fa-spin'></i>):( 
        <><div><img src={!_.isEmpty(usersData[0])&& usersData.map((user)=>{
          if(user._id === post.posterId) return user.picture 
        }).join('')} alt=''/></div></>
      )}
  </li>
  )
}
export default Card;
        
   
       