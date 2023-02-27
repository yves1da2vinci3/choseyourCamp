

import React, { FC, useEffect, useState } from 'react';
import Img from 'next/image'
interface ImageProps {
  caption?: string;
  imgUrl : string,
  index : Number,
  contentResume  : Array<any>,
  setContentResume : Function
}


const Image: FC<ImageProps> = ({ caption,imgUrl,setContentResume,contentResume,index}) => {
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
    <div className='flex h-auto flex-col' >
      <div className='min-h-[30rem] bg-red-100 relative w-[30rem]' >
        <Img className='aspect-square ' fill src={imgUrl} alt="image" />
      </div>
      <p onInput={onInput} contentEditable className='text-md outline-none text-center mt-2 text-gray-500 tracking-tighter '>{Caption ? Caption : 'entrez une legende'}</p>
    </div>
  );
};

export default Image;



