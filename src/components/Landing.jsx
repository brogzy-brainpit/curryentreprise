"use client";
import CalModalButton from '@/app/BookCall/CalModalButton';
import React, { useRef } from 'react';
import RoundedButton from "../app/common/RoundedButton"
import { ArrowRight, Phone } from 'lucide-react';
import Link from '../components/Header/style.module.scss';
import { motion, useInView } from "framer-motion";
import CustomBtn from './CustomBtn';
import SlideUpText from '@/app/effects/SlideUpText';
import ScaleUpContent from '@/app/effects/ScaleUpContent';


function Landing() {
 
  return (
    <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center w-full h-screen overflow-hidden">
       {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20 z-[13]"></div>
  <div class="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-full w-full animate-pan-overlay opacity-[0.07]">
     </div>
      <div className="relative flex w-full h-full">

        {/* Right side with styled video */}
        <div className="z-[4] w-full h-full absolute top-0 left-0 overflow-hidden">
          {/* VIDEO */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscal group-hover:grayscal-0 transition-all duration-700 ease-in-out scale100 group-hover:scale105"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
           
 </div>
        
          {/* end-dark overlay */}
          {/* main hero text */}
        <div className='z-50 header container mx-auto py-[64px] absolut absolut w-full h-full flex flex-col gap-2  justify-center md:justify-end '>
        <div className='items-center md:items-start w-full z-[10] flex flex-col  justify-center bgred-400/80'>
        {/* <p className='mb-2 text-brand-text-dark uppercase text-center mix-blend-differenc text[#94B141] font-custom-condensed text-[20px] leading-[20px] md:text-[36px] md:leading-[34px] lg:text-[40px] lg:leading-[38px]'>
          wedding 
          </p> */}
             <SlideUpText duration={0.50} delay={0.09} className="capitaliz uppercase text-center text-brand-text-dark text[#94B141] font-custom-condensed text-[20px] leading-[24px] md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[44px]" 
   text={`wedding`}/>

   <SlideUpText center duration={0.50} delay={0.09} className="text-heading2 capitalize text-center text-brand-text-dark font-custom  leading-[40px] md:text-[64px] md:leading-[60px] lg:text-[110px] lg:leading-[100px]" 
   text={`video editor`}/>
  
        {/* <p className="capitaliz uppercase text-center text-brand-text-dark font-custom text-[44px] leading-[40px] md:text-[64px] md:leading-[60px] lg:text-[110px] lg:leading-[100px]">
          video editor
          </p> */}
          <ScaleUpContent delay={1.50}>
      <CustomBtn title='click me' href='#book-a-call' className="mt-5"/>
          </ScaleUpContent>
        </div>
  <div className="py-4 z-[10]  w-full flex gap-[2px] flex-col items-center md:items-start">
 {/* Bottom clients section */}
    <SlideUpText gap='4px' text={"Trusted by 45+ clients"}  className="font-normal text-[#92AF3F text-brand-text-dark text-[12px] capitalize mix-blend-difference"/>
          <ScaleUpContent delay={1.50}>
    <img alt="clients" className="w-[200px] md:w-[220px]" src="/images/clients.png" />
        </ScaleUpContent>
  </div>
       
        </div>
         {/* end main hero text */}
      </div>
         
    </div>
  );
}

export default Landing;
