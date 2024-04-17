import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function QuestionsList({length = 0 ,setIndex}:{length:number,setIndex:Dispatch<SetStateAction<number>>}) {
    const arr = Array.from({length}, (_, i) => i + 1);
  return (
    <section className="w-fit flex flex-col gap-8">{
        arr.map((i)=>{
            return(
            <Button onClick={()=>setIndex(i)} key={i}>{i}</Button>
        )})}
    </section>
  )
}
