import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Foot from './Foot'


const Setbody = () => {
    return (
        <div className="flex fixed justify-center items-center bg-[#E4E4E4] p-10 w-full top-[60px] h-screen left-[30%] ">
            <Navbar/>
            <Sidebar></Sidebar>
            <div className=" absolute  flex flex-col justify-between  mt-4   bg-white w-[69%]   top-1 left-0 h-[80%] border-dotted  rounded-lg border-2 border-slate-500  ">
                <div className="absolute flex  justify-center items-center top-[40%] left-[30%]">
                    <label className="justify-center text-lg">User name :</label>
                    <input type="text" id="Username" placeholder="Your Username" required className="bg-gray-200 text-2xl"></input>
                    <div className="absolute flex justify-center top-[140%] " >
                    <label className="justify-center text-lg">Password :</label>
                    <input type="text" id="Username" placeholder="Password" required className="bg-gray-200 text-2xl"></input>
                    </div>
                </div>

                <div className="absolute bg-[#D9D9D9] p-3 text-2xl justify-center top-[55%] left-[35%]">
                    <button >Change Password</button>
                </div>

            </div>
            <Foot></Foot>
        </div>
    )
}
export default Setbody
