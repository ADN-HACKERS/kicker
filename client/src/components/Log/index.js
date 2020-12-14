import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
// import './App.css';

const Log = (props) => {
  const [SignUpModal, setSignUpModal] = useState(props.signup);
  const [SignInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
      //hello test
    }
  };

  return (
   <center><div style={{backgroundColor: "#f2f2f2",width:'250px',padding:'10px',borderColor: '#f2f2f2',borderRadius: '10px'}}>
     {/* <img src={Logo} alt="Mountain"></img> */}
      <div >
        <div style={{dispaly:'flex'}} >
          <div
            onClick={handleModals}
            id="register"
            className={SignUpModal ? "active-btn" : null} style={{ backgroundColor:"#ff9999",width:'70px',height:'20px', border:'solid', borderRadius:'10px',borderColor:'#ff9999'}}>
            Sign Up
          </div>
          <br/>
          <div
            onClick={handleModals}
            id="login"
            className={SignInModal ? "active-btn" : null} style={{ backgroundColor:" #ffffcc",width:'70px',height:'20px', border:'solid', borderRadius:'10px',borderColor:'#ffffcc'}}>
            {/* {" "} */}
            Sign In
          </div>
          <br/>
        </div>
        {SignUpModal && <SignUpForm />}
        {SignInModal && <SignInForm />}
      </div>
    </div>
    </center> 
  );
};
export default Log;
