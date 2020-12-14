
import React from "react";
import home from './home page.jpg'
import LeftNav from '../components/LeftNav';
import Thread from '../components/thread';

const Home=()=>{
  return (
    <div>
       <h1 style={{color:'#29293d'}}>
     <center>See the world from other angle</center> 
     <center><img src={home}/></center>
    </h1>
   <LeftNav />
   <div>
     <Thread />
   </div>
    </div>
  )
}
export default Home

