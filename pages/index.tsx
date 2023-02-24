import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={`h-screen bg-white flex-col  relative flex items-center justify-center w-screen`}>
      <Image fill src="/banner.png" />
     <h1 className='text-4xl font-semibold font-serif tracking-tighter z-40 text-white' >Bienvenue sur <span>ChoseYourCamp.com</span></h1>
     <Link href="/login" className='w-[12rem] z-40 mt-60 h-[3rem] flex items-center justify-center rounded bg-[#3D5AF1]' >
      <p className='text-white font-semibold tracking-normal' >Continuer</p>
     </Link>
    </div>
  )
}
