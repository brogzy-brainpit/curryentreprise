import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'

function Landing2() {
  return (
    <section className='min-h-[70vh   py-12'>
<div className='w-full h-full container mx-auto breaker'>

<div className=' breaker-child py-8'>
    <div className='flex gap-4 items-center'>
      <img src='images/rotate.png' className='w-11 animate-spin'/>
    <p className='max-w-[250px] font-normal leading-1 text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out text-[12px] uppercase'>
    <strong>Curry Enterprise</strong>- wedding video editting at it's best </p>
    </div>
  <div className='mt-5 max-w-[900px]'>
    <SlideUpText  margin='-130px' once={true} duration={0.50} delay={0.04} className="font-custom text-footer leading-footer text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out  capitalize" 
   text={`Welcome to Curry Enterprise`}/>
  </div>
</div>

 <div className='fle breaker-child items-center flex bg-red400'>
       {/* <p className='text-para font-normal text-brand-text  transition-all duration-500 ease-in-out'>
         Curry Enterprise is a premier video and photo editing agency, boasting a talented team of creative editors. We specialize in crafting exceptional edits for our cherished brides and grooms, ensuring their memories of the best day of thier lives are preserved forever.      
               </p> */}
<SlideUpText margin='-130px' once={true} duration={0.40} delay={0.02} gap='4px' className='text-para leading-[16px] font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'
   text={`Curry Enterprise is a premier video and photo editing agency, boasting a talented team of creative editors. We specialize in crafting exceptional edits for our cherished brides and grooms, ensuring their memories of the best day of thier lives are preserved forever.      
`}/>
    </div>
</div>

    </section>
  )
}

export default Landing2