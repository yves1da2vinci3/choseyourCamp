
import React,{FC, useEffect, useState} from 'react'


interface TextProps {
  text?: string;
  index : Number,
  contentResume  : Array<any>,
  setContentResume : Function
}



const Title: FC<TextProps> = ({ text,index,contentResume,setContentResume}) => {
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
        <p onInput={onInput} contentEditable className='text-xl outline-none font-semibold font-serif tracking-tighter '>{Text ? Text : "entrez votre titre"}</p>
      </>
    );
  };

  export default Title

