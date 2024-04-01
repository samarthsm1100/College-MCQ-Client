import React, { useState, useEffect } from 'react';
import { Input, Button, Image, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



async function getResult(id:any){
    // const res = await fetch(`http://localhost:4000/tickets/${id}`,{
    //     next:{
    //         revalidate:60
    //     }
    // })
    //logic if ticket not exists
    // if(!res.ok){
    //     notFound();
    // }
    
    // return res.json();

    const result = [
        {
          first_name: "Kedar",
          last_name: "Pawar",
          roll_no: 31160,
          division: "TE1",
          score: 75
        },
        {
          first_name: "Kedar",
          last_name: "Pawar",
          roll_no: 31161,
          division: "TE1",
          score: 75
        },
        {
          first_name: "Kedar",
          last_name: "Pawar",
          roll_no: 31162,
          division: "TE1",
          score: 75
        },
        {
          first_name: "Kedar",
          last_name: "Pawar",
          roll_no: 31163,
          division: "TE1",
          score: 75
        }
      ]
      return result;
}

const leaderboard: React.FC = async({params}:any) => {
    const result = await getResult(params.id);

  return (
    <>
      <div className='flex justify-center items-center my-12'>
        <div className='mx-32  w-full min-h-[36rem] border rounded-lg border-purple-400 border-2 p-8 '>
        <div className='flex justify-between text-2xl  py-4'>
                <div className='font-semibold'>Slot Name</div>
                <div className='text-default-500'>SlotId:{params.id}</div>
        </div>
          <div className='grid grid-cols-5 bg-secondary px-4 rounded-lg text-xl font-semibold'>
            <div>Rank</div>
            <div>Name</div>
            <div className='flex justify-center'>Roll No.</div>
            <div className='flex justify-center'>Division</div>
            <div className='flex justify-end'>Points</div>
          </div>
          {
            result.length <= 0 ?
              <p>Nothing to show</p> :
              result.map((row, ind) => (
                <>
                <div className='grid grid-cols-5 px-4 my-2 text-xl' key={ind}>
                  <div>{ind + 1}</div>
                  <div>{row.first_name}&nbsp;{row.last_name}</div>
                  <div className='flex justify-center'>{row.roll_no}</div>
                  <div className='flex justify-center'> {row.division}</div>
                  <div className='flex justify-end'>{row.score}</div>
                </div>
                <Divider/>
                </>
              ))
          }

        </div>
      </div>
    </>
  )
}
export default leaderboard;
