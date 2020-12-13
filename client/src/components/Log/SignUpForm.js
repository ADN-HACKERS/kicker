import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";
const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmit, setFormSubmit]=useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const usernameError = document.querySelector(".username.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const confirmPasswordError = document.querySelector(
      ".confirmPassword.error"
    );
    const termsError = document.querySelector(".terms.error");
    confirmPasswordError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== confirmPassword || !terms.checked) {
      if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
      }
      if (!terms.checked) {
        termsError.innerHTML = "Should accept the terms";
      }
    }else {
      await axios({
        method:"post",
        url:`${process.env.REACT_APP_API_URL}api/user/register`,
        data:{
          username,
          email,
          password
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.errors){
          usernameError.innerHTML=res.data.errors.username
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }else{
          setFormSubmit(true);
        }
      })
      .catch((err)=>console.error);
    }
  };
  return (
    <div>
      {formSubmit ? (
        <div>
          <SignInForm />
          <h4 className="success"> successful registration </h4>
        </div>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}></input>
          <div className="username error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}></input>
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}></input>
          <div className="password error"></div>
          <br />
          <label htmlFor="confirmPassword"> Password Confirmation</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}></input>
          <div className="confirmPassword error"> </div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            {" "}
            I Accept{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              {" "}
              the terms{" "}
            </a>{" "}
          </label>
          <div className="terms error"> </div>
          <br /> <br />
          <input type="submit" value="sign up validation" />
        </form>
      )}
    </div>
  );
};
export default SignUpForm;
