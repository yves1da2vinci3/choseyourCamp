import SyntaxHighlighter from 'react-syntax-highlighter';
import React,{FC, SyntheticEvent, useEffect, useState} from 'react';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CopyBtn from '../copy-btn';
import { MdOutlineContentCopy } from 'react-icons/md';
import { Select } from '@mantine/core';
interface CodeProps {
  index : Number,
  contentResume  : Array<any>,
  setContentResume : Function
}

interface  TextProps {
  text? : string,
  
}
const Code : FC<CodeProps> = ({index,setContentResume,contentResume}) => { 
  const handleClick = (e: SyntheticEvent) => {
    navigator.clipboard.writeText(codeString);
  }
  const onInput = (e : FormEvent) => { 
    const copyContent = [...contentResume]
    copyContent[index].Value =  e.target.innerText
    console.log("fuck bullshit : ",)
    setContentResume ((oldContent)=>[...copyContent ])
 }
 const [codeString,setCodeString] = useState("")
 useEffect(()=>{
   if(contentResume[index].Value !==0){
    setCodeString(contentResume[index].Value)
   }
 },[index])
  const [language,setLanguage] = useState("javascript")
  return (
    <div  className=' w-full min-h-[8rem] outline-none self-center relative flex-wrap overflow-clip break-words ' >
       <Select
      placeholder="Choisir le langage"
      onChange={(language :string) => setLanguage(language)}
      data={[
        { value: 'javascript', label: 'javascript' },
        { value: 'python', label: 'pyhton' },
        { value: 'php', label: 'php' },
        { value: 'java', label: 'java' },
        { value: 'go', label: 'go' },
        { value: 'css', label: 'css' },
      ]}
    />
      <span className="text-white absolute right-2 top-1 hover:cursor-pointer transition hover:scale-150">
        <MdOutlineContentCopy onClick={handleClick} />
      </span>
      <div  onInput={onInput} contentEditable className='flex-1' > 
              <SyntaxHighlighter
                style={atomOneDark}
                language={language}
                
              >
                { codeString ?  codeString.split(/\n$/) : "entrez le code ici"}
              </SyntaxHighlighter>
         
  </div>
    </div>
  )
 }


 export default Code
