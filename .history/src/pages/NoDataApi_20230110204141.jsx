import React, { useEffect } from "react";

export const NoDataApi = () => {
  return (
    <div className="flex w-full h-full item-center justify-center text-center p-4 ">
      <div className="flex-col  justify-center  items-center text-center p-4 mt-9 gap-3 w-2/3  bg-red-100 ">
        <ul className="flex-col  h-fit w-full text-center items-center justify-center ">
          <li className="  border-2 border-blue-400">Too Many Requests...</li>
          <li className=" border-2 border-blue-400">
            API is temporarily unavailable due to the rate limit being exceeded.
          </li>
        </ul>
        <br />

        <button className="btn btn-dark inline text-xs border-2 ">
          Main Page
        </button>
        <hr />
        <h6 className="inline font-mono border-2 6 text-xs text-gray-900 ">@Goksu</h6>
      </div>
    </div>
  );
};
