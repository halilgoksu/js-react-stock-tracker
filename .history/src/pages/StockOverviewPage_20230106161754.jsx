import  {AutoComplete as AutoComplete}  from "../components/AutoComplete";
import { StockList } from "../components/StockList";
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center">text </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
