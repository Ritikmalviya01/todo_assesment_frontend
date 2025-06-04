import React from 'react'
import google from "../assets/google.png"
import fb from "../assets/fb.png"
import yt from "../assets/yt.png"
import pt from "../assets/pt.png"
import tw from "../assets/tw.png"


function LogoStrip() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-[50px] md:gap-[80px] lg:gap-[110px] w-full max-w-[1170px] mx-auto'>
        <img src={google} alt="" className='w-[100px] sm:w-[100px] md:w-[120px] lg:w-[134.87px] h-auto'/>
        <img src={fb} alt="" className='w-[100px] sm:w-[110px] md:w-[120px] lg:w-[134.87px] h-auto' />
        <img src={yt} alt=""  className='w-[100px] sm:w-[110px] md:w-[120px] lg:w-[134.87px] h-auto'/>
        <img src={pt} alt="" className='w-[100px] sm:w-[110px] md:w-[120px] lg:w-[134.87px] h-auto' />
        <img src={tw} alt="" className='w-[100px] sm:w-[110px] md:w-[120px] lg:w-[134.87px] h-auto' />
    </div>
  )
}

export default LogoStrip
