
// function  Paragraph  (props) : React.FC<Props> {
//   return (
//     <h1 className="text-4xl font-semibold " >Comment cloner tiktok en utilisant react native expo et supabase </h1>

//   )
// }



import React, { FC, useEffect, useState } from 'react';





interface TextProps {
  text?: string;
  index : Number,
  contentResume  : Array<any>,
  setContentResume : Function
}
const Paragraph: FC<TextProps> = ({ text,index,contentResume,setContentResume}) => {
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
      <p onInput={onInput} contentEditable className='text-md outline-none text-gray-500 tracking-tighter '>{Text ? Text : "entrez votre paragraphe"}</p>
    </>
  );
};

export default Paragraph;

