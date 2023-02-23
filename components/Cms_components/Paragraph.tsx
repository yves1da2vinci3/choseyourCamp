
interface TitleProps {
    text : String   
  }
// function  Paragraph  (props) : React.FC<Props> {
//   return (
//     <h1 className="text-4xl font-semibold " >Comment cloner tiktok en utilisant react native expo et supabase </h1>

//   )
// }



import React, { FC } from 'react';

interface TextProps {
  text: string;
}

const Paragraph: FC<TextProps> = ({ text}) => {
  return (
    <>
      <p className='text-md text-gray-500 tracking-tighter '>{text}</p>
    </>
  );
};

export default Paragraph;

