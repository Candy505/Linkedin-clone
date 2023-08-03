import React from 'react'

function Post({post}) {
  return (
    <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2  mt-2 rounded-lg">
      <div className= "p-4 text-left">
        <h4 className='font-bold'>User Post</h4>
        <p>{post.input}</p>
      </div>
    </div>
  )
}

export default Post