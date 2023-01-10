import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="items-center text-center justify-center w-full"><AiOutlineStock /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
