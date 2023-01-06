import {createContext,useState,useEffect} from 'react';


export const WatchListContext=createContext();
//WatchListContext componeneler tarafindan import edilir 
//Temel amac disardan providerin icine mudahale yapabilmek !??!!
//her component WatchListContext araciligi ile ne lazimsa WatchListContextProviderdan
//alir ve kullanir 




export const WatchListContextProvider=(props)=>{
    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]);
        //watchList stocklari barindiran bir array 
        //her an degisebilir 


    useEffect(()=>{localStorage.setItem("watchlist",watchList)},[watchList])
     //watchList her degisiklik oldugunda local storage deki elemanlari set et 


    const addStock=(stock)=>{
        if(watchList.indexOf(stock)=== -1){
            setWatchList([...watchList,stock])
        }
    }
    //butun listi getir ve sonuna da prop dan gelen elemani ekle 
     // -1 eger su anda watchList de bulunmuyorsa demek 

    const deleteStock =(stock)=>{
        setWatchList.filter((ek)=>{
            return ek !== stock
        })
    }
     //watclisti tekrar firltrele ama ; olamayn elemanlari cikar

    return<WatchListContext.Provider 
             value={{watchList,deleteStock,addStock}}>
             {props.children}
        </WatchListContext.Provider>
    //WatchListContextProvider App.js tarafindan import edilir 
    //value yi butun componentler tarafindan erisilebilir kilar amen :|
    //yani WatchListContextProvider sadece her state(data) guncellendikce 
    //datayi componenlere delivery etemek , context ile alakali bir durm yok 

}

