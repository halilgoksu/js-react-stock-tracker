import React from "react";
import { useNavigate } from "react-router-dom";

export const NoDataApi = () => {
 const  navigate=useNavigate();

  
  return (
    <div className="flex w-full h-full item-center justify-center text-center p-4 text-gray-500 ">
      <div className="flex-col  justify-center  items-center text-center p-4 mt-9 gap-3 w-2/3 ">
        <ul className="flex-col  h-fit w-full text-center items-center justify-center ">
          <li className="  ">Too Many Requests...</li>
          <li className=" ">
            API is temporarily unavailable due to the rate limit being exceeded.
          </li>
        </ul>
        <br />

        <button className="bg-white p-2 rounded-lg text-black hover:bg-orange-100"
        onClick={()=>{
          navigate('/home');

        }}
        >Main Page</button>

        <hr />
        <h6 className="inline font-mono  6 text-xs text-gray-900 ">@Goksu</h6>
      </div>
    </div>
  );
};
