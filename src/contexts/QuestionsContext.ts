import {createContext} from 'react';
const arr = Array.from({length:30},(_,i:number):QuestionListProps=>{
    return {question_id:1234,difficulty:1,user_question_id:12,index:i+1,options:['a','b','c','d'],question_statement:'This is a question'};
})
export const QuestionsContext = createContext(arr);