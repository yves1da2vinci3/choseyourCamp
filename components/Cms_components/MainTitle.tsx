import React,{FC} from 'react'

interface  TextProps {
    text : string
}




const MainTitle: FC<TextProps> = ({ text}) => {
    return (
      <>
        <p className='text-4xl font-semibold font-serif tracking-tighter '>{text}</p>
      </>
    );
  };

  export default MainTitle