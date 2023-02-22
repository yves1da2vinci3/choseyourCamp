import Image from "next/image";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaImages, FaVideo } from "react-icons/fa";
import ImageModals from '../../Modals/ImagesModals'
export default function SingleShowCase() {
    const [opened,setOpened] = useState(false)
    return (
        <div className="h-screen w-screen  flex items-center flex-col  " >
      <ImageModals opened={opened} setOpened={setOpened} /> 

            <div className="w-[50%]  p-3 flex-col flex-1" >
            <div className="flex items-center cursor-pointer flex-row" >
                <BsArrowLeft color="#616EA6" size={30} />
<p className="text-[#616EA6] font-semibold text-2xl" >retour</p>

            </div>


             {/* Image */}
             <div className="relative h-[20rem] w-[100%] "    >
    <Image fill   loading="lazy" src="data:image/jpeg;base64,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" alt="userImg"    />

            </div>
{/* User Infor */}

            <div className="items-center flex" >
        <Image  className="rounded-full mt-2" loading="lazy" src="https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo" alt="userImg"  width={60} height={60} />
        <p className="ml-3">publié par <span className="font-semibold" >yvesDaVinci</span> </p>

                        </div>
            {/* title */}
    <p className="text-[#616EA6] text-2xl font-bold mt-5" >Application Mobile de delivero</p>
<p className="text-gray-400 text-lg" > Lorem Ipsum hawhen an unknown printer ley of type and scrambled it to make a  only five centuries, but also the leap</p>
{/* screenshots */}
<p className="text-[#616EA6] text-2xl font-bold mt-5" >Medias</p>
<div className='flex items-center self-end gap-x-2 mt-3 mb-3 ' >
 <div onClick={()=> setOpened(true)}  className='h-[2.5rem] bg-black   cursor-pointer rounded-md w-[14rem] mt-1 gap-x-2 flex p-2 items-center justify-center' >
 <FaImages color='white' />

        <p className='text-white font-semibold'>voir les photos</p>
      </div>
 <div onClick={()=> setSeeCommentModal(true)} className='h-[2.5rem] bg-black   cursor-pointer rounded-md w-[16rem] mt-1 gap-x-2 flex p-2 items-center justify-center' >
        <FaVideo size={20} color='white' />

        <p className='text-white font-semibold'>voir video de presentation</p>
      </div>
 </div>
<p className="text-[#616EA6] text-2xl font-bold" >Source Code</p>
<p className="text-[#616EA6] text-lg underline font-semibold" >https://github.com/yves1da2vinci3/whatsAppClone.git</p>

            </div>
           

        </div>
    )
}