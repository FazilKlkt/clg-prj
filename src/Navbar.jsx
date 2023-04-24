import React from "react";
import Logo from './components/Logo.png'

const Navbar = () => {
    return(
      
              <div className="h-[60px] bg-black w-full left-0 text-white top-0 fixed">
                <div className="flex flex-row">
                  <img className=" pl-8 h-[60px]  " src={Logo} alt="Logo" />
                  <div className=" space-x-4 mt-3 text-2xl">WAN Link</div>
                  <div className="absolute h-[10px] w-[10px] bg-[#FF8585] top-[50%] left-[45%] rounded-full " ></div>
                  <div className="absolute h-[10px] w-[10px] bg-[#B2FF8E] top-[50%] left-[50%] rounded-full " ></div>
                  <div className="absolute h-[10px] w-[10px] bg-[#86EDF3] top-[50%] left-[55%] rounded-full " ></div>
                  <div className="space-x-4 mt-5 absolute right-0 pr-5 text-xl   ">
                   <a href="/"> <button className="cursor-pointer shadow-2xl top-0 hover:outline-2 outline-offset-2">Home</button></a>
                  </div>
                </div>
              </div>
    )
}
export default Navbar