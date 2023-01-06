import {createContext,useState} from 'react';


export const WatchListContext=createContext()

export const WatchListContextProvider=(props)=>{
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    const addStock=(stock)=>{
        setWatchList(())
    }

    return<WatchListContextProvider value={{watchList}}>
        {props.children}

    </WatchListContextProvider>
}

