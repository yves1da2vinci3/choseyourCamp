import SyntaxHighlighter from 'react-syntax-highlighter';
import React,{FC, SyntheticEvent} from 'react';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CopyBtn from '../copy-btn';
import { MdOutlineContentCopy } from 'react-icons/md';
import { Select } from '@mantine/core';
interface CodeProps {
  codeString : string
}


const Code : FC<CodeProps> = ({codeString}) => { 
  const handleClick = (e: SyntheticEvent) => {
    navigator.clipboard.writeText(codeString);
  }
  return (
    <div contentEditable className=' w-full min-h-[8rem] outline-none self-center relative flex-wrap overflow-clip break-words ' >
       <Select
      placeholder="Choisir le langage"
      data={[
        { value: 'javascript', label: 'javascript' },
        { value: 'python', label: 'pyhton' },
        { value: 'php', label: 'php' },
        { value: 'java', label: 'java' },
      ]}
    />
      <span className="text-white absolute right-2 top-1 hover:cursor-pointer transition hover:scale-150">
        <MdOutlineContentCopy onClick={handleClick} />
      </span>
              <SyntaxHighlighter
                style={atomOneDark}
                language="jsx"
                
              >
                { codeString ?  codeString.split(/\n$/) : "entrez le code ici"}
              </SyntaxHighlighter>
         
  
    </div>
  )
 }


 export default Code
