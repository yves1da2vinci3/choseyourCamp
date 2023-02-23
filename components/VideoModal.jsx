import { Modal } from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'
import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
function ImagesModals({videOpened,setVideOpened}) {
   

  return (
    <Modal
    opened={videOpened}
    onClose={() => setVideOpened(false)}
    fullScreen
  >
    <div className='flex flex-col   h-[92vh] w-full  ' >
      {/* carousel occupes 3/4 de la hauteur */}
      <div className='w-[38rem] h-[38rem] flex-1  self-center  relative flex cursor-pointer  hover:brightness-50 group justify-center items-center' >
      <Player
      playsInline
      poster="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cihotelprsidt2.JPG/1200px-Cihotelprsidt2.JPG"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
             
        </div>
      
 





    </div>
  </Modal> 
  )
}

export default ImagesModals