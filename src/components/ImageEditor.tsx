import React from 'react'

function ImageEditor({onClose, previewUrl, settings, setSettings}:{
    onClose:()=>void,
    previewUrl: string, 
    settings: {
        type: "original" | "wide" | "square",
        sensitive: boolean
    },
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>
}) {
  return (
    <div className='fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center'>
        <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
            Test
        </div>
    </div>
  )
}

export default ImageEditor  