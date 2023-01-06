import {createContext,useState,useEffect} from 'react';


export const WatchListContext=createContext();
//WatchListContext componeneler tarafindan import edilir 
//Temel amac disardan providerin icine mudahale yapabilmek !??!!
//her component WatchListContext araciligi ile ne lazimsa WatchListContextProviderdan
//alir ve kullanir 




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

    return<WatchListContext.Provider value={{watchList,deleteStock,addStock}}>
        {props.children}

    </WatchListContext.Provider>

    //WatchListContextProvider App.js tarafindan import edilir 
    //value yi butun componentler tarafindan erisilebilir kilar amen :|
    //yani WatchListContextProvider sadece her state(data) guncellendikce 
    //datayi componenlere delivery etemek , context ile alakali bir durm yok 

}

