import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div className="flex-col text-center items-center justify-center  w-screen h-screen p-2">

      <div className="flex flex-col text-center items-center justify-center 
      bg-black text-white">
        <AiOutlineStock className="flex  border-2 text-7xl shadow-lg"/> 
        <h1 className="font-bold">Stocks Tracker</h1>
      </div>
      <AutoComplete className="flex z-20 h-" />
      <StockList className="flex z-0"/>
    </div>
  );
};
