import React from 'react'
import './Homepage.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'


export default function Homepage() {
  return (
    <div>
     <Topbar/>
     <div className='homeContainer'>
       <Sidebar/>
       <Feed/>
       <Rightbar/>
     </div>
     </div>
  )
}
