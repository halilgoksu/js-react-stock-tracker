import AutoComplete  from "../components/AutoComplete"
import { StockList } from "../components/StockList"

export const StockOverviewPage = () => {
  return<div className="text-center">
    <AutoComplete />
    <StockList />
    
  </div>
}