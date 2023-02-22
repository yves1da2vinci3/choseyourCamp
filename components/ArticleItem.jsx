import React from 'react'
import { FaEye, FaSearch } from "react-icons/fa"
import { MdOutlineCreate } from "react-icons/md"
import {FcMenu} from 'react-icons/fc'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsArrowDown, BsArrowUp, BsEyeFill, BsThreeDotsVertical} from 'react-icons/bs'
import Image from 'next/image'
function ArticleItem() {
  return (
    <div className="h-[14rem] cursor-pointer ease-out  duration-300 hover:translate-y-2 hover:scale-110 flex flex-col w-full bg-white rounded-lg shadow mt-2 p-5 " >
         {/* Post main Infor */}
         <div className="h-[2rem] flex items-center justify-between" >
                        <div className="items-center flex" >
        <Image  className="rounded-full" loading="lazy" src="https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo" alt="userImg"  width={40} height={40} />
        <p className="ml-3">publié par yvesDaVinci</p>

                        </div>
        <p className="ml-3">il y a 11h</p>

                    </div>
                    {/* Title and Description */}
                    <h1 className="font-semibold mt-3 text-[1.4rem] ml-3" >How to import tailwindcss in react native</h1>
                    <p className="text-gray-400" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hass standard dummy text ever since the 1500s, when an unknown printer ley of type and scrambled it to make a  only five centuries, but also the leap</p>
{/* Actions */}
<div className="flex-1  h-full flex items-center justify-between " >
    <div className="flex items-center w-[12rem] h-full " >
        <div className="flex flex-1 items-center w-[12rem] h-full "  >
            <BsArrowUp />
            <p className="text-md font-semibold" >12</p>
        </div>
        <div className="flex flex-1 items-center w-[12rem] h-full "  >
            <BsArrowDown />
            <p className="text-md font-semibold" >19</p>
        </div>
        <div className="flex flex-1 items-center w-[12rem] h-full "  >
           <BsThreeDotsVertical />
           
        </div>
        
    </div>
    <div className="flex items-center w-[12rem] h-full " >
        <div className="flex flex-1 items-center w-[12rem] h-full "  >
            <FaEye />
            <p className="text-md font-semibold ml-2" >12</p>
        </div>
        <div className="flex flex-1 items-center w-[12rem] h-full "  >
            <AiOutlineMessage />
            <p className="text-md font-semibold ml-2" >19</p>
        </div>
      
        
    </div>
</div>
</div>
  )
}

export default ArticleItem