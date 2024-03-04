"use client";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import { useContext } from "react";
import Link from "next/link";
export default function QuestionsList() {
  const questions = useContext(QuestionsContext);
  return (
    <div className="h-[90vh] overflow-y-scroll w-fit px-2 bg-slate-200">
      <ul>
        {questions.map((question) => {
          return (
            <li className="relative" key={question.index}>
              <Link href={`/tests/${question.index}`}>
                {" "}
                <button className="rounded-full my-3 p-2 w-full h-full px-6 text-lg border-2 border-slate-500">
                  {question.index}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
