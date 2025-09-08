'use client';
import { useEffect,useState } from 'react';
import Lenis from 'lenis'
import Landing from '@/components/Landing';
import { AnimatePresence,} from 'framer-motion';
import Preloader from '@/components/Preloader';

import Zoom from '@/components/Zoom';
import Infinite from '@/components/Infinite';
import Houses from '@/components/Houses';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Review from '@/components/Reviews';
import Intro from '@/components/Intro';
import CalModalInline from '@/components/CalModalInline';
import OurNumbers from '@/components/OurNumbers';
import Landing2 from '@/components/Landing2';
import Circular from '@/components/Circular';
import Anime from '@/components/Anime';
import Header from "@/components/Header";




export default function Home() {
 const [isLoading,setIsLoading]=useState(true);
   const [inView,setInView]=useState(false)

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
    window.scrollTo({ top: 0 })

    timer2 = setTimeout(() => {
      setInView(true)
    }, 1000)
  }, 2000)
  const lenis = new Lenis()
  let rafId
  let timer2

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  return () => {
    clearTimeout(timer)   // cleanup timer 1
    clearTimeout(timer2)  // cleanup timer 2
    cancelAnimationFrame(rafId)
    lenis.destroy?.()
  }
}, [])


  return (
    <main className=' bg-brand-background dark:bg-brand-background-dark transition-all duration-500 ease-in-out'>
      <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence>
           {inView && <Header />}
      <Landing inView={inView}  />
    
      {/* <Infinite/> */}
      <Zoom/>
      <Landing2 />
    <OurNumbers/>
    <Intro/>
    <Anime/>
    <Services/>
      <Circular />
    <CalModalInline/>
    <WhyUs/>
    <Review/>
     <Houses/>

    </main>
  );
}