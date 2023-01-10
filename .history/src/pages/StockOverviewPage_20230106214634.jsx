import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import {AiOutlineStock}from "react-icons/ai"
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="display-flex  items-center text-center justify-center "><AiOutlineStock /> </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
