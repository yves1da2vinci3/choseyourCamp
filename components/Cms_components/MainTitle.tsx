import React,{FC, FormEvent, memo, useEffect, useRef, useState} from 'react'

interface  TextProps {
    text? : string,
    index : Number,
    contentResume  : Array<any>,
    setContentResume : Function
}




const MainTitle: FC<TextProps> = ({ text,index,contentResume,setContentResume}) => {
  

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
        <p onInput={onInput}   contentEditable   className='text-4xl outline-none font-semibold font-serif tracking-tighter '>{Text  ? Text : "Entrez votre titre"  }</p>
      </>
    );
  };

  export default MainTitle