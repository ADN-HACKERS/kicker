
import React,{useContext}from "react";
import home from './home page.jpg'
import LeftNav from '../components/LeftNav';
import Log from "../components/Log"
import {UidContext} from '../components/AppContext'
import NewPostForm from "../components/Post/NewPostForm"
import Thread from '../components/thread';

const Home=()=>{
  const uid=useContext(UidContext)
  return (
    <div style={{border: '1px solid gray',display: 'flex', justifyContent:'center'}}>
       <h1 style={{color:'#29293d'}}>
     {/* <center>See the world from other angle</center>  */}
     {/* <center><img src={home}/></center> */}
    </h1>
   {/* <LeftNav /> */}
   <div >
     {uid ? <NewPostForm />:<Log signin={true} signup={false}/>}
     <Thread />
   </div>
    </div>
  )
}
export default Home

