import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-screen bg-white flex-col   flex items-center justify-center w-screen`}>
     <h1 className='text-4xl text-black' >Bienvenue sur <span>ChoseYourCamp.com</span></h1>
     <Link href="/login" className='w-[12rem] h-[3rem] flex items-center justify-center rounded bg-[#3D5AF1]' >
      <p className='text-white font-semibold tracking-normal' >Continuer</p>
     </Link>
    </div>
  )
}
