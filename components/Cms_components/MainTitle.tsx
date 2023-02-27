import React,{FC, FormEvent, memo, useEffect, useRef, useState} from 'react'

interface  TextProps {
    text : string
}




const MainTitle: FC<TextProps> = ({ text}) => {
     const [Text,setText] = useState("")
    useEffect(()=>{
      console.log("fuck you all")
    },[])
    return (
      <>
        <p onInput={(e : FormEvent)=> setText(e.target.innerText) }  contentEditable   className='text-4xl outline-none font-semibold font-serif tracking-tighter '>{text}</p>
      </>
    );
  };

  export default MainTitle