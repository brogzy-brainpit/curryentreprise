'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'

function Intro() {
     useEffect(() => {
      Aos.init({
          duration: 300, // Animation duration
          easing: 'ease-in-out-back', // Animation easing
  
      });
    }, []);
  return (
    <div className="px-4 relative py-[30px] bg-[url('https://cdn.prod.website-files.com/6422913f262cf023185f54de/642d203c4b2a5a881dbe8fdd_image-p-500.webp')] bg-cover bg-center">
        <div className='w-full h-full absolute top-0 left-0 bg-black/80'>

        </div>
<div className='flex breaker  container'>
    <div className='fle breaker-child py-8'>
       <h2 data-aos={"fade-up"} data-aos-delay="0" data-aos-duration={1000}  className='text-footer leading-[1] font-custom text-brand-text-dark transition-all duration-500 ease-in-out'>
I can help
 you in different situations
        </h2>
      
    </div>
     <div className='fle breaker-child py-8'>
       <p className='md:w-[80%] w-full text-para font-normal text-brand-text-dark transition-all duration-500 ease-in-out'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos esse sequi, velit delectus doloremque, ipsa excepturi beatae ullam, nisi assumenda consectetur expedita accusamus. Consectetur a hic, sunt illum dolorem voluptates vel pariatur facilis quia?
      </p>
    </div>
  
    </div>
       

    </div>
  )
}

export default Intro