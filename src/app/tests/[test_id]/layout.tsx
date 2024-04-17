'use client'

import QuestionsList from "@/components/QuestionsList";
import { questions } from "../../../../data/questions";
import Timer from "@/components/Timer";
import { Button } from "@nextui-org/react";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import axios from  '../../../api/axios'

export default function Layout({children,params}:{children:React.ReactNode,params:{test_id:string}}) {
  // localStorage.setItem('questions',JSON.stringify(questions));
  const [us,setUs] = useState(0);
  const handleSubmit = async () => {
    await axios({url:'/question/endTest',data:{
      "user_slot_id":us,
      "user_id":localStorage.getItem('user_id'),
      "slot_id":params.test_id
    },
    method:'POST'
  }).then(res=>{
    console.log(res.data)
  }
  ).catch(err=>{console.error(err)})
  }
  useEffect(()=>{
    async function getQuestions(){
      await axios({url:'/question/startMcq',data:{
        "user_id":localStorage.getItem('user_id'),
        "slot_id":params.test_id
      },
      method:'POST'})
      .then(res=>{
        localStorage.setItem('questions',JSON.stringify(res.data.questions));
        setUs(res.data.user_slot_id);
      })
      .catch(err=>{console.error(err)})
    }
    getQuestions()
  },[params.test_id])

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
            <span className="flex-grow relative">
                {children}
            </span>
        </div>
    </>
  )
}
