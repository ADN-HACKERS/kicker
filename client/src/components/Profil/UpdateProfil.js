import React from 'react'
import LeftNav from '../LeftNav'
import {useSelector} from 'react-redux'
import UploadImg from "./UploadImg"
const UpdateProfil=()=> {
  const userData=useSelector((state)=>state.userReducer)
  return (
    <div>
      <LeftNav />
      <h1>Profil of {userData.username}</h1>
      <div> 
        <div>
          <h3>Profile picture</h3>
          <img src={userData.picture} />
          <UploadImg />

      </div>
    </div>
    </div>
  )
}
export default UpdateProfil