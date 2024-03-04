"use client";
import Question from "@/components/Question";
import { QuestionsContext } from "@/contexts/QuestionsContext"
import { useContext } from "react";
export default function page({ params }: { params: { id: string } }) {
  const questions = useContext(QuestionsContext);
  return (
      <div className="flex-1 m-2">
        <Question question={questions[parseInt(params.id)-1]}/>
        <h2>{params.id}</h2>
      </div>
  )
}