"use client"
import React, { useState, useEffect } from 'react';
import { Input, Button, Image, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import instance from '@/api/axios';


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

const leaderboard: React.FC = ({params}:any) => {
  const [slotInfo,setSlotInfo] = useState({});
  const [result,setResult] = useState([]);

  async function getResult(id:any){
    try {
      const response = await instance({
        url: `/ps/leaderboard/${id}`,
        method: "GET"
      })
      console.log(response);
      setResult(response.data.leaderboard)

    } catch (error) {
      console.error(error);
    }
  }
  
  async function getSlotInfo(id:any){
    try {
      const res = await instance({
        url:`/ps/getSlot/${id}`,
        method:"GET"
      })
  
      console.log(res)
      setSlotInfo(res.data.slots[0])
  
    } catch (error) {
      console.error(error)
    }
  }

    useEffect(()=>{
      getResult(params.id);
      getSlotInfo(params.id);
    },[])

  return (
    <>
      <div className='flex justify-center items-center my-12'>
        <div className='mx-32 w-full min-h-[36rem] rounded-lg border-purple-400 border-2 p-8 relative'>
        <div className='flex justify-between text-2xl  py-4'>
                <div className='font-semibold'>{slotInfo.slot_name}</div>
                <div className='text-default-500'>SlotId:{params.id}</div>
        </div>
          <div className='grid grid-cols-5 bg-purple-400 px-4 rounded-lg text-xl font-semibold'>
            <div>Rank</div>
            <div>Name</div>
            <div className='flex justify-center'>Roll No.</div>
            <div className='flex justify-center'>Division</div>
            <div className='flex justify-end'>Points</div>
          </div>
          {
            result.length <= 0 ?
              <div className='flex justify-center items-center min-h-[22rem] text-2xl font-semibold'>
                <p>Nothing to show</p>
              </div> :
              result.map((row, ind) => (
                <div key={ind}>
                <div className='grid grid-cols-5 px-4 my-2 text-xl'>
                  <div>{ind + 1}</div>
                  <div>{row.first_name}&nbsp;{row.last_name}</div>
                  <div className='flex justify-center'>{row.roll_no}</div>
                  <div className='flex justify-center'> {row.division}</div>
                  <div className='flex justify-end'>{row.score}</div>
                </div>
                <Divider/>
                </div>
              ))
          }
          <div className='flex justify-end my-4 absolute bottom-0'>
          <Link href={`/ps/allSlots/`}>
                <Button>Back</Button>
          </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default leaderboard;
