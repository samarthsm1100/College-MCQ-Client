import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function QuestionsList({length = 0 ,test_id}:{length:number,test_id:string}) {
    const arr = Array.from({length}, (_, i) => i + 1);
  return (
    <section className="w-fit flex flex-col gap-8">{
        arr.map((i)=>{
            return(
            <Link key={i} href={`/tests/${test_id}/${i}`}><Button >{i}</Button></Link>
        )})}
    </section>
  )
}
