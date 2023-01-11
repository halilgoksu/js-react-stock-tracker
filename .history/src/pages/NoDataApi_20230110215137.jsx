import React from "react";
import { useNavigate } from "react-router-dom";
import {CreatedBy} from "../components/CreatedBy"


export const NoDataApi = () => {
 const  navigate=useNavigate();

  
  return (
    <div className="flex-col w-full h-full item-center justify-center text-center p-4 text-gray-400 ">
      <div className="flex-col  justify-center  items-center text-center p-4 mt-9">
        <ul className="flex-col  text-center items-center justify-center">
          <li>Oops!</li>
          <li className=" p-2 ">Too Many Requests...</li>
          <li className=" ">
             API is temporarily unavailable due to the rate limit being exceeded.
          </li>
        </ul>
         <br />
        <button className="bg-white p-2 rounded-lg text-black hover:bg-orange-100"
          onClick={()=>{
          navigate('/');}}
         >Main Page
        </button>
         <hr />
        <CreatedBy />
      </div>
    </div>
  );
};
