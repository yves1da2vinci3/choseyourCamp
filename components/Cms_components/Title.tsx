
import React,{FC} from 'react'

interface  TextProps {
    text? : string
}




const Title: FC<TextProps> = ({ text}) => {
    return (
      <>
        <p contentEditable className='text-xl outline-none font-semibold font-serif tracking-tighter '>{text ? text : "entrez votre titre"}</p>
      </>
    );
  };

  export default Title

