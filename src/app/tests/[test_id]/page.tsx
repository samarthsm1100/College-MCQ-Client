"use client"
import React, { useEffect, useState } from 'react';
import { Button, Divider, Radio, RadioGroup } from '@nextui-org/react';
import QuestionsList from '@/components/QuestionsList';
import axios from '../../../api/axios';
type Question = {
  id: number;
  question_statement: string;
  options: string[];
  correct_option: number;
};

export default function QuestionsPage() {
  const [index, setIndex] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isReview, setIsReview] = useState<boolean[]>([]);
  const [radio, setRadio] = useState<number[]>([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(
      window.localStorage.getItem('questions') || '[]'
    ) as Question[];
    console.log(storedQuestions)
    setQuestions(storedQuestions);
    setIsReview(Array.from({ length: storedQuestions.length }, () => false));
    setRadio(Array.from({ length: storedQuestions.length }, () => -1));
  }, []);

    async function saveQuestion(){
      console.log(radio[index-1])
    axios({url:'/question/markA',method:'POST',
      data:{
      user_id:localStorage.getItem('user_id'),
      slot_id: questions[index-1].fk_slot,
      user_question_id:questions[index-1].user_question_id,
      option:radio[index-1],
    }}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.error(err)
    })
  }
  const question = questions[index - 1];

  function toggle() {
    setIsReview((prev) =>
      prev.map((val, i) => (i === index - 1 ? !val : val))
    );
  }

  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <main className='flex '>
      <div className='overflow-y-scroll h-[90vh] px-4'>
        <QuestionsList setIndex={setIndex} length={questions.length} />
      </div>
      <section className='text-left px-4 flex flex-col justify-between'>
        <h1 className='text-5xl max-w-5xl'>
          Q.{[index]} {question.question_statement}
        </h1>
        <RadioGroup
          className='mt-4'
          value={radio[index - 1].toString()}
          onValueChange={(value) => {
            setRadio((prev) =>
              prev.map((val, i) => (i === index - 1 ? parseInt(value) : val))
            );
          }}
        >
          {question.options.map((option, optionIndex) => (
            <Radio
              key={optionIndex}
              className='transition-all duration-600 py-4 my-2 min-w-44 border-gray-300 border-2 focus-within:border-blue-500 rounded-md'
              value={(optionIndex+1).toString()}
            >
              {option}
            </Radio>
          ))}
        </RadioGroup>
        <div className='space-y-2'>
          <Divider className='w-full' />
          <div className='space-x-3'>
            <Button
              color='warning'
              variant={isReview[index - 1] ? 'bordered' : 'solid'}
              onClick={toggle}
            >
              {isReview[index - 1]
                ? 'Marked as Review'
                : 'Mark as Review'}
            </Button>
            <Button 
            color='success' 
            className='text-xl text-white font-semibold' 
            onClick={saveQuestion}
            >
              Save
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
