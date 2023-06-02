import React from 'react'
import './Register.css'
import Login from '../Login/Login';
import {useNavigate} from "react-router-dom";
export default function Register() {
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
                        <input placeholder="Username" className="logininput" />
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <input placeholder="Password Again" className="logininput" />
                        <button className='loginbutton'>Sign Up</button>
                        <button className="loginregisterbutton"  onClick ={()=> {navigate("/")}}>Log into Account</button>
                      </div>
                  </div>
          </div>
      </div>
    </div>
  )
}
