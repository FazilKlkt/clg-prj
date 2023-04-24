import React from "react";
import Drag from './components/Drag.png';
import Navbar from "./Navbar";
import Sidebar from './Sidebar'
import Foot from "./Foot";

const Ubody = () => {
    return (
        <div className="flex fixed justify-center items-center bg-[#E4E4E4] p-10 w-full top-[60px] h-screen left-[30%] ">
            <Navbar/>
            <Sidebar></Sidebar>
            <div className=" absolute  flex flex-col justify-between  mt-4   bg-white w-[69%]   top-1 left-0 h-[80%] border-dotted  rounded-lg border-2 border-slate-500  ">
                <div className="absolute flex flex-col justify-between mt-50 bg-gradient-to-r from-yellow-500 to-blue-500 left-0 w-full top-[50%]  h-2"></div>
                <div className=" absolute flex flex-col justify-between  mt-3   bg-[#FF8585]  left-5 right-5 h-[35%] border-dotted rounded-lg  ">
                    <img src={Drag} className="absolute w-[285px] h-[195px] left-[15%] right-[131px]" ></img>
                    <div className=" absolute text-3xl left-[50%] top-[40%] text-slate-100 ">Drag and Drop file here</div>
                </div>
                <div className=" absolute flex flex-col justify-between  mt-4   bg-[#FF8585] w-[40%]   top-[35%] left-[30%] h-[10%]   rounded-lg ">
                    <div className="absolute text-3xl left-[15%] top-[10%] text-slate-100 ">or Click to Select File</div>
                </div>
            </div>

            {/*File protection code*/}
            <div className="absolute text-3xl text-center left-40 top-[53%] ">File protection type</div>
            <div className="absolute text-3xl  left-40 top-[60%]">
                <input type={"radio"} name="file_protect" className="absolute-none default:ring-1 m-3 indeterminate:checked:bg-blue-600" ></input>
                <label>None</label>
            </div>
            <div className="absolute text-3xl  left-40 top-[65%]">
                <input type={"radio"} name="file_protect" className="absolute-none default:ring-1 m-3 indeterminate:checked:bg-blue-600" ></input>
                <label>QR Code</label>
            </div>
            <div className="absolute text-3xl  left-40 top-[70%]">
                <input type={"radio"} name="file_protect" className="absolute-none default:ring-1 m-3 indeterminate:checked:bg-blue-600" ></input>
                <label>Password</label>
            </div>
            {/* <div className="absolute text-3xl  left-40 top-[75%]">
                <input type={"radio"} name="file_protect" className="absolute-none default:ring-1 m-3 indeterminate:checked:bg-blue-600" ></input>
                <label>Time-Limit</label>
            </div> */}
            <button type="submit" className=" absolute flex flex-col justify-between items-center mt-4  text-3xl bg-[#FF8585] w-[20%]   top-[69%] left-[30%] h-[10%] text-white p-4 rounded-lg ">Upload</button>
            <Foot></Foot>
        </div>
    )
}
export default Ubody;