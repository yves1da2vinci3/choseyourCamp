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
import MainTitle from "@/components/Cms_components/MainTitle"
import MainSubitle from "@/components/Cms_components/MainSubTitle"
export default function CreateArticle() {
    const [doc, setDoc] = useState<string>('# Hello, World!\n')
    const handleDocChange = useCallback((newDoc: string) => {
        // console.log(newDoc)
      setDoc(newDoc)
    }, [])
    const route = useRouter()

    const [content,setContent] = useState<any>([<MainTitle  />,<MainSubitle/>      ])
    const [images,setImages] = useState([])
    const [videos,setvideos] = useState([])
    const [droppableeIndex,setDroppableIndex] = useState(0)
    const [contentResume,setContentResume] = useState(["Title","SubTitle"])
    const addParagraph = () => { 
      const oldContent =content;
      const newContent = [...oldContent,<Paragraph/>]
      const oldContentResume = contentResume
      const newContentResume = [...oldContentResume,"paragraph"]
      setContentResume(newContentResume)
      setContent(newContent)
     }
    const addTitle = () => { 
      const oldContent =content;
      const newContent = [...oldContent,<Title/>]
      setContent(newContent)
     }

    const addImage = (e : any) => { 
      const oldContent =content;
      const newContent = [...oldContent,<CmsImage imgUrl={URL.createObjectURL(e.target.files[0])} />]
      const oldContentResume = contentResume
      const newContentResume = [...oldContentResume,"Image"]
      setContentResume(newContentResume)
      setContent(newContent)
     }

 const fileInput = useRef(null)
 const addBlock = () => { 
  const oldContent =content;
  const newContent = [...oldContent,<Block  />]
  // Update Resume Content
  const oldContentResume = contentResume
   const newContentResume = [...oldContentResume,"Block"]
   setContentResume(newContentResume)
  setContent(newContent)
 }
//  ContentResume object Variable
const objectResume = {
     Title : {
      Icon : <BiText color="white" size={20} />,
      title : "Titre principal"
     },
     SubTitle : {
      Icon :  <BiText color="white" size={20} />,
      title : "Sous Titre"
     },
     Image : {
      Icon :  <BiImage color="white" size={20} />,
      title : "Image"
     },
     Video : {
      Icon : <BiVideo color="white" size={20} />,
      title : "Video"
     },
     Block : {
      Icon :  <BsBlockquoteLeft color="white" size={20} />,
      title : "Block"
     },
     Code : {
      Icon : <BsCodeSlash color="white" size={20} />,
      title : "Code"
     },
     paragraph : {
      Icon : <BsParagraph color="white" size={20} />,
      title : "paragraphe"
     },
}

const onDragOver = (event: any) => {
  event.preventDefault();

}
const onDragEnter = (event : any) => { 
  // console.log(event.target)
  // console.log(event.target.getAttribute("data-index"))
  if(event.target.getAttribute("data-index")){
  console.log(event.target.getAttribute("data-index"))

    setDroppableIndex(event.target.getAttribute("data-index"))
  }else{
    // console.log(event.target.parentElement.getAttribute("data-index"))
    setDroppableIndex(event.target.parentElement.getAttribute("data-index"))
    
  }
 }
 const onDrageLeave = (event : any) => { 
  event.target.classList.remove("bg-green-600")
  }
const  onDrop = (event : any) => {
  event.preventDefault();

  let draggableIndex = event.dataTransfer.getData("index");
  let copyContent = content
  let copyContentResume = contentResume
  console.log("before swap",content)
  const draggableElement = copyContent[draggableIndex]
  const droppableElement  = copyContent[droppableeIndex]
  //  Content Resume
  const draggableElementContentResume = copyContentResume[draggableIndex]
  const droppableElementContentResume  = copyContentResume[droppableeIndex]
  // Swap element
  copyContent[draggableIndex] = droppableElement
  copyContent[droppableeIndex] = draggableElement
  //  ContentResume
  copyContentResume[draggableIndex] = droppableElementContentResume
  copyContentResume[droppableeIndex] = draggableElementContentResume
   setContent(copyContent)
  //  Update ContentResume
  console.log("after swap",copyContent)

}
const  onDragStart = (event : any) => {
  console.log('dragstart on div: ', typeof event.target.getAttribute("data-index"));
  event.target.classList.add("bg-green-600")
  event.dataTransfer.setData("index", Number(event.target.getAttribute("data-index")));
}
    return (
        <div className="flex flex-col h-screen flex-1" >
          <input type="file" onChange={addImage} className="hidden" ref={fileInput} />
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
            <div className="flex-1 relative flex" >
            <div className="w-[30%]  flex-col  p-4 gap-4 flex" >
                <h2>Choississez votre composant</h2>
                <div className="flex sticky flex-row flex-wrap gap-4 " >
                <div className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BiText size={30} />
                    <p className="text-xl text-gray-400" >Titre</p>
                </div>
                <div onClick={()=> fileInput?.current.click()} className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
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
                <div onClick={()=> addBlock()} className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BsBlockquoteLeft size={30} />
                    <p className="text-xl text-gray-400" >Block</p>
                </div>
                <div onClick={()=> addParagraph()} className="w-[8rem] border-2 items-center justify-center flex-col flex h-[8rem] shadow-sm cursor-pointer hover:shadow-xl" >
                      <BsParagraph size={30} />
                    <p className="text-xl text-gray-400" >paragraphe</p>
                </div>
                </div>
            </div>
           
<div        className="  h-full self-center break-words flex-1 w-[60%] gap-y-6  flex-col flex  p-5 outline-none " >
 {...content}
</div>
{/* Mapping */}
<div className="w-[25%] bg-blue-900 flex-col p-3 flex" >
  <h2 className="font-semibold text-white  text-lg">Resumé du contenu</h2>
  <p className="text-white mb-4 text-lg">Reogarnisez ou supprimer un block</p>
  <ul className="list-none gap-y-2 flex-col flex flex-1" >
    { contentResume.map((content,index) => (
 <li onDrop={onDrop}  onDragLeave={onDrageLeave} data-index={index} onDragEnter={onDragEnter} onDragOver={onDragOver} onDragStart={onDragStart} draggable key={Math.random()} className="bg-blue-700  h-10 rounded gap-3 flex px-2 items-center" >
      {objectResume[content].Icon}

   <p className="text-white font-semibold " >{objectResume[content].title}</p>
 </li>
    )) }
   
    
  </ul>
</div>
</div>
        </div>
    )
}