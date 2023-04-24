import React from "react";
import { Link } from "react-router-dom";
import Foot from "./Foot";


import women from './assets/icons/women.svg';
import storage from "./assets/icons/cloud.svg";
import women2 from "./assets/icons/women2.svg";
import logo from './assets/images/logo.png';


const Hero = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-[70px] bg-black w-full text-white top-0 left-0 fixed">
        <div className="flex flex-row ">
          <img className="pt-3 pl-3 h-[50px]" src={logo} alt="logo" />
          <div className="absolute h-[10px] w-[10px] bg-[#FF8585] top-[50%] left-[45%] rounded-full " ></div>
          <div className="absolute h-[10px] w-[10px] bg-[#B2FF8E] top-[50%] left-[50%] rounded-full " ></div>
          <div className="absolute h-[10px] w-[10px] bg-[#86EDF3] top-[50%] left-[55%] rounded-full " ></div>
          <div className="space-x-10 fixed right-8 text-xl top-6">
            <Link to="/Signup"><button>Sign-up</button></Link>
            <Link to="/Login"><button>Login</button></Link>
          </div>
        </div>
      </div>



      <div className="w-full">
        <div>
          <div className="flex h-auto bg-white relative  shadow-2xl  rounded-2xl border-2  top-20 border-gray-500  mt-10 w-auto ">
            <div className="w-[83rem] h-48">
              <div className="flex space-x-72">
                <div className="text-black border-transparent ml-[10rem] ">
                  <img className="h-24 " src={women2} />
                  <p className="text-xl">STORE FILE</p>
                </div>
                <div className="border-transparent  h-8">
                  <img className="h-24" src={women} />
                  <p className="text-xl">SHARE FILE</p>
                </div>
                <div>
                  <img className="h-24" src={storage} />
                  <p className="text-xl">ACCESS FILE</p>
                </div>
              </div>
              <div className="bg-black h-[3rem] w-auto rounded-br-xl rounded-bl-xl text-white relative top-[1.3rem] ">
                <p className="text-l font-light text-center p-2"> <span className="text-red-400">Create </span>  and <span className="text-green-200">Share</span> your work online and <span className="text-blue-300">Access</span> your document from anywhere</p>
              </div>
            </div>
          </div>

          <div className="flex relative top-40 justify-center items-center">
            <div className="flex justify-center items-center bg-white  h-[20rem] w-[40rem] rounded-l border-2  border-gray-500 ">
              <p className=" py-[65px] pr-2 text-xl font-bold">
                WE BELIEVE IN{" "}
              </p>
              <div className="bg-black my-[13px] ml-10 h-32 w-[5px] ">

              </div>
              <div className="pl-10  py-6 text-l space-y-4">
                <p>keeping it minimal</p>
                <p>keeping it simple</p>
                <p>keeping it practical</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Hero;
