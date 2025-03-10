import React from 'react'
import Image from './Image'
import PostInfo from './PostInfo'

function Post() {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        {/* Post type */}
        <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
            icon
            <span>Aditya Kumar</span>
        </div>
        {/* Post content */}
        <div className="flex gap-4">
            {/* Avatar  */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image path='ztik/general/avatar.png' alt='user avatar' w={100} h={100} tr={true}/>
            </div>
            {/* Content  */}
            <div className="">
                {/* Top  */}
                <div className=""></div>
                <PostInfo/>
            </div>
        </div>
    </div>
  )
}

export default Post