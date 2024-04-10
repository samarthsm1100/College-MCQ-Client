"use client"
import React from 'react'
import { questions } from '../../../../../data/questions'
import {Button, Divider, Radio, RadioGroup} from '@nextui-org/react'
import { useResults } from '@/contexts/ResultsContext'
export default function QuestionsPage({params}:{params:{question_id:string}}) {
  const question = questions.find((q)=>q.id   === parseInt(params.question_id))
  const {results,setOption,toggleReview,toggleSave} = useResults();
  return (
    <main className='flex flex-col justify-between h-full mx-4 space-y-2 py-2'>
    <section className='text-left'>
    <h1 className='text-5xl'>Q.{question?.id} {question?.question}</h1>
    <RadioGroup className='mt-4'>
      <Radio className='transition-all duration-600 py-4 my-2 min-w-44 focus-within:border-blue-500 border-gray-300 border-2 rounded-md' value={question?.options[1].id.toString()??''}>{question?.options[1].option}</Radio>
      <Radio className='transition-all duration-600 py-4 my-2 min-w-44 border-gray-300 border-2 focus-within:border-blue-500 rounded-md' value={question?.options[2].id.toString()??''}>{question?.options[2].option}</Radio>
      <Radio className='transition-all duration-600 py-4 my-2 min-w-44 border-gray-300 border-2 focus-within:border-blue-500 rounded-md' value={question?.options[3].id.toString()??''}>{question?.options[3].option}</Radio>
      <Radio className='transition-all duration-600 py-4 my-2 min-w-44 border-gray-300 border-2 focus-within:border-blue-500 rounded-md' value={question?.options[0].id.toString()??''}>{question?.options[0].option}</Radio>
    </RadioGroup>
      </section>
    <section className='space-y-4'>
    <Divider className='w-full'/>
    <div className='space-x-3'>
    <Button color='warning' variant={results[(question?.id as number)-1].isReview?"shadow":"solid"} onClick={()=>toggleReview((question?.id-1) as number)} className='text-xl text-white font-semibold'>{results[(question?.id as number)-1].isReview?"Marked for Review":"Mark for Review"}</Button>
    <Button color='success' className='text-xl text-white font-semibold'>Save</Button>
    </div>
    </section>
    </main>
  )
}
