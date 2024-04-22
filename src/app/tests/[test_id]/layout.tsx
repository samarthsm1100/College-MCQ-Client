'use client'

import QuestionsList from "@/components/QuestionsList";
import { questions } from "../../../../data/questions";
import Timer from "@/components/Timer";
import { Button } from "@nextui-org/react";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import axios from  '../../../api/axios'
import { useRouter } from "next/navigation";



export default function Layout({ children, params }: { children: React.ReactNode, params: { test_id: string } }) {
  const router = useRouter();
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [diff, setDiff] = useState<number | null>(null);
  const [us, setUs] = useState<string | null>(null);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await axios.post('/question/startMcq', {
          user_id: localStorage.getItem('user_id'),
          slot_id: params.test_id
        });
        const { questions, user_slot_id, starttime, endtime } = res.data;
        localStorage.setItem('questions', JSON.stringify(questions));
        setUs(user_slot_id);
        setStartTime(Date.now());
        setEndTime(endtime);
        setDiff(endtime - Date.now());
      } catch (err) {
        console.error(err);
      }
    }
    getQuestions();
  }, [params.test_id]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/question/endTest', {
        user_slot_id: us,
        user_id: localStorage.getItem('user_id'),
        slot_id: params.test_id
      });
      localStorage.setItem('userTestResponse', JSON.stringify(res.data));
      router.push(`/testpreview`);
    } catch (err) {
      console.error(err);
    }
  }

  if (!diff) {
    return null; // or loading indicator
  }

  const hrs = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return (
    <>
      <div> 
        <nav className="flex px-2 justify-between items-center my-3 sticky w-full top-0 left-0">
          <h1 className="text-2xl font-bold">MCQ <span className="text-blue-500">Test</span></h1>
          <div className="flex gap-2 items-center">
            <Timer hours={hrs} minutes={mins} seconds={secs} />
            <Button color="success" className="font-semibold text-white text-md" onClick={handleSubmit}>Submit</Button>
          </div>
        </nav>
        <span className="flex-grow relative">
          {children}
        </span>
      </div>
    </>
  );
}