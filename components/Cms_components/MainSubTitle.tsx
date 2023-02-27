

import React, { FC, useEffect, useState } from 'react';

interface TextProps {
  text?: string;
  index : Number,
  contentResume  : Array<any>,
  setContentResume : Function
}

const MainSubitle: FC<TextProps> = ({ text,index,contentResume,setContentResume}) => {
  const onInput = (e : FormEvent) => { 
    const copyContent = [...contentResume]
    copyContent[index].Value =  e.target.innerText
    console.log("fuck bullshit : ",)
    setContentResume ((oldContent)=>[...copyContent ])
 }
 const [Text,setText] = useState("")
 useEffect(()=>{
   if(contentResume[index].Value !==0){
    setText(contentResume[index].Value)
   }
 },[index])
  return (
    <>
      <h1 onInput={onInput} contentEditable className="text-2xl outline-none text-gray-600 tracking-wide italic font-serif font-[500] " >{Text  ? Text : "entrez votre description"}</h1>
    </>
  );
};

export default MainSubitle;
