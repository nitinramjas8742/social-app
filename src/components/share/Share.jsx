import React from 'react'
import './share.css'
import {MdPermMedia, MdOutlineLabelImportant ,MdOutlineRoom } from "react-icons/md";
import {HiEmojiHappy} from "react-icons/hi"
export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
      <div className="sharetop">
      <img src="\assets\pf3.jpg" alt="not found" className="shareprofileimg" />
        <input placeholder="what's in your mind" className='shareinput'></input>
      </div>
      <hr className='sharetophr'></hr>
      <div className="sharebottom">
        <div className="shareoptions">
            <div className="shareoption">
                <MdPermMedia size={30} style={{fill : 'tomato'}} className='shareicon'/>
                  <span className="shareoptiontext">Photo or Video</span>
            </div>
            <div className="shareoption">
                <MdOutlineLabelImportant size={30} style={{fill : 'blue'}}className='shareicon'/>
                  <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
                <MdOutlineRoom size={30} style={{fill : 'green'}} className='shareicon'/>
                  <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
                <HiEmojiHappy size={30} style={{fill : 'orange'}} className='shareicon'/>
                  <span className="shareoptiontext">Feelings</span>
            </div>
            <button className='sharebutton'>Share</button>
        </div>
      </div>
    </div>
    </div>
  )
}
