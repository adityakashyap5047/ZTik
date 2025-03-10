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
                {/* Top  */}
            <div className='flex-1'>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className='text-md font-bold'>Aditya Kumar</h1>
                        <span className='text-textGray'>@aditya</span>
                        <span className='text-textGray'>1 day ago</span>
                    </div>
                    <PostInfo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post