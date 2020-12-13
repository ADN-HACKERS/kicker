import React from 'react';
import {NavLink} from 'react-router-dom'

const LeftNav =()=>{
  return (
    <div>
      <div>
        <div>
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img src=""  alt="home"/>
          </NavLink>
          <br />
          <NavLink to='/trending' exact activeClassName="active-left-nav">
            <img src=""  alt="roket"/>
          </NavLink>
          <br/>
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img src=""  alt="user"/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default LeftNav