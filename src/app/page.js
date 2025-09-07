'use client';
import { useEffect,useState } from 'react';
import Lenis from 'lenis'
import Landing from '@/components/Landing';
import { AnimatePresence,} from 'framer-motion';
import Preloader from '@/components/Preloader';
import ZoomParallax from '@/components/Zoom/index';

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



export default function Home() {
 const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    window.scrollTo({top:0})
    }, 1500);

    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className=' bg-brand-background dark:bg-brand-background-dark transition-all duration-500 ease-in-out'>
      <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence>
    
      <Landing />
      <ZoomParallax />
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