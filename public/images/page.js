'use client'
// import Gallery from "@/components/Gallery";
// import HorizontalParallax from "@/components/HorizontalParallax";
import Images from "@/components/Images";
// import Landing from "@/components/ExLanding";
// import Landing2 from "@/components/Landing2";
import Landing3 from "@/components/Landing3";
// import OurExpertise from "@/components/OurExpertise";
import Parallax from "@/components/Parallax";
import Preloader from "@/components/Preloader";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Texter from "@/components/Texter";
import Projects from "@/components/Projects";
// import TwoImages from "@/components/TwoImages";
import SmoothScroll from "@/effects/SmoothScroll";
import { AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewShow from '@/app/_components/Reviews';
import Compatibility from "./_components/Compatibility";
import LandingTrusted from "@/components/LandingTrusted";
import Contact from "./_components/Contact";

export default function Home() {
  const [isLoading,setIsLoading]=useState(true)
   const [inView,setInView]=useState(false)

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    setInView(true)
    }, 2420);
  },[])
  return (
   <div className="relativ">
    <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence>
    <SmoothScroll>
   {/* <Landing/> */}
   <Landing3 inView={inView}/>
  <LandingTrusted text companies={[
  {img:"https://static.showit.co/200/dzUFi5KjGH3TOM_zejWL9A/293257/1.png"},
  {img:"https://static.wixstatic.com/media/723562_292a8975339340eda75369cda6ead61c~mv2.png/v1/fill/w_178,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Better-Day-Coaching-Logo.png"},
  {img:"https://d11n7da8rpqbjy.cloudfront.net/needlesandspoons/19309553_16201809291ysMain_Logo_Navy.webp"},
  {img:"https://images.squarespace-cdn.com/content/v1/56d891c3b09f9547596b1335/1463432568936-J45IMQ0LJDI7UTG3M9LB/leaf-logo.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_girl_scouts.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/south_dakota_ey.png"},
  {img:"https://patricewashington.com/wp-content/uploads/2023/01/logotitleb-pnk1.png"},
  
]}/>
   <Services/>
   <Projects header/>
   <RecentWorks/>
   {/* <Parallax/> */}
    {/* <Custom/> */}
   {/* <TwoImages/> */}
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    <Texter/>
    {/* <OurExpertise/> */}
    {/* <Gallery/> */}
<ReviewShow/>
{/* <Compatibility/> */}
   <Contact/>
    {/* <HorizontalParallax/> */}
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}









