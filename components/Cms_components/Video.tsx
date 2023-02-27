import React, { FC, useEffect, useState } from 'react'
import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

interface VideoProps {
videoUrl : string,
caption? : string
index : Number,
contentResume  : Array<any>,
setContentResume : Function
}






const  Video : FC<VideoProps> = ({videoUrl,caption,index,setContentResume,contentResume}) => {
  const onInput = (e : FormEvent) => { 
    const copyContent = [...contentResume]
    copyContent[index].Value =  e.target.innerText
    console.log("fuck bullshit : ",)
    setContentResume ((oldContent)=>[...copyContent ])
 }
 const [Caption,setCaption] = useState("")
 useEffect(()=>{
   if(contentResume[index].Value !==0){
    setCaption(contentResume[index].Value)
   }
 },[index])
  return (
    <div className='w-[38rem] h-[38rem] flex-1  self-center  flex-col flex cursor-pointer  hover:brightness-50 group justify-center items-center' >
    <Player
    playsInline
    src={videoUrl}
  />
      <p contentEditable onInput={onInput} className='text-md outline-none text-center mt-2 text-gray-500 tracking-tighter '>{Caption ? Caption : 'entrez une legende'}</p>
           
      </div>
  )
}

export default Video