import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
export default function Login() {

    return ( <div className="h-screen w-screen  items-center flex-col  justify-center flex" >
        <div className='flex items-center mb-5' > <h1 className='font-bold text-2xl' >ChoseYourCamp</h1><div className='h-2 w-2 self-end bg-blue-600 rounded-full' ></div>  </div>
        <div className="h-[25rem] w-[30rem] flex shadow drop-shadow-md flex-col gap-y-4 bg-white rounded p-5" >
            <div>
            <label htmlFor="email">Email ou UserName</label>
            <input id="email" className="h-[3rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez votre email"  type="text" />
            </div>
            
            <div>
            <label htmlFor="email">Mot de passe</label>
            <input id="email" className="h-[3rem] mt-1 rounded w-full p-2 bg-gray-100" placeholder="entrez votre mot de passe"  type="text" />
            </div>

            <button  type="button"  className="h-[2.8rem] bg-[#3C5AF0] hover:bg-blue-900 font-semibold rounded text-white " >se connecter</button>

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
    </div>)   
}