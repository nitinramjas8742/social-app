import React from 'react'
import './sidebar.css'
import {MdOutlineRssFeed,MdGroups,MdEmojiEvents,MdSchool,MdBookmarks} from "react-icons/md";
import { RiChatSmile3Fill,RiVideoLine } from "react-icons/ri";
import {BsQuestionOctagonFill,BsBuilding} from "react-icons/bs"
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
          <MdOutlineRssFeed className='sidebaricon'/>
          <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
          <RiChatSmile3Fill className='sidebaricon'/>
          <span className="sidebarlistitemtext">Chats</span>
          </li>
          <li className="sidebarlistitem">
          <RiVideoLine className='sidebaricon'/>
          <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="sidebarlistitem">
          <MdGroups className='sidebaricon'/>
          <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="sidebarlistitem">
          <MdBookmarks className='sidebaricon'/>
          <span className="sidebarlistitemtext">Bookmarks</span>
          </li>
          <li className="sidebarlistitem">
          <BsQuestionOctagonFill className='sidebaricon'/>
          <span className="sidebarlistitemtext">Questions</span>
          </li>
          <li className="sidebarlistitem">
          <BsBuilding className='sidebaricon'/>
          <span className="sidebarlistitemtext">Jobs</span>
          </li>
          <li className="sidebarlistitem">
          <MdEmojiEvents className='sidebaricon'/>
          <span className="sidebarlistitemtext">Events</span>
          </li>
          <li className="sidebarlistitem">
          <MdSchool className='sidebaricon'/>
          <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className='sidebarbutton'>Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
          <li className="sidebarfriend">
            <img src="\assets\pf2.jpg" alt="not found" className="sidebarfriendimage" />
            <span className="sidebarfriendname">Nitin</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
