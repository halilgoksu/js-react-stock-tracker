import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import finnHub from "../apis/finnHub";

const StockDetailPage = () => {
  const [chartData,setChartData]=useState()
  const { symbol } = useParams();
  const formatData=(data)=>{
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime() / 1000);
      let oneDay;
      if (date.getDay() === 6) {
        oneDay = currentTime - 2 * 24 * 60 * 60;
      } else if (date.getDay() === 0) {
        oneDay = currentTime - 3 * 24 * 60 * 60;
      } else {
        oneDay = currentTime - 24 * 60 * 60;
      }
      //market haftasonu kapali oldugu icin boyle bir hesaplama yaptik

      const oneWeek = currentTime - 7 * 24 * 60 * 60;
      const oneYear = currentTime - 365 * 24 * 60 * 60;

      try {
        const responseDay = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneDay,
            to: currentTime,
            resolution: 30,
          },
        });
        const responseWeek = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneDay,
            to: currentTime,
            resolution: 60,
          },
        });
        const responseYear = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneDay,
            to: currentTime,
            resolution: "W",
          },
        });
        console.log(responseDay);
        console.log(responseWeek);
        console.log(responseYear);
      } catch (error) {
        console.log(error);
      }
      setChartData({
        day:formatData([0].data),
        week:formatData([1].data),
        year:formatData([2].data)
      })
    };
    fetchData();
  }, []);

  return <div>StockDetailPage {symbol}</div>;
};
export default StockDetailPage;
