import React from "react";
import first from "../assets/1stperson.png"
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import LogoStrip from "./LogoStrip";
import Form from "./Form";
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import { useState } from "react";
import Join from '../components/Join'
import Footer from "./Footer";
import FormDataTable from '../components/FormDataTable'
import ThankYouPopUp from "./ThankYouPopUp";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const [submissions, setSubmissions] = useState([]);

    const handleFormSubmit = (data) => {
    setShowForm(false);
    setShowThankYou(true);
    setSubmissions((prev) => [
      ...prev,
      { ...data, timestamp: new Date().toLocaleString() },
    ]);
  };

  return (
   <>
    <Form
    visible={showForm}
    onClose={() => setShowForm(false)}
    onSubmit={handleFormSubmit}
  />
  
      <ThankYouPopUp visible={showThankYou} onClose={() => setShowThankYou(false)} />
        <div className={showForm || showThankYou ? "blur " : ""}>
    <section className=" w-full  bg-[#F7F7FB] text-[#170F49] py-[44px] items-center flex flex-col px-4 sm:px-6 md:px-10">
       
      <div className={showForm || showThankYou ? "blur-sm transition duration-300" : ""}>
      <div className=" mx-auto mb-16">
        <div className="text-center">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px]  font-bold  mb-4 ">Simplify Your Life with Our <br className="sm:block" /> Todo App</h1>
        <p className="text-[16px] sm:text-[18px] mb-6 ">
          Stay organized and boost your productivity with our intuitive todo website. <br className="sm:block " />
          Experience a modern approach to task management that fits your lifestyle.
        </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowForm(true)} className=" border text-[#FF3E54] border-[#FF3E54] hover:bg-[#FF3E54] hover:text-white  font-dm-sans text-[18px] py-2 px-6 rounded-[56px] cursor-pointer">
            Get started
          </button>
          
          <button className="border hover:bg-[#FF3E54] hover:text-white border-[#FF3E54] text-[#FF3E54] font-dm-sans text-[18px] py-2 px-6 rounded-[56px] cursor-pointer">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex gap-[16px] flex-col lg:flex-row  items-center  w-full max-w-[1170px] h-auto lg:h-[642.68px]   ">
       
        <div className=" bg-[#FF3E54] text-[#ffffff]  w-full lg:w-[774.51px] h-full  sm:p-10 md:p-[52.73px]  p-[52.73px] rounded-[26.37px] flex flex-col justify-between ">
    <div>
      <h1 className="text-[98.87px] sm:text-[72px] md:text-[98.87px] leading-[98.87px] font-normal tracking-[-0.02em]">
        Organize.<br />Achieve.<br />Relax.
      </h1>
      <p className=" text-[19.77px] sm:text-[19.77px]  sm:leading-[31.63px] leading-[31.63px] opacity-80">
        Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success
      </p>
    </div>

    <div className="flex gap-[13.18px] mt-4 ">
      <button className="bg-[#FF6D75] hover:bg-[#ffffff] hover:text-black  text-white px-6 py-3 rounded-[81.57px] font-medium cursor-pointer ">
        Get Started Today
      </button>
      <button className="bg-[#FF6D75] hover:bg-[#ffffff] hover:text-black  text-white px-6 py-3 rounded-[81.57px] font-medium cursor-pointer ">
        Discover Features
      </button>
    </div>
  </div>

       
        <div className="relative h-full sm:h-[500px] lg:h-full w-full lg:w-[379.01px] overflow-hidden rounded-[26.37px] ">
    <img src={first} alt="Person" className="w-full h-full object-cover" />


    <div className="absolute top-0 left-0 w-full h-full bg-[#FF3E54]/15  p-6p-4 sm:p-6 flex flex-col justify-between ">
      <div>
        <h2 className="text-[39.55px] font-bold  sm:text-[55px] md:text-[39.55px] text-white leading-tight">Your Tasks.<br />Our Tools.</h2>
      </div>
      <div className="flex justify-between text-2xl text-white ">
        <IoIosArrowBack className="cursor-pointer"/>

    <IoIosArrowForward  className="cursor-pointer"/>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <p className=" text-[19.77px] sm:text-[30px] leading-[23.72px] tracking-[-0.02em] text-black">Freddie Halvorson</p>
          <p className=" text-[13.18px] sm:text-[19px] leading-[15.82px] tracking-[-0.02em] text-black">Chief Productivity Enthusiast</p>
        </div>
        <button className=" text-black" >
            
<FaCirclePlay className="cursor-pointer text-4xl m:text-5xl  m-2"  />
        </button>
      </div>
    </div>
  </div>
      </div>

<div className="mt-9 w-full ">
<LogoStrip />
</div>
      
      </div>
    </section>
 
<Features  />
< Testimonial />
<Join />
<FormDataTable submissions={submissions || []} />
<Footer />
</div>
</>  
);
};

export default HeroSection;
