import {createContext,useState} from 'react';


export const WatchListContext=createContext()

export const WatchListContextProvider=(props)=>{
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    const addStock=(stock)=>{
        if()
        setWatchList([...watchList,stock])
    }

    return<WatchListContextProvider value={{watchList}}>
        {props.children}

    </WatchListContextProvider>
}

