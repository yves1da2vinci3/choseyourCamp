import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaEye, FaSearch } from "react-icons/fa"
import { MdOutlineCreate } from "react-icons/md"
import {FcMenu} from 'react-icons/fc'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsArrowDown, BsArrowUp, BsEyeFill, BsThreeDotsVertical} from 'react-icons/bs'
import ArticleItem from '../../components/ArticleItem'
export default function UserHome() {
const route = useRouter()
const [active,setActive] = useState("Nouveau")
const [activeSubject,setActiveSubject] = useState("web")
const sidebar = [
{
  title : "Nouveau"
},
{
  title : "Populaire"
},
{
  title : "Anciens"
},

]
const Subjects = [
{
  title : "web"
},
{
  title : "Mobile"
},
{
  title : "IA"
},

]
    return (
      
        <div className="h-screen flex-1 " >
         
            {/* NavBar */}
            <div className="h-[4rem] shadow bg-white flex px-2 flex-row  justify-between items-center" >
                {/* Logo */}
        <div className='flex items-center ' > <h1 className='font-bold text-2xl' >ChoseYourCamp</h1><div className='h-2 w-2 self-end bg-blue-600 rounded-full' ></div>  </div>
{/* NavItems */}
<div className=" w-[30rem] hidden md:flex h-full  items-center justify-between  " >
    <ul className="list-none flex gap-4">
        <li className={` ${route.pathname.startsWith("/articles") ?  "text-blue-500 font-semibold" : 'text-black'} font-heading mr-9  cursor-pointer hover:text-blue-500 hover:font-semibold text-lg`}><Link href="/articles" >Articles</Link></li>
        <li className={` ${route.pathname.startsWith("/showcase") ?  "text-blue-500 font-semibold" : 'text-black'} font-heading mr-9  cursor-pointer hover:text-blue-500 hover:font-semibold text-lg`} >  <Link href="/showcases" >Showcases</Link> </li>
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
            {/* Main  */}
            <main className="flex-1 bg-[#FAFAFA] flex  h-full gap-x-4 flex-row" >
                {/* Left Bar */}
                <div className="flex-1  h-full flex-col  hidden md:flex p-2 justify-center" >
                    <div className="w-[20rem] bg-[#F4F5FA] flex flex-col p-4 h-full rounded-md" >
                        {/* Search Bar */}
                        <div className="h-[2.8rem] w-full rounded-full border-2 justify-center  gap-x-2 flex items-center  border-blue-500" >
                            <input className="w-[75%] outline-none appearance-none text-lg bg-[#F4F5FA] text-blue-500  " placeholder="chercher un sujet" />
                            <FaSearch size={20} color="#1877f2" />
                        </div>
                           {/* Filter */}
                    <ul className='list-none gap-y-4 mt-5'>
          { sidebar.map(sidebarItem =>(
            <div onClick={()=> setActive(sidebarItem.title)}  key={sidebarItem.title}  >
           
  <li  className={`h-16 rounded-lg w-full ${active=== sidebarItem.title ? "bg-[#3C5AF0] text-white" : " hover:bg-gray-200"}  gap-x-3 cursor-pointer   flex items-center px-3 `}>
<p className='font-semibold'>{sidebarItem.title}</p>
</li>
</div>
          )) }
         
         
         
        </ul>
        {/* Topics */}
        <h1 className="text-xl font-bold mt-5" >Sujets</h1>
        <ul className='list-none gap-y-4 mt-5'>
          { Subjects.map(subject =>(
            <div onClick={()=> setActiveSubject(subject.title)}  key={subject.title}  >
           
  <li  className={`h-16 rounded-lg w-full ${activeSubject === subject.title ? "bg-white text-black" : " hover:bg-gray-200"}  gap-x-3 cursor-pointer   flex items-center px-3 `}>
<p className='font-semibold'>{subject.title}</p>
</li>
</div>
          )) }
         
         
         
        </ul>

        <div onClick={()=> route.push("/articles/create") } className="h-[3.3rem] w-[16rem] bg-blue-500 rounded-lg items-center gap-x-4 cursor-pointer mt-8 self-center justify-center flex " >
            <MdOutlineCreate size={20} color="white" />
            <p className="text-white font-semibold">creer un nouveau article</p>
        </div>
                    </div>
                 
                </div>
                {/* Article */}
                <div className="flex-[2] h-full bg-[#FAFAFA] pt-3 flex flex-col relative" >
            <p className="text-[#616EA6] text-center font-bold">10 articles</p>

{/* Articles */}
<div className="flex flex-col gap-y-4" >
    <ArticleItem/>
    <ArticleItem/>
    <ArticleItem/>
</div>


{/* button to see more */}
                <div className="h-[3.3rem] w-[11rem] bg-[#D2D9F5]  absolute z-40 bottom-8 rounded-md items-center gap-x-4 cursor-pointer mt-8 self-center justify-center flex " >
            <BsEyeFill size={20} color="#616EA6" />
            <p className="text-[#616EA6] font-semibold">Voir plus</p>
        </div>
                </div>

                {/* Right Bar */}
                <div className="flex-1 h-full bg-red-300  hidden md:flex flex-col p-5 " >
               
                </div>

            </main>
        </div>
    )
}