import React,{useEffect, useState} from 'react'
// import {useDispatch} from 'react-redux'
import './App.css';
import Routes from "./components/Routes"
import {UidContext} from "./components/AppContext"
import axios from 'axios'
const  App=() =>{
  const [uid,setUid]=useState(null)
  useEffect(()=>{
    const fetchToken=async ()=>{
      await axios({
        method:"get",
        url:`${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials:true
      })
      .then((res)=>{
        console.log(res)
      setUid(res.data)
      })
      .catch((err)=>console.log("No token"))

    }
   fetchToken()
  },[uid])
  return (
    <div >
      {/* store id of user */}
      <UidContext.Provider value={uid} >
     <Routes />
     </UidContext.Provider>
    </div>
  );
}

export default App;
