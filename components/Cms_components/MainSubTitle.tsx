

import React, { FC } from 'react';

interface TextProps {
  text: string;
}

const MainSubitle: FC<TextProps> = ({ text}) => {
  return (
    <>
      <h1 contentEditable className="text-2xl outline-none text-gray-600 tracking-wide italic font-serif font-[500] " >{text ? text : "entrez votre description"}</h1>
    </>
  );
};

export default MainSubitle;
