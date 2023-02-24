import { Pagination } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import {FcMenu} from 'react-icons/fc'
import {BsHeart} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'
import ShowcaseItem from "../../components/ShowcaseItem";
import Link from 'next/link'
export default function Showcase() {
    const route = useRouter()
    return (
        <div className="h-screen flex flex-col w-screen " >
             <div className="h-[4rem] shadow bg-white flex px-2 flex-row  justify-between items-center" >
                {/* Logo */}
        <div className='flex items-center ' > <h1 className='font-bold text-2xl' >ChoseYourCamp</h1><div className='h-2 w-2 self-end bg-blue-600 rounded-full' ></div>  </div>
{/* NavItems */}
<div className=" w-[30rem] hidden md:flex h-full  items-center justify-between  " >
    <ul className="list-none flex gap-4">
        <li className={` ${route.pathname.startsWith("/home") ?  "text-blue-500 font-semibold" : 'text-black'} font-heading mr-9  cursor-pointer hover:text-blue-500 hover:font-semibold text-lg`}><Link href="/articles" >Articles</Link></li>
        <li className={` ${route.pathname.startsWith("/showcases") ?  "text-blue-500 font-semibold" : 'text-black'} font-heading mr-9  cursor-pointer hover:text-blue-500 hover:font-semibold text-lg`} >ShowCase</li>
        <li className={` ${route.pathname.startsWith("/tutorials") ?  "text-blue-500 font-semibold" : 'text-black'} font-heading mr-9  cursor-pointer hover:text-blue-500 hover:font-semibold text-lg`} >Tutoriels</li>
        <li></li>
    </ul>
    <div className="h-12 w-12 rounded-full " >
        <Image  className="rounded-full" loading="lazy" src="https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo" alt="userImg"  width={60} height={60} />
    </div>
</div>
<div className="h-[3rem]  md:hidden cursor-pointer w-[3rem] items-center justify-center flex" >
    <FcMenu size={25}/>
</div>

            </div>
            {/* Main */}
            <main  className="flex-1 flex flex-col p-5 " >
                <h1 className="text-4xl text-center text-[#616EA6] font-semibold" >Montre au monde de quoi tu es capable!!!</h1>
                <p className="text-lg text-center text-gray-500 font-semibold" >dans cette partie , il s'agit de voir les travaux des utilisateurs de la plateforme avec la possiblite de voir le code source</p>
                <p className="text-lg text-center text-gray-500 font-semibold" > <span className="text-blue-500" >100</span>  projets</p>
                {/* ShowCase */}
                <div className="flex-1 flex-wrap flex gap-4 justify-center  p-4"  >
                    <ShowcaseItem/>
                    <ShowcaseItem/>
                    <ShowcaseItem/>
                    <ShowcaseItem/>
                    <ShowcaseItem/>
                    <ShowcaseItem/>
                </div>
                <div className='h-26   flex flex-col ' >
      <div className='self-end h-auto ml-auto'>
      <Pagination  color="#616EA6"  total={10} />
      </div>
     
     </div>
            </main>
        </div>
    )
}