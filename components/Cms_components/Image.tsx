

import React, { FC } from 'react';
import Img from 'next/image'
interface ImageProps {
  caption?: string;
  imgUrl : string
}

const Image: FC<ImageProps> = ({ caption,imgUrl}) => {
  return (
    <div className='flex h-auto flex-col' >
      <div className='h-[20rem] relative w-full' >
        <Img  fill src={imgUrl} alt="image" />
      </div>
      <p className='text-md text-center mt-2 text-gray-500 tracking-tighter '>{caption ? caption : 'entrez une legende'}</p>
    </div>
  );
};

export default Image;


