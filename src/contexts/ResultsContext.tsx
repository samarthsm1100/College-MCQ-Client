"use client";
import {useContext,useState,createContext} from 'react';
import { questions } from '../../data/questions';

type Results={
    q_id:number,
    isReview:boolean,
    option:number,
    isSaved:boolean
}
type ResultsContextType = {
    results:Results[],
    toggleReview:(index:number)=>void,
    toggleSave:(index:number)=>void,
    setOption:(index:number,option:number)=>void
}

const res = Array.from({length:questions.length},(q,k)=>({q_id:0,isReview:false,option:0,isSaved:false}));

const ResultsContext = createContext<ResultsContextType|undefined>(undefined);

export function ResultsContextProvider({children}:{children:React.ReactNode}):JSX.Element{
    const [results,setResults] = useState<Results[]>(res);

    const toggleReview = (index:number)=>{
        const newResults = [...results];
        newResults[index].isReview = !newResults[index].isReview;
        setResults(newResults);
    }

    const toggleSave = (index:number)=>{
        const newResults = [...results];
        newResults[index].isSaved = !newResults[index].isSaved;
        setResults(newResults);
    }

    const setOption = (index:number,option:number)=>{
        const newResults = [...results];
        newResults[index].option = option;
        setResults(newResults);
    }

    return (
        <ResultsContext.Provider value={{results,toggleReview,toggleSave,setOption}}>
            {children}
        </ResultsContext.Provider>
    )
}

export function useResults(){
    const context = useContext(ResultsContext);
    if(context === undefined){
        throw new Error('useResults must be used within ResultsContextProvider')
    }
    return context;
}