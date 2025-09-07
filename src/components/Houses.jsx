import React, { useRef, useState } from 'react'
import img1 from '../../public/images/1.jpg'
import img2 from '../../public/images/2.jpg'
import img5 from '../../public/images/5.jpg'
import img6 from '../../public/images/6.jpg'
import Image from 'next/image'
import {motion} from 'framer-motion'
import RoundedButton from '@/app/common/RoundedButton'
import MouseWrapper from '@/app/effects/hooks/MouseWrapper'


function Houses() {
      const cursor = useRef(null);
        const [modal, setModal] = useState({active: false, index: 0})
            const { active, index } = modal;
const scaleAnimation = {
          initial: {scale: 0, x:"-50%", y:"-50%"},
          enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
          closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
      }
  return (
    <div className='px-4 z-[1] w-full py-[40px] container mx-auto bg-brand-background dark:bg-brand-background-dark transition-all duration-500 ease-in-out'>
        <h1 className='text-brand-text dark:text-brand-text-dark ease-in-out transition-all duration-500 py-10 text-footer font-semibold text-center leading-[1] font-custom'>
          Large holiday houses for every occasion</h1>
       

      {/* section boxes */}
  {/* <MouseWrapper className={'hidden lg:block  mx-auto relative'} cursor={cursor} active={active} index={index} setModal={setModal} modal={modal}>
          <motion.div  className= 'font-custom2 uppercase text-para p-8 z-[9999] pointer-events-none text-neutral-800 bg-[#C9FD74] h-10 w-10 fixed top-0 rounded-full flex justify-center items-center' ref={cursor}  variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
            View
           </motion.div>
        </MouseWrapper> */}

<div className='flex  flex-col md:flex-row  w-full gap-4 flex-wra  '>
      <div className='rounded-xl cursor-pointer overflow-clip  flex relative w-full h-[480px] items-center justify-center flex-col '>
            <div className=' pointer-events-none z-[2] flex items-center justify-self-end justify-center flex-col  '>
                 <h4 className='font-custom-condensed text-2xl text-white'>luxury houses</h4>
                <h4  className=' py-2 font-custom text-4xl text-white'>luxury houses</h4>
                 <div className= " py-4 pointer-events-auto">
    <RoundedButton >
      <p className="font-normal text-para text-[#ffffff] hover:!text-neutral-900">
        learn more
      </p>
    </RoundedButton>
  </div>
            </div>
            <div className=" z-[1] absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700 ease-in-out pointer-events-none" />
           <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness:30 ,duration: 0.9, ease: "easeInOut" }} className='absolute h-full w-full'>
            <Image alt='real-estate-image' loading='lazy' width={400} height={480} className='object-cover h-full w-full' src={img6}/>
            </motion.div>
        </div>
        {/* second element */}
        <div className='rounded-xl cursor-pointer overflow-clip  flex relative w-full h-[480px] items-center justify-center flex-col '>
            <div className=' pointer-events-none z-[2] flex items-center justify-self-end justify-center flex-col  '>
                 <h4 className='font-custom-condensed text-2xl text-white'>luxury houses</h4>
                <h4  className=' py-2 font-custom text-4xl text-white'>luxury houses</h4>
                 <div className= " py-4 pointer-events-auto">
    <RoundedButton >
      <p className="font-normal text-para text-[#ffffff] hover:!text-neutral-900">
        learn more
      </p>
    </RoundedButton>
  </div>
            </div>
            <div className=" z-[1] absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700 ease-in-out pointer-events-none" />
           <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness:30 ,duration: 0.9, ease: "easeInOut" }} className='absolute h-full w-full'>
            <Image alt='real-estate-image' loading='lazy' width={400} height={480} className='object-cover h-full w-full' src={img2}/>
            </motion.div>
        </div>
        
         {/* second element */}
        <div className='rounded-xl cursor-pointer overflow-clip  flex relative w-full h-[480px] items-center justify-center flex-col '>
            <div className=' pointer-events-none z-[2] flex items-center justify-self-end justify-center flex-col  '>
                 <h4 className='font-custom-condensed text-2xl text-white'>luxury houses</h4>
                <h4  className=' py-2 font-custom text-4xl text-white'>luxury houses</h4>
                 <div className= " py-4 pointer-events-auto">
    <RoundedButton >
      <p className="font-normal text-para text-[#ffffff] hover:!text-neutral-900">
        learn more
      </p>
    </RoundedButton>
  </div>
            </div>
            <div className=" z-[1] absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700 ease-in-out pointer-events-none" />
           <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness:30 ,duration: 0.9, ease: "easeInOut" }} className='absolute h-full w-full'>
            <Image alt='real-estate-image' loading='lazy' width={400} height={480} className='object-cover h-full w-full' src={img5}/>
            </motion.div>
        </div>
</div>
        
        </div>
        
  )
}

export default Houses