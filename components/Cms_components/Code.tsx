import SyntaxHighlighter from 'react-syntax-highlighter';
import React,{FC, SyntheticEvent} from 'react';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CopyBtn from '../copy-btn';
import { MdOutlineContentCopy } from 'react-icons/md';
interface CodeProps {
  codeString : string
}


const Code : FC<CodeProps> = ({codeString}) => { 
  const handleClick = (e: SyntheticEvent) => {
    navigator.clipboard.writeText(codeString);
  }
  return (
    <div className=' w-[80%] h-[8rem]  self-center relative flex-wrap overflow-clip break-words ' >
      <span className="text-white absolute right-2 top-1 hover:cursor-pointer transition hover:scale-150">
        <MdOutlineContentCopy onClick={handleClick} />
      </span>
              <SyntaxHighlighter
                style={atomOneDark}
                language="jsx"
                
                
              >
                {codeString.split(/\n$/)}
              </SyntaxHighlighter>
         
  
    </div>
  )
 }


 export default Code
