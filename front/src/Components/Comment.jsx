import React from 'react'
import { Link } from 'react-router-dom'

export default function Comment({comment}) {
  return (
    <div className='w-full my-10 ml-2 '>
        <h2 className='my-5'>댓글 <span className=' text-gray-300'>({comment.length})</span></h2>
        <div className=' border-t-2 p-3 w-full'>
            {comment.map((v,i)=>{
                return <div className='flex mx-3 my-10' key={i}>
                    <Link to={`/user/${v.user_id}`} className='mx-3  h-20'>
                    <img src={v.user_profile} alt='salesInfo' className='rounded-full'></img>
                    </Link>
                    
                    <div className='mx-5 my-2'>
                        <h4>{v.user_nickname}</h4>
                        <h4>{v.comment_content}</h4>
                    </div>
                </div>
            })}
        </div>
    </div>

  )
}
