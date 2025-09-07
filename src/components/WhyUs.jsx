import InfiniteScrollX from '@/app/effects/InfiniteScrollX'
import React from 'react'

function WhyUs() {
  return (
    <div className='py-[90px]'>
<InfiniteScrollX text={'business*coaching*partner*'} className={"animate-color-fad text-brand-text dark:text-brand-secondary transition-colors duration-500 ease-in-out text-[50px] md:text-[120px] font-custom uppercase font-bold "}/>
<div className='px-4 flex breaker  container'>
    <div className='flex gap-4 flex-col breaker-child py-8'>
       <h2 className='text-footer leading-[1] font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Why choose us for real estate deals?</h2>
       <p className='text-para font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos esse sequi, velit delectus doloremque, ipsa excepturi beatae ullam, nisi assumenda consectetur expedita accusamus. Consectetur a hic, sunt illum dolorem voluptates vel pariatur facilis quia?
      </p>
    </div>
    <div className=" relative flex breaker-child ">
 <div className="absolute inset-0 bg-[url('/images/whangaehu.png')] bg-cover bg-center opacity-30"></div>

<div className=" grid gap-y-10 sm:gap-y-14 grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
  {/* Block 1 */}
  <div className=" p-2 rounded-md bg-red-00/50 backdrop-blur-sm">
    <div className="lg:max-w-[434px]">
      <div className="icon mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <defs>
            <clipPath id="clip-path-1">
              <rect width="18" height="18" fill="none" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-path-1)">
            <path d="M15,17a1,1,0,0,1-1-1V7A5,5,0,0,0,4,7v9a1,1,0,0,1-2,0V7A7,7,0,0,1,16,7v9A1,1,0,0,1,15,17Z" />
            <path d="M16,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H16a1,1,0,0,1,1,1A1,1,0,0,1,16,1Z" transform="translate(1 17)" />
            <path d="M8,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H8A1,1,0,0,1,9,0,1,1,0,0,1,8,1Z" transform="translate(4 9)" />
            <path d="M0,16a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V15A1,1,0,0,1,0,16Z" transform="translate(9 2)" />
          </g>
        </svg>
      </div>
      <h4 className="font-custom text-para text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out  h6 mb-4">Hand-picked properties</h4>
      <div className="text-sm">
        <p className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-normal text-[14px]'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quas accusamus incidunt maxime et autem eius, eaque ex reiciendis?
        </p>
      </div>
    </div>
  </div>

  {/* Block 2 */}
  <div  className=" p-2 rounded-md bg-red-00/50 backdrop-blur-sm">
    <div className="lg:max-w-[434px]">
      <div className="icon mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <defs>
            <clipPath id="clip-path-2">
              <rect width="18" height="18" fill="none" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-path-2)">
            <path d="M2-1H14a3,3,0,0,1,3,3V12a3,3,0,0,1-3,3H2a3,3,0,0,1-3-3V2A3,3,0,0,1,2-1ZM14,13a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V12a1,1,0,0,0,1,1Z" transform="translate(1 3)" />
            <path d="M0,5A1,1,0,0,1-1,4V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V4A1,1,0,0,1,0,5Z" transform="translate(5 1)" />
            <path d="M0,5A1,1,0,0,1-1,4V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V4A1,1,0,0,1,0,5Z" transform="translate(13 1)" />
            <path d="M11,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H11a1,1,0,0,1,1,1A1,1,0,0,1,11,1Z" transform="translate(5 8)" />
          </g>
        </svg>
      </div>
      <h4 className="font-custom text-para text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out  h6 mb-4">Convenient booking</h4>
      <div className="text-sm">
       <p className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-normal text-[14px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt officia quidem eligendi, quas quam iusto itaque delectus laborum libero necessitatibus? Quasi repellendus temporibus dolorem!
        </p>
      </div>
    </div>
  </div>

  {/* Block 3 */}
  <div className=" p-2 rounded-md bg-red-00/50 backdrop-blur-sm">
    <div className="lg:max-w-[434px]">
      <div className="icon mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.341" viewBox="0 0 18 17.341">
          <defs>
            <clipPath id="clip-path-3">
              <rect width="18" height="17.341" fill="none" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-path-3)">
            <path d="M9,0a2.239,2.239,0,0,1,2.059,1.325l1.4,3.076a.219.219,0,0,0,.174.125l3.357.383a2.263,2.263,0,0,1,1.274,3.916l-2.494,2.284a.219.219,0,0,0-.065.2l.674,3.313a2.246,2.246,0,0,1-.459,1.877,2.3,2.3,0,0,1-1.759.84,2.267,2.267,0,0,1-1.113-.3L9.106,15.379a.219.219,0,0,0-.213,0L5.952,17.044a2.269,2.269,0,0,1-1.114.3,2.3,2.3,0,0,1-1.759-.84,2.246,2.246,0,0,1-.459-1.877l.674-3.313a.215.215,0,0,0-.066-.2L.735,8.825A2.263,2.263,0,0,1,2.008,4.908l3.358-.383A.219.219,0,0,0,5.539,4.4l1.4-3.076A2.239,2.239,0,0,1,9,0Zm4.162,15.341a.281.281,0,0,0,.21-.105.24.24,0,0,0,.048-.213l-.674-3.313a2.231,2.231,0,0,1,.673-2.074l2.495-2.285a.263.263,0,0,0-.148-.455l-3.359-.383A2.231,2.231,0,0,1,10.641,5.23l-1.4-3.076a.262.262,0,0,0-.478,0L7.359,5.23A2.23,2.23,0,0,1,5.595,6.512L2.234,6.9a.263.263,0,0,0-.148.455L4.579,9.634a2.229,2.229,0,0,1,.674,2.076l-.674,3.313a.24.24,0,0,0,.048.213.281.281,0,0,0,.21.105.26.26,0,0,0,.129-.037l2.942-1.665a2.216,2.216,0,0,1,2.182,0L13.033,15.3A.258.258,0,0,0,13.162,15.341Z" />
            <path d="M9,11.79a3.112,3.112,0,0,1-2.207-.913A1,1,0,0,1,8.207,9.463a1.123,1.123,0,0,0,1.586,0,1,1,0,1,1,1.414,1.414A3.112,3.112,0,0,1,9,11.79Z" />
          </g>
        </svg>
      </div>
      <h4 className="font-custom text-para text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out  h6 mb-4">Trusted hosts</h4>
      <div className="text-sm">
       <p className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-normal text-[14px]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi maxime iusto id ratione sunt. Molestias voluptatibus veniam perspiciatis earum consectetur dolorum iusto.
        </p>
      </div>
    </div>
  </div>

  {/* Block 4 */}
  <div className=" p-2 rounded-md bg-red-00/50 backdrop-blur-sm">
    <div className="lg:max-w-[434px]">
      <div className="icon mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <defs>
            <clipPath id="clip-path-4">
              <rect width="18" height="18" fill="none" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-path-4)">
            <path d="M1,14a1,1,0,0,1-.556-1.832c.4-.264.795-.555,1.18-.836C3.2,10.185,4.82,9,7,9H8.5a2.5,2.5,0,0,1,0,5,1,1,0,0,1,0-2,.5.5,0,0,0,0-1H7c-1.528,0-2.764.9-4.2,1.947-.4.294-.818.6-1.25.885A1,1,0,0,1,1,14Z" />
            <path d="M1.5-1A2.5,2.5,0,1,1-1,1.5,2.5,2.5,0,0,1,1.5-1Zm0,3A.5.5,0,1,0,1,1.5.5.5,0,0,0,1.5,2Z" transform="translate(6 1)" />
            <path d="M2.5-1A3.5,3.5,0,1,1-1,2.5,3.5,3.5,0,0,1,2.5-1Zm0,5A1.5,1.5,0,1,0,1,2.5,1.5,1.5,0,0,0,2.5,4Z" transform="translate(11 4)" />
            <path d="M8,18H1a1,1,0,0,1,0-2H8a13.882,13.882,0,0,0,7.663-1.894.613.613,0,0,0,.305-.739.6.6,0,0,0-.32-.357A.616.616,0,0,0,15.156,13L15.14,13l-.621.237A13.393,13.393,0,0,1,9.106,14H8a1,1,0,0,1,0-2H9.107a11.531,11.531,0,0,0,4.7-.627l.613-.234a2.609,2.609,0,0,1,2.138,4.756A15.839,15.839,0,0,1,8,18Z" />
          </g>
        </svg>
      </div>
      <h4 className="font-custom text-para text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out  h6 mb-4">Pay less</h4>
      <div className="text-sm">
        <p className='text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-normal text-[14px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum ad illo tempora illum totam alias. Autem, quas voluptatum velit sequi omnis voluptatem. </p>
      </div>
    </div>
  </div>
</div>


    </div>
    </div>
       

    </div>
  )
}

export default WhyUs