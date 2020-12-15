import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {NavLink} from "react-router-dom"
import _ from'underscore';
import moment from 'moment'
import {addPost,getPosts} from '../../actions/post.actions'
const NewPostForm=()=>{
  const [message,setMessage]=useState("")
  const [postPicture,setPostPicture]=useState("")
const [video,setVideo]=useState("")
const [file,setFile]=useState()
const [createdAt,setCreatedAt]=useState('')
const userData=useSelector((state) => state.userReducer)
const dispatch =useDispatch()
const handlePicture =(e)=>{
setPostPicture(URL.createObjectURL(e.target.files[0]))
setFile(e.target.files[0])
setVideo('')
}
const handlePost = async ()=>{
 if(message ||postPicture ){
   const data=new FormData()
   data.append('posterId',userData._id)
   data.append('message',message)
   if(file) data.append('file',file)
   await dispatch(addPost(data))
   dispatch(getPosts())
   
 }else {
   alert('you should write your message')
 }
}
const CancelPost=()=>{
  setMessage('')
  setPostPicture('')
  setVideo('')
  setFile('')
}
useEffect(()=>{

},[userData])

  return (
    <div style={{display:'flex', justifyContent:'center',margin:'10px' }}>
      <NavLink exact to="/profil" >
        <div >
          {/* <img src={userData.picture} alt='user-img' style={{maxHeight:'150px',width:'150px',borderStyle:'solide', borderColor:'black'}} /> */}
        </div>
      </NavLink>
      <div>
        <textarea name='message' id='message' placeholder='your new here ... ' onChange={(e)=>setMessage(e.target.value)} value={message} />
        
      </div>
      <br/>
      {message || postPicture || video.length > 20 ? (
        <li>
          <div>
            <img src={userData.picture} alt='user-pic' style={{maxHeight:'150px',width:'150px',border:'solide', borderColor:'black'}} />
          </div>
          <div>
            <div>
            <div>
              <h3>{userData.username}</h3>
            </div>
            <div >{moment(Date().toLocaleString()).fromNow()}</div>
            </div>
            <div>
              <p>{message}</p>
              <img src={postPicture}  alt=''/>
            </div>
          </div>
        </li>
      ):null}
      <div>
         <div>
          <img src='' alt='img' />
          <input type='file'  id='file-upload' accept='.jpg, .jpeg , .png ' onChange={(e)=>{handlePicture(e)}}/>
          </div>
      </div>
      <div>
        {message || postPicture || video.length >20 ? (
       <button onClick={CancelPost}>Cancel</button>

        ): null}

        <button onClick={handlePost}>send</button>
      </div>
    </div>
  )
}
export default NewPostForm