

import React, { FC } from 'react';
import Img from 'next/image'
interface ImageProps {
  caption?: string;
  imgUrl : string
}

const Image: FC<ImageProps> = ({ caption,imgUrl}) => {
  return (
    <div className='flex h-auto flex-col' >
      <div className='min-h-[30rem] bg-red-100 relative w-[30rem]' >
        <Img className='aspect-square ' fill src={imgUrl} alt="image" />
      </div>
      <p contentEditable className='text-md outline-none text-center mt-2 text-gray-500 tracking-tighter '>{caption ? caption : 'entrez une legende'}</p>
    </div>
  );
};

export default Image;



