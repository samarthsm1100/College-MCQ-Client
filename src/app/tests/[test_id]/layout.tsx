'use client'

import QuestionsList from "@/components/QuestionsList";
import { questions } from "../../../../data/questions";
import Timer from "@/components/Timer";
import { Button } from "@nextui-org/react";
// import { useRouter } from "next/navigation";
// import { useResults } from "@/contexts/ResultsContext";

export default function Layout({children,params}:{children:React.ReactNode,params:{test_id:string}}) {

  const handleSubmit = async () => {
    localStorage.removeItem('results');
    window.location.href = '/';
    // localStorage.setItem('isInitialized',JSON.stringify(false));
  }
  
  return (
    <>
        <div>
            <nav className="flex px-2 justify-between items-center my-3 sticky w-full top-0 left-0">
            <h1 className="text-2xl font-bold">MCQ <span className="text-blue-500">Test</span></h1>
            <div className="flex gap-2 items-center">
          <Timer hours={3} minutes={0} seconds={0}/>
            <Button color="success" className="font-semibold text-white text-md" onClick={handleSubmit}>Submit</Button>
            </div>
          </nav>
          <section className="flex ">
            <div className="overflow-y-scroll h-[90vh] px-4">
            <QuestionsList length={questions.length} test_id={params.test_id}/>
            </div>
            <span className="flex-grow relative">{children}</span>
          </section>
        </div>
    </>
  )
}
