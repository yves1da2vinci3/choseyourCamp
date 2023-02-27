import { Modal } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { FaImages, FaVideo } from "react-icons/fa";
import FormatBye from '../../utils/formatBytes'
export default function CreateShowcase() {
    const route = useRouter()
    const [uploadMediaModal,setUploadMediaModal] = useState(false)
    const [FileUpload,setFilesUpload] = useState([])
    const inputFileRef = useRef(null)
    const FileChangeHandler = (e : any) => { 
        // console.log(e)
        const uploaded = [...FileUpload].concat(Array.prototype.slice.call(e.target.files))
    
       setFilesUpload(uploaded)
     }
    return(
        <div className="h-screen flex-col w-screen items-center justify-center flex" >
            {/* Upload Media Modal */}
            <Modal opened={uploadMediaModal} onClose={()=> setUploadMediaModal(false)} fullScreen={true}  >
                <div className="h-[80vh] w-full flex justify-center  " >
                    <input onChange={FileChangeHandler}  className="hidden" type="file" multiple={true} ref={inputFileRef} />
                    <div className="w-[32rem] h-auto ">
                    <div onClick={()=>inputFileRef?.current.click()} className="h-[13rem] w-full gap-y-4 border-dotted rounded-md cursor-pointer  bg-blue-100 flex-col border-2 border-blue-700 items-center justify-center flex" >
                    <AiOutlineCloudUpload size={60} color="#1877f3" />
                    <p className="tracking-normal font-sans font-semibold text-blue-700 italic ">cliquer ou deposer les fichiers ici</p>
                </div>
                {/* File */}
                {FileUpload.map((value,index) => (
                    <div key={index} className="flex flex-row p-4 h-[4rem] py-2 rounded shadow-sm bg-white mt-2 px-4"  >
                    <div className="h-12 relative w-12 bg-green-500" >
                        <Image src={URL.createObjectURL(value)} fill alt="image" />
                    </div>
                    <div className="flex flex-1 ml-2 flex-col justify-between " >
                        <p className="font-semibold" >{value.name.length >40 ?value.name.substring(0,40) + "..." : value.name}</p>
                        <p className=" text-gray-500" >{FormatBye(value.size)}</p>
                    </div>
                    <div className="h-6 w-6 cursor-pointer hover:shadow rounded-full items-center justify-center flex" >
                        <AiOutlineClose />
                    </div>
                    </div>
                ))}
               
                    </div>
                
                </div>
            </Modal>
             <div onClick={()=> route.back() } className="h-[2.8rem] w-[8rem] bg-[#D2D9F5] mb-2  self-start ml-8  rounded-md items-center gap-x-4 cursor-pointer mt-2 justify-center flex " >
            <BsArrowLeft color="#616EA6" size={20} />
            <p className="text-[#616EA6] font-semibold">retourner</p>
        </div>
            <div className="w-[32rem] drop-shadow-lg shadow-sm h-[43rem] gap-y-4 flex-col flex p-4 rounded-lg bg-white" >
            <label htmlFor="title">Caption</label>

                <div className="h-[13rem] w-full gap-y-4 border-dotted rounded-md cursor-pointer  bg-blue-100 flex-col border-2 border-blue-700 items-center justify-center flex" >
                    <AiOutlineCloudUpload size={60} color="#1877f3" />
                    <p className="tracking-normal font-sans font-semibold text-blue-700 italic ">cliquer ou deposer le fichier ici</p>
                </div>
                <div>
            <label htmlFor="title">Titre du projet</label>
            <input id="title" className="h-[3rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez le titre du projet"  type="text" />
            </div>
                <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" className="h-[6rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez la description du projet"   />
            </div>
            <div>
            <label htmlFor="title">Lien</label>
            <input id="title" className="h-[3rem]  rounded w-full p-2 bg-gray-100" placeholder="entrez le lien du projet"  type="text" />
            </div>
            <div className='flex items-center justify-center self-end gap-x-2 mt-3 mb-3 ' >
 <div  onClick={()=> setUploadMediaModal(true)}  className='h-[2.5rem] bg-blue-600   cursor-pointer rounded-md w-[14rem] mt-1 gap-x-2 flex p-2 items-center justify-center' >
 <FaImages color='white' />

        <p className='text-white font-semibold'>Choisir les photos</p>
      </div>
 <div  className='h-[2.5rem] bg-blue-600   cursor-pointer rounded-md w-[14rem] mt-1 gap-x-2 flex p-2 items-center justify-center' >
        <FaVideo size={20} color='white' />

        <p className='text-white texst-sm font-semibold'>Choisir  une video </p>
      </div>
 </div>
 <div  className="h-[3.3rem] w-[16rem] bg-blue-500 rounded-lg items-center gap-x-4 cursor-pointer  self-center justify-center flex " >
            <p className="text-white font-semibold">publier</p>
        </div>
            </div>
           
        </div>
    )
}