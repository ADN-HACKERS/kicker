import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getPosts} from '../actions/post.actions';
import _ from 'underscore'
import Card from './Post/card';



const Thread = () =>{
const [loadPost, setLoadPost] =useState(true)
const dispatch =useDispatch(); 
const posts =useSelector((state)=>state.postReducer);
useEffect(()=>{
  if(loadPost){
    console.log(posts)
    dispatch(getPosts())
    setLoadPost(false)
  }
},[loadPost, dispatch])

  return (
    <div>
     <ul>
       {!_.isEmpty(posts[0])&& 
       posts.map((post,index)=>{
        return <Card post={post} key={index}/>
       })
       }
     </ul>
    </div>
  )
}
export default Thread ;
