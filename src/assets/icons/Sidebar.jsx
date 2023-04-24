import React from "react"; 

const Sidebar = () => {
    return ( 
        
              <div>
    <div className='flex fixed justify-center items-center bg-[#E4E4E4]  w-[30%] top-[60px] h-screen  left-0'>
  <ul className=''>
    <div className='text-2xl  border-dotted mr-10 mb-4 rounded-md border-2  border-slate-600 bg-white font-livvic'>
    <li className='pr-20 pl-16 pt-4 pb-4'>
     <button className=' w-[180px] h-[40px] left-[23px] '>Upload</button>
    </li>
    </div>
    <div className='text-2xl  border-dotted mb-5 mr-10 border-spacing-x-3 rounded-md border-2  border-slate-600 bg-white font-livvic'>
    <li className='p-4'>
      <a href='/'>
      <button >Files</button>
      </a>
    </li>
    </div>
    <div className='p-0 text-2xl border-dotted mr-10 border-spacing-3 rounded-md border-2  border-slate-600 bg-white font-livvic'>
    <li className='p-4 pl-2'>
      <a href='/'>
      <button>Settings</button>
      </a>
    </li>
    </div>
  </ul>
  </div>
    </div>
    
    )
}
export default Sidebar