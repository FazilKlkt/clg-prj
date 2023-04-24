import React from "react";
const Foot = () =>
{
     return(
               <div className="bg-black h-[100px] fixed top-[94%] left-0 w-screen text-white">
                    <div className=" text-[20px] p-4 " style={{display:"flex",justifyContent:"center"}} >
                         <p>&copy;2023 <span className="text-blue-500">Wanlink</span>  | All rights reserved</p>
                    </div>
               </div>
     );
};
export default Foot;