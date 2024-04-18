"use client"

import React, { useState, useEffect } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiX, FiCheck } from "react-icons/fi";
import instance from '@/api/axios';


const Testpreview: React.FC = () => {
    const router = useRouter()
    const review = localStorage.getItem("userTestResponse")
    const [questions,setQuestions] = useState()
    const [score,setScore] = useState()
    useEffect(()=>{
    
    const newReview = JSON.parse(review)
    console.log(newReview)
    setQuestions(newReview.preview)
    setScore(newReview.score)
    },[])
    return (
        <div className='flex items-center justify-center my-12'>
            
            <div className="mx-32  w-full min-h-[36rem] border rounded-lg border-purple-400 border-2 p-8 ">
            <div className='text-end text-xl font-semibold'>Total Score:&nbsp;{score}</div>
                {questions &&
                    questions.length > 0 ?
                        questions.map((question, ind) => (
                            <div key={ind} className='rounded-lg p-4 bg-slate-100 mt-2 mb-2'>
                                <div className='flex justify-between items-center '>
                                    <h3 className='text-xl'>Q{ind+1}.&nbsp; {question.question_statement}</h3>
                                    <div className=''>{question.status ?
                                        <div className='p-2 flex items-center border border-none rounded-3xl bg-green-200 text-green-600 font-semibold'>Correct&nbsp; <FiCheck width={40} height={40} /></div> :
                                        <div className='p-2 flex items-center border border-none rounded-3xl bg-red-200 text-red-600 font-semibold'>Incorrect&nbsp; <FiX /></div>}
                                    </div>
                                </div>

                                <ol className='list-decimal ml-12 pt-3 pb-3'>
                                    {question.options.map((option, idx) => (
                                        <li key={idx} className='pt-2 pb-2'>&nbsp;{option}</li>
                                    ))}
                                </ol>
                                <div>
                                    <p>Your Choice:&nbsp;{question.your_option?question.your_option+1:"No option selected"}</p>
                                    <p>Correct Option:&nbsp;{question.correct_option+1} </p>
                                </div>
                            </div>
                        ))
                        :
                        <p>No Questions</p>
                }

                <div className="flex justify-between mt-6">
                    {/* <Button color="secondary" variant='solid' onClick={()=>{}}>Download Report</Button> */}
                    <Button color="secondary" variant='solid' onClick={() => router.push('/')}>Go to homepage</Button>
                </div>
            </div>
        </div>
    );
};
export default Testpreview;