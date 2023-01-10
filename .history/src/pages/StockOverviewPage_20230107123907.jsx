import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="flex-col text-center items-center jus">
      <AiOutlineStock className="" /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
