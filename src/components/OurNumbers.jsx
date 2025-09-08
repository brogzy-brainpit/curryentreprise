import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import CountUp from 'react-countup';


function OurNumbers() {
  return (
    <div className=' px-4 w-full py-[10vh] breaker container mx-auto'>
<div className=' breaker-child flex flex-3 font-custom text-footer leading-[1] pb-6 text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
  My Numbers Do the Talking for Me
</div>

     <div className='breaker-child flex-1'>
       <div className='  breaker flex flex-col  w-full bged-400 justify-center items-center gap-0' >
<div className='breaker-chil flex w-full justify-betwee'>
  <div className='bg-green-30 p-2 border  border-b-0 border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col flex-1'>
 <h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={41} decimals={0} suffix="+" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Satisfied Clients</p>
</div>
<div className='bg-green-30 p-2 border border-b-0 border-l-0 border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col'>
<h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out '>
 <CountUp end={350} decimals={0} suffix="+" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>videos edited</p>
</div>
</div>


<div className='breaker-chil flex w-full justify-between'>
  <div className='bg-green-30 p-2  border-r-0 border border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col'>
 <h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={4.7} decimals={1} delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Star Rated</p>
</div>
<div className='bg-green-30 p-2 border border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col flex-1'>
<h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={90}  suffix="+" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Reviews</p>
</div>
</div>
      </div>

     </div>

    </div>
  )
}

export default OurNumbers