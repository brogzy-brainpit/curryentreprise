"use client"
import React from 'react'
import { motion} from 'framer-motion'
import introImage from "../../public/images/key.svg"

const menuSlide={
    initial:{
       scale: 4,
        
    }, 
    enter:{
        scale:4,
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        scale:50,
        // transition:{duration:1.5, ease:[0.76, 0, 0.24, 1]},
        transition:{duration:0.8},

    },
}
function Preloader() {
    // const [index,setIndex]=useState(0)
    // const words=['hello','bonjour','مرحبًا','你好','नमस्ते', 'привет', 'welcome']
    // const positions= [{left:"54%",top:"60%"},{left:"60vw",top:"-5vh"}, {left:"4%",top:"5%"},{left:"90%",top:"50%"},{left:"90%",top:"3%"},{left:"40%",top:"80%"},{left:"60%",top:"5vh"},]
        // const images=[floating1,floating2,floating3,floating4,floating5,floating6,floating7,]
    // useEffect(()=>{
    //     if(index==words.length-1) return 
    //     console.log("running")
    //     setTimeout(() => {
    //         setIndex(index+1)
    //     }, index==0?1400:170);
    // },[index])
  return (
    <div className='bg-red-600 w-full h-full'>

    <motion.img  src={introImage.src} variants={menuSlide} initial="initial" exit="exit" className=' z-50  fixed w-[100vw] h-[100vh]'> 
   
   </motion.img>
    </div>
  )
}

export default Preloader