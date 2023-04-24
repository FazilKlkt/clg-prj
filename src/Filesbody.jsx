import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Foot from './Foot'

const Filesbody = () => {
    return (
        <div className="flex fixed justify-center items-center bg-[#E4E4E4] p-10 w-full top-[60px] h-screen left-[30%] ">
            <Navbar/>
            <Sidebar></Sidebar>
            <div className=" absolute  flex flex-col justify-between  mt-4   bg-white w-[69%]   top-1 left-0 h-[80%] border-dotted  rounded-lg border-2 border-slate-500  ">
                <div >
                    {/* apply loop */}
                    <div className=" h-[70px] w-[95%] ml-5 mr-5 right-10 bg-green-500 border-2 mt-2 rounded-lg"></div>
                </div>
            </div>
            <Foot></Foot>
        </div>
    )
}
export default Filesbody