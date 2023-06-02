import React from 'react'
import './post.css'
import { MdOutlineMoreHoriz} from "react-icons/md"
import { FcComments} from "react-icons/fc"
import { useState } from 'react'
export default function Post() {
  const [like,setlike] = useState(12);
  const [isliked,setisliked] = useState(false);
  const likehandler = () =>
  {
    setlike(isliked ? like-1 : like+1);
    setisliked(!isliked);

  }

  return (
    <div>
       <div className="post">
         <div className="postwrapper">
           <div className="posttop">
             <div className='posttopleft'>
               <img className='posttopleftimg' src='\assets\pf4.jpg' alt='ERROR'></img>
               <span className="postusername">Kirti Raghav</span>
               <span className="posttime">5 mins ago</span>
             </div>
             <div className="posttopright">
             <MdOutlineMoreHoriz size={30} className="threedots"/>
             </div>
           </div>
             <div className="postcenter">
               <span className="postcentertext">
                 Hey! I am a traveller and this is my first post.
               </span>
              <img src="/assets/Dubai.webp" alt="" className="postcenterimg" />
             </div>
               <div className="postbottom">
                 <div className="postbottomleft">
                   <img src="\assets\like2.png" alt="" className="like" onClick={likehandler} />
                   <img src="\assets\heart.jpg" alt="" className="heart" onClick={likehandler} />
                   <span className='likecounter'>{like} people liked it</span>
                 </div>
                 <div className="postbottomright">
                   <div className="comment">
                     9 comments
                   </div>
                  <div className="postcommenttext">
                    <span>
                     <FcComments size={20} className='commenticon'/>
                    </span>
                  </div>
                 </div>
               </div>

         </div>
       </div>
    </div>
  )
}
