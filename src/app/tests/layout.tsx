import Question from "@/components/Question";
import QuestionsList from "@/components/QuestionsList"
import Timer from "@/components/Timer"
import { Button } from "@nextui-org/react"
export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <nav className="flex px-2 justify-between items-center my-3 sticky w-full top-0 left-0">
        <h1 className="text-2xl font-bold">MCQ <span className="text-blue-500">Test</span></h1>
        <div className="flex gap-2 items-center">
      <Timer hours={3} minutes={0} seconds={0}/>
        <Button color="success">Submit</Button>
        </div>
      </nav>
        <div className="flex">
        <QuestionsList/>
        {children}
        </div>
    </div>
  )
}
