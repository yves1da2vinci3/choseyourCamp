import React, { FC } from 'react'
import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

interface VideoProps {
videoUrl : string,
caption? : string
}




const  Video : FC<VideoProps> = ({videoUrl,caption}) => {
  return (
    <div className='w-[38rem] h-[38rem] flex-1  self-center  flex-col flex cursor-pointer  hover:brightness-50 group justify-center items-center' >
    <Player
    playsInline
    src={videoUrl}
  />
      <p className='text-md text-center mt-2 text-gray-500 tracking-tighter '>{caption ? caption : 'entrez une legende'}</p>
           
      </div>
  )
}

export default Video