import React from 'react'
import herofood from '../assets/bon-vivant-qom5MPOER-I-unsplash 1.png'
import gplay from '../assets/Google Play Badge.png'
import appstore from '../assets/App Store Badge.png'



const Hero = () => {
  return (
    <section class="mt-16 "> 

            <article className="sm:px-16 px-4 sm:flex items-center justify-between  ">

                <div className="sm:w-1/2 ">

                    <h2 className='w-full sm:text-3xl sm:text-left md:text-[32px] lg:text-4xl xl:text-5xl font-medium text-2xl text-center text-white mb-5 sm:leading-tight '>Order <span className='text-[#FBDDBB] '>food</span> anytime, anywhere</h2>

                    <p className='text-sm text-white text-center font-light sm:text-left sm:w-[80%] md:w-[100%] lg:w-[100%] xl:w-[80%] '>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>

                    <ul className='flex mt-4 items-center justify-center space-x-3 sm:justify-start'>
                        <li className='w-16 sm:w-28'><img src={gplay} alt="" /></li>
                        
                        <li className='w-16 sm:w-28'><img src={appstore} alt="" /></li>
                    </ul>
                </div>
                <div  class= "mr-24 md:mr-1 xl:mr-20 ">
                    <img src={herofood} className='hidden sm:block w-[400px] h-[400px] md:w-[260px] md:h-[270px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ' alt="" />
                </div>
            </article>
        </section>
  )
}

export default Hero
