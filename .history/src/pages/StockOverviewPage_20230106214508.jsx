import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/fc"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="items-center text-center justify-center"><FcStatistics /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
