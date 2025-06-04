import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";
import { PiSlideshowBold } from "react-icons/pi";
import { IoNavigateOutline } from "react-icons/io5";

const Features = () => {
  const features = [
    {
      id: '01',
      icon: <PiSlideshowBold className="w-8 h-8" />,
      title: 'User-Friendly Interface',
      description: 'Our platform offers seamless task management to boost your efficiency.'
    },
    {
      id: '02',
      icon: <IoNavigateOutline className="w-8 h-8" />,
      title: 'Collaborate & Share Effortlessly',
      description: 'Invite team members to work together and achieve your goals faster.'
    },
    {
      id: '03',
      icon: <FiUserPlus className="w-8 h-8" />,
      title: 'Effortless Collaboration',
      description: 'Simplify project coordination by sharing tasks and collaborating with your team.'
    },
    {
      id: '04',
      icon: <SlBookOpen className="w-8 h-8" />,
      title: 'Seamless Access',
      description: 'Your information and content are protected with advanced security measures and reliable backup systems.'
    }
  ];

  return (
    <section className="bg-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl lg:text-5xl font-bold text-[32px] sm:text-[40px] leading-[48px] text-[#0E1F51] mb-4">
            Transform Your Productivity with Our
            <br />
            Innovative To-Do List Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
          {features.map((feature, index) => (
            <div key={index} className="relative group w-full">
              <div className="bg-[#F7F7F7] rounded-[10px] p-8 h-[334px]">
                <div className="absolute top-6 right-10 font-Raleway font-extrabold w-[58px] h-[50px]
                  text-[#0E1F51] text-[48px] leading-[50px] opacity-10">
                  {feature.id}
                </div>

                <div className="mb-6 w-[50px] h-[49.67px] flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-red-500">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-[#0E1F51] font-extrabold text-[18px] leading-[20px] mb-2 ">
                  {feature.title}
                </h3>

                <div className="flex  gap-1 mb-4">
                  <div className="w-16 h-1.5 bg-[#FF3E54] rounded-full"></div>
                  <div className="w-4 h-1.5 bg-[#FF3E54] rounded-full"></div>
                </div>

                <p className="text-[#000000] text-[16px] leading-[26px] ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
