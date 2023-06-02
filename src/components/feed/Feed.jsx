import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
