import React from 'react';
import phone from "../assets/phone.jpg";

function Join() {
  return (
    <section className="w-full max-w-[1155px] h-auto mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-[16px]">
        <div className="w-full lg:w-[585px]">
          <img
            src={phone}
            alt="werfg"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-[32px] text-center lg:text-left mt-6 lg:mt-0 px-2">
          <h1 className="font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2]">
            Start Organizing Your Life Today
          </h1>
          <p className="font-normal text-[16px] sm:text-[18px] leading-[1.5] tracking-normal">
            Join us now and transform your productivity with our intuitive to-do list platform!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-[13.18px] mt-4">
            <button className="border-[1px] border-[#FF3E54] text-black px-6 py-3 font-medium hover:bg-[#FF3E54] hover:text-white cursor-pointer">
              Sign Up
            </button>
            <button className="border-[1px] border-[#FF3E54] text-black px-6 py-3 hover:bg-[#FF3E54] hover:text-white font-medium cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
