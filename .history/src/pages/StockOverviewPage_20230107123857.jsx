import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="flex-col center">
      <AiOutlineStock className="" /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
