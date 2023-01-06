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
        //watchList stcoklari barindiran bir array 
        //

    useEffect(()=>{
      localStorage.setItem("watchlist",watchList)
    },[watchList])

    const addStock=(stock)=>{
        if(watchList.indexOf(stock)=== -1){
            setWatchList([...watchList,stock])

        }
    }
    //watchListin en basina -1 
    const deleteStock =(stock)=>{
        setWatchList.filter((ek)=>{
            return ek !== stock
        })
    }
    //watclisti tekrar firltrele ama ; olamayn elemanlari cikar

    return<WatchListContextProvider value={{watchList,deleteStock,addStock}}>
        {props.children}

    </WatchListContextProvider>

    //WatchListContextProvider App.js tarafindan import edilir 
    //value yi butun componentler tarafindan erisilebilir kilar amen :|
    //yani WatchListContextProvider sadece her state(data) guncellendikce 
    //datayi componenlere delivery etemek , context ile alakali bir durm yok 

}

