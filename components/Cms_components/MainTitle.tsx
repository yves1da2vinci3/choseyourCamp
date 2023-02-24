import React,{FC} from 'react'

interface  TextProps {
    text? : string
}




const MainTitle: FC<TextProps> = ({ text}) => {
    return (
      <>
        <p contentEditable className='text-4xl outline-none font-semibold font-serif tracking-tighter '>{text ? text : "entrez votre titre"}</p>
      </>
    );
  };

  export default MainTitle