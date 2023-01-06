import {createContext,useState} from 'react';


export const WatchListContext=createContext()

export const WatchListContextProvider=(props)=>{
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

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

    return<WatchListContextProvider value={{watchList,deleteStock}}>
        {props.children}

    </WatchListContextProvider>
}

