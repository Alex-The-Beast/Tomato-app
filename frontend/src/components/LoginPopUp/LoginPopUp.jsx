import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="Login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-input">
          {currentState==="Login"?<></>: <input type="text" placeholder="Your name" required />}
         
          <input type="email" placeholder="Enter Your email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button>{currentState==="Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login" ?
        <p>Create an account <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopUp;
