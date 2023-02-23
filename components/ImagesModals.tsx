import { Modal } from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import {IoIosArrowBack, IoIosArrowForward, IoIosVideocam} from 'react-icons/io'

function ImagesModals({opened,setOpened}) {
   const [CurrentElementIndex,setCurrentElementIndex] = useState(0)
   const previousSlide = () => { 
    if(CurrentElementIndex -1 > -1){
     
     setCurrentElementIndex(CurrentElementIndex-1)

    }
   
   }
   const nextSlide = () => {
     if(CurrentElementIndex + 1 <  Images.length  )
     setCurrentElementIndex(CurrentElementIndex+1)
    }
    const Images = [

        {
          url : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cihotelprsidt2.JPG/1200px-Cihotelprsidt2.JPG"
        },

        {
          url : "https://voogo.fr/wp-content/uploads/2021/10/14680492_1085210488261475_4735033740855841_n-900x596.jpg"
        },

        {
          url : "https://ivonomad.com/dormir-hotel-president-yamoussoukro/chambre-1-2/"
        },
      ]


  return (
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    fullScreen
  >
    <div className='flex flex-col   h-[92vh] w-full  ' >
      {/* carousel occupes 3/4 de la hauteur */}
       <div  className=' w-full bottom-0  relative flex justify-center items-center  h-[85%]' >
        <div onClick={previousSlide} className={`h-12  flex rounded-full justify-center absolute left-5 items-center ${CurrentElementIndex-1 === -1 ? "bg-gray-300 cursor-not-allowed " : "bg-gray-400 hover:bg-gray-500 cursor-pointer" }  drop-shadow-lg  w-12`}>
<IoIosArrowBack size={24} className='text-white   ' />
        </div>
        <div onClick={nextSlide} className={`h-12  flex rounded-full absolute right-5 justify-center items-center ${CurrentElementIndex +1 === Images.length ? "bg-gray-300 cursor-not-allowed " : "bg-gray-400 hover:bg-gray-500 cursor-pointer" } drop-shadow-lg  w-12`}>
<IoIosArrowForward size={24} className='text-white ' />
        </div>
        { 
        <div className='w-[38rem] h-[38rem] relative flex cursor-pointer  hover:brightness-50 group justify-center items-center' >
            <FaTrash size={20} className="group-hover:opacity-100 opacity-0 fill-current  text-white absolute" />
             <Image fill alt='images' src={Images[CurrentElementIndex].url} className="w-[38rem]   h-[38rem]" />
        </div>  
         
      }
     

      </div> 
 

{/* gallerie des medias  */}
<div className='h-[15%] border-2 w-full border-gray-200 flex gap-x-4 items-center pl-3' >
{
Images.map((img,index) => 
<div key={img.url} onClick={()=> setCurrentElementIndex(index)  } className={`h-[5.5rem] relative w-[5.5rem] flex justify-center items-center p-2 hover:rounded-lg ${index === CurrentElementIndex ? "bg-gray-200 rounded-lg" : "" } hover:bg-gray-200 cursor-pointer  `} >
  <div className="h-[5rem] relative w-[5rem]" >
    <Image   fill alt='captions' src={img?.url}   />  
    </div>
</div>
)
}


</div>


    </div>
  </Modal> 
  )
}

export default ImagesModals