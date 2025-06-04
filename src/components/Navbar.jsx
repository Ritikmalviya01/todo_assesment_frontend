import React, {useState} from "react";
import Logo from '../assets/logo.png'
import { MdOutlineLegendToggle } from "react-icons/md";



const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="flex items-center justify-between px-6 sm:px-6 lg:px-12 py-4 bg-white  w-full h-[100px] z-10 top-0">
      <div className=" ml-4 sm:ml-[160px] w-[120px] sm:  h-[60px]  flex items-center ">
        <img src={Logo} alt="" className="" />
      </div>
<div className="flex items-center gap-[16px] mr-[120px] ml-12 ">
      <ul className=" hidden md:flex md: gap-4 md:gap-8 text-gray-700 font-medium mr-4 sm:mr-[120px]">
        <li><a href="/" >About</a></li>
        <li><a href="#features" >Features</a></li>
        <li><a href="#testimonial" >More Options</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
        

        <div className="flex items-center gap-2 sm:gap-[16px] mr-4 sm:mr-[120px]">
  
        <button className="bg-white cursor-pointer text-[#FF3E54] w-[100px] sm:w-[130px] h-[36px] sm:h-[44px] rounded-[5px] border border-[#FF3E54]">
          Login
        </button>
        <button className="bg-[#FF3E54] cursor-pointer text-white w-[100px] sm:w-[130px] h-[36px] sm:h-[44px] rounded-[5px] border border-[]">
          Sign Up
        </button>

       
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center gap-[6px] ml-2"
          aria-label="Toggle menu"
        >
          <MdOutlineLegendToggle className="text-[20px]" />
        </button>
      </div>
      </div>

       {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md md:hidden z-20">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <li><a href="/" className="" onClick={() => setIsOpen(false)}>About </a></li>
            <li><a href="#features" className="" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#testimonials" className="" onClick={() => setIsOpen(false)}>More Option</a></li>
            <li><a href="#contact" className="" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
