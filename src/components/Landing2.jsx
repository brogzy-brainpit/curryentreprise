import SlideUpText from '@/app/effects/SlideUpText'
import React from 'react'

function Landing2() {
  return (
    <div className='min-h-[70vh bg-brand-text-dark py-12'>

<div className='container mx-auto'>
    <div className='flex gap-4 items-center'>
      <img src='images/rotate.png' className='w-11 animate-spin'/>
    <p className='max-w-[250px] font-normal leading-1 text-brand-text text-[12px] uppercase'>
    a predictive, personalised health platform </p>
    </div>
  <div className='my-5 max-w-[900px]'>
    <SlideUpText margin='-130px' once={false} duration={0.60} delay={0.02} className="font-custom text-footer leading-footer text-brand-text  capitalize" 
   text={`wedding video editting @ it's best- for solo and agencies`}/>
  </div>
</div>

    </div>
  )
}

export default Landing2