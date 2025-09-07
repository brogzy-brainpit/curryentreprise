import React from 'react'
import RoundedButton from "../app/common/RoundedButton"
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
function CustomBtn({title,href,className}) {
  return (
     <Link href={href} className ={` ${className} cursor-pointer bg-brand-text-dark p-[4px] min-w-[150px] max-w-fit z-[10] flex justify-between items-center rounded-full`}>
 <p className='text-brand-text  mx-2 font-normal text-[14px] capitalize font-bold'>{title}</p>
   <RoundedButton>
 <p className='text-brand-text-dark -rotat-45'>
  <ArrowRight className={`h-5 w-5 inline-flex `}/> 
</p>
   </RoundedButton>

     </Link>
  )
}

export default CustomBtn