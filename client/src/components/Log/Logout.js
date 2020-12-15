import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';


const Logout = ()=>{

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
  
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    
    window.location = "/";
  };

  return (
    <div onClick={logout}>
      
      <img src={"https://static.vecteezy.com/system/resources/previews/000/426/390/non_2x/logout-icon-vector-illustration.jpg" } alt="logout" style={{maxHeight:'50px',width:'50px'}} />
    </div>
  );
}
export default Logout