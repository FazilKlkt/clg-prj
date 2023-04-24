import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/images/logo.png';


const Sidebar = () => {
  return (

    <div>
      <div className="h-[60px] bg-black w-full left-0 text-white top-0 fixed">
        <div className="flex flex-row">
          <img className=" pt-3 pl-3 h-[50px] " src={logo} alt="Logo" />
          <div className="absolute h-[10px] w-[10px] bg-[#FF8585] top-[50%] left-[45%] rounded-full " ></div>
          <div className="absolute h-[10px] w-[10px] bg-[#B2FF8E] top-[50%] left-[50%] rounded-full " ></div>
          <div className="absolute h-[10px] w-[10px] bg-[#86EDF3] top-[50%] left-[55%] rounded-full " ></div>
          <div className="space-x-4 mt-5 absolute right-0 pr-5 text-xl   ">
            <Link to="/"> <button className="cursor-pointer shadow-2xl top-0 hover:outline-2 outline-offset-2">Logout</button></Link>
          </div>
        </div>
      </div>



      <div className='flex fixed justify-center items-center bg-[#E4E4E4]  w-[30%] top-[60px] h-screen  left-0'>
        <ul className=''>
          <div className='text-2xl  border-dotted mr-10 mb-4 rounded-md border-2  border-slate-600 bg-white font-livvic'>
            <li className='pr-20 pl-16 pt-4 pb-4'>
              <Link to="/Dashboard/Upload"> <button className=' w-[180px] h-[40px] left-[23px] '>Upload</button></Link>
            </li>
          </div>

          <div className='text-2xl  border-dotted mb-5 mr-10 border-spacing-x-3 rounded-md border-2  border-slate-600 bg-white font-livvic'>
            <li className='p-4'>
                <Link to="/Dashboard/Files"><button >Files</button></Link>
            </li>
          </div>

          <div className='p-0 text-2xl border-dotted mr-10 border-spacing-3 rounded-md border-2  border-slate-600 bg-white font-livvic'>
            <li className='p-4 pl-2'>
                <Link to="/Dashboard/Setting"> <button>Settings</button></Link>
            </li>
          </div>
        </ul>
      </div>
    </div>

  )
}
export default Sidebar