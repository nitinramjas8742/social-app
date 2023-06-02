import React from 'react'
import './Login.css'
import Register from '../Register/Register'
import Homepage from "../Home/Homepage";
import {useNavigate} from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  return ( 
    <div>
      <div className="login">
          <div className="loginwrapper">
              <div className="loginleft">
                  <h3 className="loginlogo">Happy Club</h3>
                  <span className="logindesc">
                      Connect with friends around the world who shares positivity and happiness on Happy club.
                  </span>
                  </div>
                  <div className="loginright">
                      <div className="loginbox">
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        
                        <button  className='loginbutton'  onClick ={()=> {navigate("/Homepage")}}>Log In</button>
                        
                        <span className='forgot'>Forgot Password?</span>
                        
                        <button className="loginregisterbutton" onClick ={()=> {navigate("/Register")}}>Create a new account</button>
                        
                      </div>
                  </div>
          </div>
      </div>
   </div>
  )
}
