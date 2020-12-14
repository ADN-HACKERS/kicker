
import React from "react";
import home from './home page.jpg'

const Home = () => {
  return (
    <h1 style={{color:'#29293d'}}>
     <center>See the world from other angle</center> 
     <center><img src={home}/></center>
    </h1>
  );
};
export default Home;

import React from 'react';
import LeftNav from '../components/LeftNav';
import Thread from '../components/thread';
const Home=()=>{
  return (
    <div>
   <LeftNav />
   <div>
     <Thread />
   </div>
    </div>
  )
}
export default Home

