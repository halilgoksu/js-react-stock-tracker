import {createContext,useState} from 'react';


export const WatchListContext=createContext()

export const WatchListContextProvider=(props)=>{
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    const addStock=()

    return<WatchListContextProvider value={{watchList}}>
        {props.children}

    </WatchListContextProvider>
}

