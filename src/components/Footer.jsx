import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";

function Footer() {

  

  return (
    <section id='contact' className="w-full mt-20 px-4 sm:px-6 lg:px-[52px] pt-[60px] pb-[65px]  bg-white">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[40px] mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-[170px] h-[100px] flex items-center justify-center">
                <img src={logo} alt="Logo" className="object-contain max-w-full max-h-full" />
              </div>
            </div>

            <p className="text-[#000000] font-normal text-[13px] leading-[150%] mb-4 tracking-normal">
              Subscribe to our newsletter for the latest features and updates <br /> delivered to you.
            </p>

            <form className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email here"
                
                className="flex-1 p-[9.75px] border-[0.81px] border-[#000000] text-[13px] w-full"
              />
              <button
                type="submit"
                className="bg-[#FF3E54] text-white px-[19.5px] py-[9.75px] rounded-[6px] "
              >
                Join
              </button>
            </form>

            <p className="text-[9.75px] text-[#000000]">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-semibold text-[#000000] mb-4 text-[13px]">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#000000] text-[11.38px]">Home Page</a></li>
                <li><a href="#" className="text-[#000000] text-[11.38px]">About Us</a></li>
                <li><a href="#" className="text-[#000000] text-[11.38px]">Contact Us</a></li>
                <li><a href="#" className="text-[#000000] text-[11.38px]">Blog Posts</a></li>
                <li><a href="#" className="text-[#000000] text-[11.38px]">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#000000] mb-4 text-[13px]">Resources</h3>
              <ul className="space-y-2">
                                <li><a href="#" className="text-[#000000] text-[11.38px]">Help Center</a></li>

                <li><a href="#" className="text-[#000000] text-[11.38px]">User Guide</a></li>
                <li><a href="#" className="text-[#000000] text-[11.38px]">Community Forum</a></li>
                                <li><a href="#" className="text-[#000000] text-[11.38px]">Feedback</a></li>

                <li><a href="#" className="text-[#000000] text-[11.38px]">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#000000] mb-4 text-[13px]">Connect with us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TiSocialFacebook className='text-[#FF3E54] text-[25px]' />
                  <a href="#" className=" text-[#000000] text-[11.38px]">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <SlSocialInstagram className='text-[#FF3E54] text-[25px]' />
                  <a href="#" className="text-[#000000] text-[11.38px]">Instagram</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className='text-[#FF3E54] text-[25px]'>X</span>
                  <a href="#" className="text-[#000000] text-[11.38px]">X</a>
                </li>
                <li className="flex items-center gap-2">
                  <SlSocialLinkedin className='text-[#FF3E54] text-[25px]' />
                  <a href="#" className="text-[#000000] text-[11.38px]">LinkedIn</a>
                </li>
                <li className="flex items-center gap-2">
                  <SlSocialYoutube className='text-[#FF3E54] text-[25px]' />
                  <a href="#" className="text-[#000000] text-[11.38px]">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#000000]  pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center">
            <p className="text-[11.38px] text-[#000000]">© 2024 doList team. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="#" className="text-[#000000] ">Privacy Policy</a>
              <a href="#" className="text-[#000000] ">Terms of Service</a>
              <a href="#" className="text-[#000000] ">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
