import React, { useState } from 'react';
import second from "../assets/second.jpg"
import first from "../assets/1stperson.png"
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";


function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Using this website has made my tasks so much easier! I can't imagine my day without it.",
      name: "Sherri Cronin",
      position: "Project Manager, TechCorp",
      image: second
    },
    {
      quote: "This tool has completely revolutionized how I organize my work. The interface is intuitive and powerful.",
      name: "Michael Chen",
      position: "Software Developer, StartupXYZ",
      image: first
    },
    {
      quote: "I've tried many productivity apps, but this one stands out. It's simple yet comprehensive.",
      name: "Sarah Williams",
      position: "Marketing Director, CreativeAgency",
      image: second
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id='testimonial' className="bg-[#ffffff] py-20 px-4 md:px-20">
      <div className='max-w-[1140px] bg-[#ffffff] mx-auto py-1 md:py-2'>
 <div className='md:pb-0 pb-60 '>
    <h1 className='font-extrabold text-[32px] md:text-[48px]  leading-[57.6px] text-[#0E1F51]' >Customer Testimonials</h1>
    <p className='font-bold text-[16px] md:text-[18px] leading-[80px] text-[#0E1F51]' >  This tool has transformed my productivity and organization!</p>
 </div>

        
<div className="relative w-full md:w-[471px] p-6 border-red-500 border-0 md:border-l-13 md:border-t-13 md:border-b-13 mt-4 h-auto md:h-[590px]">

<div className="absolute top-0 right-0 w-3 h-6 hidden md:block bg-[#FF3E54]"></div>


 <div className="absolute bottom-0 right-0 w-3 h-6 hidden md:block bg-[#FF3E54]"></div>

         
          <div className="relative top-1/2 transform -translate-y-1/2  flex flex-col lg:flex-row w-full lg:w-[1085px] h-auto lg:h-[490px] p-4 md:p-[60px] gap-[30px] lg:gap-[60px] sm: ">
            
            <div className=" flex flex-col justify-center md:w-[557px] mt- md:mt-0 lg:w-[557px]">
              <p className="font-bold text-[18px] md:text-[28px] lg:text-[36px] leading-[1.4] mb-[10px] text-[#202020]">
                "{currentData.quote}"</p>


                <div className='flex items-center gap-17'>
                 <div className='flex items-center'>
                    <div className='relative w-[30px] h-[30px] bg-[#FF3E54]'></div>
                    <div className='absolute border-[1px] w-[60px] ml-3.5 '></div>
                 </div>

              <div className=" text-sm ">
                <strong>{currentData.name}</strong><br />
                {currentData.position}
              </div>
              </div>
              <div className=" justify-center gap-4 mt-8">
          <button onClick={prevTestimonial} className=" text-[#FF3E54] text-[40px] hover:bg-[#FF3E54] hover:text-white rounded-[30px]"><CiCircleChevLeft /></button>
          <button onClick={nextTestimonial} className=" text-[#FF3E54] text-[40px] hover:bg-[#FF3E54] hover:text-white rounded-[30px]"><CiCircleChevRight /></button>
        </div>
            </div>

            
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 relative">
<div className="relative w-[90%] md:w-[348px] p-6 border-[#FF3E54] border-0 md:border-r-13 md:border-t-13 md:border-b-13 h-[300px] md:h-[370px]"></div>
              <img
                src={currentData.image}
                alt={currentData.name}
                className=" absolute mr-6 rounded-lg w-[330px] h-[330px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
