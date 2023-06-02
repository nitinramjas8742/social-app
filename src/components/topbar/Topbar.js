import "./Topbar.css";
import React from 'react';
import {FcSearch} from 'react-icons/fc';
import {BsFillPersonFill,BsFillChatDotsFill} from "react-icons/bs";
import {MdCircleNotifications} from "react-icons/md"

export default function Topbar() {
  return (
    <div className="topbarcontainer">
       <div className="topbarleft">
           <span className="logo">Happinessclub</span>
       </div>
       <div className="topbarcenter">
       <span className="search">
       <FcSearch/></span>
       <input placeholder="Search for friends,posts or videos" className="searchinput"></input>
       </div>
       <div className="topbarright">
       <div className="topbarlinks">
           <span className="topbarlink">Homepage</span>
           <span className="topbarlink">Timeline</span>
       </div>
       <div className="topbaricons">
           <div className="topbariconitems">
            <BsFillPersonFill/>
            <span className="topbariconbadge">
                1
            </span>
           </div>
           <div className="topbariconitems">
            <BsFillChatDotsFill/>
            <span className="topbariconbadge">
                2
            </span>
            </div>
           <div className="topbariconitems">
            <MdCircleNotifications/>
            <span className="topbariconbadge">
                4
            </span>
            </div>
            <img className="topbarimage" src="/assets/pf1.jpg" alt="Not found"></img>
            </div>
            
       </div>
    </div>
  )
}
