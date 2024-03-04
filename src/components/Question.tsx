"use client";
import { Button } from "@nextui-org/react"
import { useState } from "react";

function Question({question}:{question:QuestionListProps}) {
  const [isReview,setIsReview] = useState(false)
  const toggleReview = ()=>{
    setIsReview(!isReview)
  }
  return (
    <div className="relative h-full">
      <h1>Q.{question.index} {question.question_statement}</h1>
      
      <div className="absolute bottom-1 border-t-2 border-gray-500 w-[90vw] mx-auto p-2 space-x-2">
      <Button color="warning" variant={isReview?"bordered":"solid"} onClick={toggleReview} className={"font-semibold text-md"}>{isReview?"Marked as Review":"Mark for Review"}</Button>
      <Button color="danger" className="font-semibold text-md">Clear Response</Button>
      </div>
    </div>
  )
}

export default Question
