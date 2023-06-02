import React from 'react'
import './Profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'


export default function Profile() {
  return (
    <>
      <Topbar/>
     <div className='profile'>
       <Sidebar/>
       <div className='profileRight'>
         <div className="profilerighttop">
           <div className="profilecover">
           <img src="assets/Dubai.webp" alt="" className="profilecoverimage" />
           <img src="assets/pf1.jpg" alt="" className="profileuserimage" />
           </div>
           <div className="profileinfo">
             <h4 className='profileinfoname'>Nitin</h4>
           </div>
         </div>
         <div className="profilerightbottom">
          <Feed/>
          <Rightbar/>
       </div>
       </div>
     </div>
    </>
  )
}

