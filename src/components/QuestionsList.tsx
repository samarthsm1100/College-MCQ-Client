import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function QuestionsList({length = 0 ,setIndex,isSubmit,setIsSubmit}:{length:number,setIndex:Dispatch<SetStateAction<number>>,setIsSubmit:Dispatch<SetStateAction<boolean[]>>,isSubmit:boolean[]}) {
    const arr = Array.from({length}, (_, i) => i + 1);
  return (
    <section className="w-fit flex flex-col gap-8">{
        arr.map((i)=>{
            return(
            <Button color={isSubmit[i-1]?"success":"primary"} onClick={()=>setIndex(i)} key={i}>{i}</Button>
        )})}
    </section>
  )
}
