import React, { useContext }  from 'react';
import {useSelector} from "react-redux"
import {NavLink} from 'react-router-dom'
import {UidContext} from './AppContext'
import Logout from './Log/Logout'
import 'C:/Users/Yass-Sali/Desktop/kicker/client/src/App.css';


const Navbar=()=>{
  const uid = useContext(UidContext);

  const userData=useSelector((state)=>state.userReducer)
  return (
<nav  style={{display:'flex' , backgroundColor:'#77a8a8',margin: '10px', height: '40px',justifyContent: 'space-between' , height:'60px'}}> 
  {/* <div className="nav-container" style={{display:'flex' }}>
  <div className="logo"> */}
   <NavLink exact to='/' style={{textDecoration: 'none'}}>
     {/* <div className="logo"> */}
      
    <h2 className='nav-link'style={{color:'white'}}>Go to Home Page </h2>
     {/* </div> */}
   </NavLink>
  {/* </div> */}
  {uid ? (
          <div>
            
            {/* <div className="welcome"> */}
              <NavLink exact to="/profil" style={{textDecoration: 'none'}}>
                <h2 className='nav-link'>Welcome {userData.username}</h2>
              </NavLink>
            {/* </div> */}
            <Logout className='nav-link' style={{textDecoration: 'none'}}/>
          </div>
        ) : (
          <div>
            
            {/* <div> */}
              <NavLink exact to="/profil" style={{textDecoration: 'none'}}>
                <h2 className='nav-link'style={{color:'white'}}>Sign up or Login </h2>
                {/* <img src="./img/icons/login.svg" alt="login"/> */}
              </NavLink>
            {/* </div> */}
          </div>
        )}
  {/* </div> */}
</nav>
  )
}
export default Navbar;