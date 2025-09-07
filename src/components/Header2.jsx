"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import logo from "../../public/images/logo.png"
import logo from "../../public/images/logo.svg"
import ThemeToggle from './DarkModeToggle.jsx'
import Image from 'next/image.js'

function Header() {
    const [isScrolled, setIsScrolled]=useState(false)
    const [isScrollingUp, setIsScrollingUp]=useState(false)
    const [lastScrollY, setLastScrollY]=useState(0)
    useEffect(()=>{

          const root= document.documentElement
          root.style.setProperty("--anouncement-height", isScrolled?"0px":"40px");
          root.style.setProperty("--header-height", isScrolled?"64px":"80px");
          const handleScroll=()=>{
           const currentScrollY= window.scrollY;
           setIsScrollingUp(currentScrollY<lastScrollY);
           setLastScrollY(currentScrollY)
            setIsScrolled(currentScrollY>400)
          }
          window.addEventListener("scroll",handleScroll,{passive:true,})
          return ()=> window.removeEventListener("scroll",handleScroll )
    
    },[lastScrollY,isScrolled])
    const links=[
      {
        label:'about',
        url:'/about'
      },{
        label:'testimonials',
        url:'/testimonials'
      },{
        label:'projects',
        url:'/projects'
      },{
        label:'contact',
        url:'/contact'
      },
    ]
  return (
    <div className={` --header-height fixed w-full z-40 transition-transform duration-500 ease-in-out ${!isScrollingUp && isScrolled?'-translate-y-full':'translate-y-0'}`}>
  
  <header className={` transition-all duration-500 ease-in-out border-b ${isScrolled?"backdrop-blur-lg shadow-lg border-transparent max-h-[60px]":"bg-transparent border-transparent"}`}>
<div className='container mx-auto w-full'>
<div className={`block w-full text-center relative transition-all duration-300 ease-in-out px-4 ${isScrolled?"py-4":"py-[20px] md:py-[40px]"}`}>
<div className='flex justify-between items-center  relative w-full'>
    <Link prefetch href={"/"} className='text-center font-custom text-2xl inline-block tracking-normal'>
<h1 className='my-0 text-center text-white'  > 
   Logo
</h1>
{/* <Image alt='rel estatelogo' src={logo} className='w-[120px]'/> */}
</Link>
<div className='hidden md:flex flex-row space-x-2'>
  {links.map(({label,url},index)=>{
    return <div key={index} className=' flex flex-row space-x-2'>
      <Link href={url} className='dark:text-red-400 text-white transition-all ease-in-out duration-300  font-normal capitalize text-para'>
      {label}
      </Link>
      </div>
  })}
</div>
<div className='space-x-2 flex'>
<ThemeToggle />
menu
</div>
</div>

</div>
</div>
  </header>
    </div>
  )
}

export default Header