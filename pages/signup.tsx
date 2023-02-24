import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { EventHandler, useRef, useState } from 'react'
import { BsArrowLeft, BsPlus } from 'react-icons/bs'
import Image from 'next/image'
import { MultiSelect, PasswordInput } from '@mantine/core'
import { useRouter } from 'next/router'
export default function Signup() {
       const [file,setFile] = useState(null)
       const fileHandler = (e : any) => { 
        setFile(e.target.files[0])
       }
       const fileInput = useRef(null)
       const [stepStatus,setstepStatus] = useState(1)
    //    Data
    const data = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
        { value: 'riot', label: 'Riot' },
        { value: 'next', label: 'Next.js' },
        { value: 'blitz', label: 'Blitz.js' },
      ];

      const route = useRouter()
      
    return ( <div className="h-screen w-screen  items-center flex-col  justify-center flex" >
        <div className='flex items-center mb-5' > <h1 className='font-bold text-2xl' >ChoseYourCamp</h1><div className='h-2 w-2 self-end bg-blue-600 rounded-full' ></div>  </div>
      {/* Main Container */}
        <div className="h-[35rem] w-[30rem] flex shadow drop-shadow-md flex-row gap-y-4 overflow-hidden bg-white rounded" >
            {/* First Step */}
           <div className="h-[35rem] w-[30rem] flex shadow drop-shadow-md flex-col gap-y-4  rounded p-5 bg-white" >
        <input onChange={fileHandler} type="file" className='hidden' ref={fileInput} />

        <div className='h-36 w-36  relative rounded-full self-center ' >
            
        <Image fill  className='h-36 w-36 rounded-full' alt='userImg'  src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
        <div onClick={()=> fileInput?.current?.click() } className='h-10 w-10 cursor-pointer hover:bg-black-800 bg-blue-600 bottom-0 right-2 absolute flex items-center justify-center rounded-full ' >
          <BsPlus size={28} color='white' />
        </div>
      </div>
            <div>
            <label htmlFor="email">Email </label>
            <input id="email" className="h-[3rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez votre email"  type="text" />
            </div>
            
            <div>
            <label htmlFor="userName">UserName</label>
            <input id="userName" className="h-[3rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez votre userName"  type="text" />
            </div>

            <button  onClick={()=> stepStatus ===1 ? setstepStatus(2) : setstepStatus(1) } type="button"  className="h-[2.8rem] bg-[#3C5AF0] hover:bg-blue-900 font-semibold rounded text-white " >{stepStatus ===1 ? "Continuer" : "s'enregistrer"}</button>

         <p className="text-center text-gray-400 font-semibold">OU</p>
         <div className="h-[3.5rem] flex gap-x-4 justify-center flex-row items-center  " >
            <div className=" h-[3rem] w-[3rem] rounded  shadow hover:shadow-md cursor-pointer items-center justify-center flex  " >
                <FcGoogle />
            </div>
            <div className=" h-[3rem] w-[3rem] rounded  shadow hover:shadow-md cursor-pointer items-center justify-center flex  " >
                <FaGithub/>
            </div>
            
         </div>
         </div>
         {/* Second Step */}
         <div className={`h-[35rem] w-[30rem] flex shadow drop-shadow-md flex-col gap-y-4  rounded p-5 absolute transition duration-[700ms] ease-in-out delay-[100ms]  ${stepStatus ===1 ? "translate-x-[30rem]" : "translate-x-[0rem]" } bg-white`}>
         <div onClick={()=> setstepStatus(1)} className="h-[2.8rem] w-[8rem] bg-[#D2D9F5]   rounded-md items-center gap-x-4 cursor-pointer mt-2 justify-center flex " >
            <BsArrowLeft color="#616EA6" size={20} />
            <p className="text-[#616EA6] font-semibold">retourner</p>
        </div>
         <div>
            <label htmlFor="email">Mot de passe </label>
            <PasswordInput placeholder='entrez votre mot de passe' />
            </div>
            
            <div>
            <label htmlFor="email">Confirmation du Mot de passe </label>
            <PasswordInput placeholder='confirmez mot de passe' />
          
            </div>
            <MultiSelect
      data={data}
      label="Ton framework preferé"
      placeholder="Choisir tout ce que tu aimes"
    />
            <button  onClick={()=> route.push("/articles")   } type="button"  className="h-[2.8rem] bg-[#3C5AF0] hover:bg-blue-900 font-semibold rounded text-white " >{stepStatus ===1 ? "Continuer" : "s'enregistrer"}</button>
         </div>
        </div>
    </div>)   
}