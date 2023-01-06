import { useEffect } from "react";

useEffect(()=>{
    const stocks=["ADSFA","RRR","R#@"];

    const mdif=stocks.map((a)=>{
        return `${a}`
    });
    
    console.log(mdif);
    
},[])