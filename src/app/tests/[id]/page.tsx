import DropDown from "@/components/DropDown";
import QuestionsList from "@/components/QuestionsList";

const arr = Array.from({length:30},(_,i:number):number=>{
    return i+1;
})
export default function page({params}:{params:{id:string}}) {
  return (
      <>
    <QuestionsList arr={arr}/>
      </>
  )
}