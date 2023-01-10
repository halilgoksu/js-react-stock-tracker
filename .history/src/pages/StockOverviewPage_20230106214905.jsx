import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="items-center text-center justify-center ">
        <AiOutlineStock className=" text-lg items-center text-center justify-center" /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
