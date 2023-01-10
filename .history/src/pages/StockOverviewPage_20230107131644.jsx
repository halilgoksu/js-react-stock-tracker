import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div className="flex-col text-center items-center justify-center">

      <div className="flex-col text-center items-center justify-center">
        <AiOutlineStock 
        className="flex mt-3 text-8xl border-2 "/> 
        <h2>Stocks Tracker</h2>

      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
