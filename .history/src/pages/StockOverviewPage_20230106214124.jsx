import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {FcStatistics}from "react-icons/fc"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center items-center tex"><FcStatistics /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
