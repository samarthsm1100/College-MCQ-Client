"use client"

import React, { useState, useEffect } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const testpreview: React.FC = () => {


    useEffect(() => { }, [])

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

        }
    ]

    return (
        <div className='flex items-center justify-center my-12'>
            <div className="mx-32  w-full min-h-[36rem] border rounded-lg border-purple-400 border-2 p-8 ">
                {
                    questions.length > 0 ?
                        questions.map((question,ind)=>(
                          <div key ={ind} className='rounded-lg bg-gray-800 p-4 mt-2 mb-2'>
                            <h3>Q{question.question_number}.&nbsp; {question.title}</h3>
                            <ol className='list-decimal ml-12 pt-3 pb-3'>
                                {question.options.map((option,idx)=>(
                                    <li key={idx} className='pt-2 pb-2'>&nbsp;{option}</li>
                                ))}
                            </ol>
                            <div>
                                <p>Your Choice:&nbsp;{question.chosenAnswer}</p>
                                <p>Correct Option:&nbsp;{question.chosenAnswer} </p>
                            </div>
                        </div>
                        ))
                        :
                        <p>No questions</p>
                }
            </div>
        </div>
    );
};
export default testpreview;