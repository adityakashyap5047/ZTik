import React from 'react'
import Image from './Image'

function Share() {
  return (
    <div className="p-4 flex gap-4">
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path='ztik/general/avatar.png' alt='Avatar' w={100} h={100} tr={true}/>
      </div>
      {/* Others  */}
      <div className="flex flex-1 flex-col gap-4">
        <input type="text" placeholder='What is happening' className='bg-transparent outline-none placeholder:text-textGray text-xl'/>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Image path='ztik/icons/image.svg' alt='' w={20} h={20} className='cursor-pointer'/>
            <Image path='ztik/icons/gif.svg' alt='' w={20} h={20} className='cursor-pointer'/>
            <Image path='ztik/icons/poll.svg' alt='' w={20} h={20} className='cursor-pointer'/>
            <Image path='ztik/icons/emoji.svg' alt='' w={20} h={20} className='cursor-pointer'/>
            <Image path='ztik/icons/schedule.svg' alt='' w={20} h={20} className='cursor-pointer'/>
            <Image path='ztik/icons/location.svg' alt='' w={20} h={20} className='cursor-pointer'/>
          </div>
          <button className='bg-white text-black font-bold rounded-full py-2 px-4'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Share