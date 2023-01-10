import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div className="flex-col text-center items-center justify-center">

      <div className="flex flex-col text-center items-center justify-center border-2 
      border-red-700">
        <AiOutlineStock 
        className="flex mt-3  border-2 text-7xl text-white bg-black"/> 
        <h1>Stocks Tracker</h1>

      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
