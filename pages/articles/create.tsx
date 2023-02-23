import Editor from "@/components/Editor"
import Preview from "@/components/Preview"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useCallback, useRef, useState } from "react"
import { AiFillSave } from "react-icons/ai"
import { FcMenu } from "react-icons/fc"
import {BiImage, BiText, BiVideo} from 'react-icons/bi'
import { BsBlockquoteLeft, BsCodeSlash, BsParagraph } from "react-icons/bs"
import Paragraph from "@/components/Cms_components/Paragraph"
import CmsImage from "@/components/Cms_components/Image"
import Block from "@/components/Cms_components/Block"
import Video from "@/components/Cms_components/Video"
import Code from "@/components/Cms_components/Code"
export default function CreateArticle() {
    const [doc, setDoc] = useState<string>('# Hello, World!\n')
    const handleDocChange = useCallback((newDoc: string) => {
        // console.log(newDoc)
      setDoc(newDoc)
    }, [])
    const route = useRouter()

    const [content,setContent] = useState([])
    const [images,setImages] = useState([])
    const [videos,setvideos] = useState([])
    return (
        <div className="flex flex-col h-screen flex-1" >
             <div className="h-[4rem] shadow bg-white flex px-2 flex-row  justify-between items-center" >
                {/* Logo */}
        <div className='flex items-center ' > <h1 className='font-bold text-2xl' >ChoseYourCamp</h1><div className='h-2 w-2 self-end bg-blue-600 rounded-full' ></div>  </div>
{/* NavItems */}
<div className=" w-[30rem] hidden md:flex h-full  items-center justify-between  " >
   
   <div className="flex gap-x-2 items-center " >
    <AiFillSave/>
    <p className="cursor-pointer hover:font-semibold">sauvergarder</p>
   </div>
   
    <div className="h-12 w-12 rounded-full " >
        <Image  className="rounded-full" loading="lazy" src="https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo" alt="userImg"  width={60} height={60} />
    </div>
</div>
<div className="h-[3rem]  md:hidden cursor-pointer w-[3rem] items-center justify-center flex" >
    <FcMenu size={25}/>
</div>

            </div>
            {/* The Main Part*/}
            <div className="flex-1  flex" >
            <div className="w-[25%] flex-col  p-4 gap-4 flex" >
                <h2>Choississez votre composant</h2>
                <div className="flex flex-row flex-wrap gap-4 " >
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BiText size={30} />
                    <p className="text-xl text-gray-400" >Titre</p>
                </div>
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BiImage size={30} />
                    <p className="text-xl text-gray-400" >Image</p>
                </div>
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BsCodeSlash size={30} />
                    <p className="text-xl text-gray-400" >Code</p>
                </div>
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BiVideo size={30} />
                    <p className="text-xl text-gray-400" >Video</p>
                </div>
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BsBlockquoteLeft size={30} />
                    <p className="text-xl text-gray-400" >Block</p>
                </div>
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BsParagraph size={30} />
                    <p className="text-xl text-gray-400" >paragraphe</p>
                </div>
                </div>
            </div>
           
<div   contentEditable onCompositionStart={()=> alert("the user begin enter some text")}    onChange={(e : FormEvent)=> console.log(e)} className="  h-full self-center break-words w-[60%] gap-y-6  flex-col flex  p-5 outline-none flex-1" >
    <h1 className="text-4xl font-semibold font-serif tracking-tighter " >Comment cloner tiktok en utilisant react native expo et supabase </h1>
    <h1 className="text-2xl text-gray-600 tracking-wide italic font-serif font-[500] " >Si vous vous etes toujours demande comment tiktok avait ete fait , cet article est pour vous </h1>
    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    <CmsImage imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cihotelprsidt2.JPG/1200px-Cihotelprsidt2.JPG" />
    <CmsImage imgUrl="https://voogo.fr/wp-content/uploads/2021/10/14680492_1085210488261475_4735033740855841_n-900x596.jpg" />
    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        <Block/>
        <Video videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        <Code codeString='const Code : FC<CodeProps> = ({codeString}) => { 

  return (
    <SyntaxHighlighter language="javascript" style={docco} >
      {codeString}
      
    </SyntaxHighlighter>
  )
 }' />
</div>
{/* Mapping */}
<div className="w-[25%] bg-yellow-500 flex" ></div>
</div>
        </div>
    )
}