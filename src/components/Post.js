import React, { useState } from 'react'

function Post({post}) {

  const [like, setLike] = useState(0);
  return (
    <>
    <div>
        <div className="text-center mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2 p-0 overflow-visible">
          <div className="flex-nowrap pt-3 px-4 pb-0 mb-2 items-center flex">
            <a className="mr-3 flex-grow flex " href="/">
              <img src="user.svg" alt="" className="w-12 h-12" />
              <div className="flex flex-col flex-grow ml-3 overflow-hidden">
                <span className="text-left text-sm font-bold">Title</span>
                <span className="text-left text-xs text-gray-500 font-semibold">
                  Info
                </span>
                <span className="text-left text-xs text-gray-500 font-semibold">
                  Date
                </span>
              </div>
            </a>
            <button className="w-8 h-8 p-2 absolute right-3 top-0">
              <img src="ellipsis.png" alt="" />
            </button>
          </div>
          <div className="text-left px-4 py-0 text-base font-semibold">
            Description
          </div>

          <div className="mt-3 relative block p-2 text-left">
          <p>{post.input}</p>
          </div>
          <div className=" flex overflow-auto items-center py-2 border-solid  border-b border-b-gray-300 ">
            <li className=" flex flex-row ml-4">
              <button className="w-3 h-3">
                <img src="like.png" alt="" />
              </button>
              <button className="w-3 h-3">
                <img src="clapping.png" alt="" />
              </button>
              <button className="w-3 h-3">
                <img src="heart.png" alt="" />
              </button>
            </li>
            <li className=" flex mr-1 text-sm ">
              <p>Comments</p>
            </li>
          </div>
          <div className="flex items-center justify-evenly  py-3">
            <button className="flex items-center w-4 h-4">
             
              <button onClick={(e)=>setLike(like+1)} className="ml-1">{like} Like</button>
            </button>

            <button className="flex items-center w-4 h-4 mr-8">
              <img src="comment.png" alt="" />
              <span className="ml-1">Comment</span>
            </button>
            <button className="flex items-center w-4 h-4">
              <img src="repost.png" alt="" />
              <span className="ml-1">Repost</span>
            </button>
            <button className="flex items-center w-4 h-4">
              <img src="send.png" alt="" />
              <span className="ml-1">Send</span>
            </button>
          </div>
        </div>
      </div>
    
    </>
   
 
  )
}

export default Post