import {createContext,useState,useEffect} from 'react';


export const WatchListContext=createContext();
//WatchListContext



export const WatchListContextProvider=(props)=>{
    
    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList")?.split(",") || 
        ["GOOGL", "MSFT", "AMZN"]);

    useEffect(()=>{
      localStorage.setItem("watchlist",watchList)
    },[watchList])

    const addStock=(stock)=>{
        if(watchList.indexOf(stock)=== -1){
            setWatchList([...watchList,stock])

        }
    }
    const deleteStock =(stock)=>{
        setWatchList.filter((ek)=>{
            return ek !== stock
        })
    }

    return<WatchListContextProvider value={{watchList,deleteStock,addStock}}>
        {props.children}

    </WatchListContextProvider>
    //WatchListContextProvider App.js tarafindan import edilir 
    //value yi butun componentler tarafindan erisilebilir kilar amen :|
}

