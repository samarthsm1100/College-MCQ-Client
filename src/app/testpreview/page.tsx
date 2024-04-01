"use client"

import React, { useState, useEffect } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiX, FiCheck } from "react-icons/fi";

const Testpreview: React.FC = () => {

    useEffect(() => { }, [])
    const router = useRouter()

    const questions = [
        {
            question_number: 1,
            title: "What is the relational database?",
            options: [
                "A type of non-SQL database",
                "A type of SQL database that supports transactions",
                "The foundation for all databases in the 1980s and early 1990s.",
                "An operating system kernel component used by Microsoft Windows."
            ],
            correctAnswer: 2,
            chosenAnswer: 3

        },
        {
            question_number: 2,
            title: "What is the relational database?",
            options: [
                "A type of non-SQL database",
                "A type of SQL database that supports transactions",
                "The foundation for all databases in the 1980s and early 1990s.",
                "An operating system kernel component used by Microsoft Windows."
            ],
            correctAnswer: 4,
            chosenAnswer: 4

        },
        {
            question_number: 3,
            title: "What is the relational database?",
            options: [
                "A type of non-SQL database",
                "A type of SQL database that supports transactions",
                "The foundation for all databases in the 1980s and early 1990s.",
                "An operating system kernel component used by Microsoft Windows."
            ],
            correctAnswer: 1,
            chosenAnswer: 3

        },
        {
            question_number: 4,
            title: "What is the relational database?",
            options: [
                "A type of non-SQL database",
                "A type of SQL database that supports transactions",
                "The foundation for all databases in the 1980s and early 1990s.",
                "An operating system kernel component used by Microsoft Windows."
            ],
            correctAnswer: 2,
            chosenAnswer: 3

        },
    ]

    return (
        <div className='flex items-center justify-center my-12'>
            <div className="mx-32  w-full min-h-[36rem] border rounded-lg border-purple-400 border-2 p-8 ">
                {
                    questions.length > 0 ?
                        questions.map((question, ind) => (
                            <div key={ind} className='rounded-lg bg-gray-800 p-4 mt-2 mb-2'>
                                <div className='flex justify-between items-center '>
                                    <h3 className='text-xl'>Q{question.question_number}.&nbsp; {question.title}</h3>
                                    <div className=''>{question.chosenAnswer === question.correctAnswer ?
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
                                    <p>Your Choice:&nbsp;{question.chosenAnswer}</p>
                                    <p>Correct Option:&nbsp;{question.correctAnswer} </p>
                                </div>
                            </div>
                        ))
                        :
                        <p>No questions</p>
                }

                <div className="flex justify-between mt-6">
                    <Button color="secondary" variant='solid' onClick={()=>{}}>Download Report</Button>
                    <Button color="secondary" variant='solid' onClick={() => router.push('/')}>Go to homepage</Button>
                </div>
            </div>
        </div>
    );
};
export default Testpreview;