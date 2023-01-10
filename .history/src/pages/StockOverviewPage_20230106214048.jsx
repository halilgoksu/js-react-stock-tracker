import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {FcStatistics}from "react"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center">text </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
