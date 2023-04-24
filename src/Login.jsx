import React from "react";
import Navbar from "./Navbar";
import Foot from "./Foot";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className="">
        <div className="font-l h-[850px] w-[1300px]  flex flex-col justify-center  items-center border-dashed  rounded-xl">
          <div className="bg-gray-200  px-32 py-20 rounded-md">
            <div className=" text-[34px]  font-bold mt-[20px]">Login</div>
            <div className="text-[18px]">
              <div className="font-bold flex flex-row gap-[90px] mt-[50px]">
                <label htmlFor="email">Email:</label>
                <input className="pl-5 bg-black rounded-sm text-gray-200" type="email" />
              </div>

              <div className="font-bold flex flex-row mt-[30px] gap-[13px] ">
                <label htmlFor="email ">Enter Password:</label>
                <input className="pl-5 rounded-sm bg-black text-gray-200 filter invert-100" type="password" />
              </div>
            </div>

            <div className="">
              <Link to="/Dashboard">
              <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-[140px] text-[18px] h-10 mt-[40px]">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Foot></Foot>
    </div>


  );
};

export default login;
