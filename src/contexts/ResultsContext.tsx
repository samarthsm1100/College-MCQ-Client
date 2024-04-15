"use client";
import {useContext,useState,createContext, useEffect} from 'react';
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
    initializeResults:()=>void
    setIsInitialized:(value:boolean)=>void
}

const res = Array.from({length:questions.length},(q,k)=>({q_id:0,isReview:false,option:0,isSaved:false}));

const ResultsContext = createContext<ResultsContextType|undefined>(undefined);

export function ResultsContextProvider({children}:{children:React.ReactNode}):JSX.Element{
    const [results,setResults] = useState<Results[]>(res);
    const [isInitialized,setIsInitialized] = useState(false);
    
    const initializeResults = ()=>{
        const localResults = JSON.parse(localStorage.getItem('results') as string);
        if(localResults){
            setResults(localResults);
        }
        else{
            localStorage.setItem('results',JSON.stringify(results));
        }
    }

    useEffect(()=>{       
        // const flag = JSON.parse(localStorage.getItem('isInitialized') as string);     
        if(!isInitialized){
            initializeResults();
            setIsInitialized(true);
            // localStorage.setItem('isInitialized',JSON.stringify(true));
        }
    }, [])

    const toggleReview = (index:number)=>{
        const localResults = JSON.parse(localStorage.getItem('results') as string);
        const newResults = localResults;
        newResults[index].isReview = !newResults[index].isReview;
        setResults(newResults);
        localStorage.setItem('results',JSON.stringify(localResults));
    }

    const toggleSave = (index:number)=>{
        const localResults = JSON.parse(localStorage.getItem('results') as string);
        const newResults = localResults;
        newResults[index].isSaved = !newResults[index].isSaved;
        setResults(newResults);
        localStorage.setItem('results',JSON.stringify(localResults));
    }

    const setOption = (index:number,option:number)=>{
        const localResults = JSON.parse(localStorage.getItem('results') as string);
        const newResults = localResults;
        newResults[index].option = option;
        setResults(newResults);
        localStorage.setItem('results',JSON.stringify(localResults));
    }

    return (
        <ResultsContext.Provider value={{results,setIsInitialized, toggleReview,toggleSave,setOption, initializeResults}}>
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