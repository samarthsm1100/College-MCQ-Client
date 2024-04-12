'use client'

import Link from "next/link"
import AllSlotCard from "../../../../components/AllSlotCard"
import PsNavbar from "../../../../components/PsNavbar"
import instance from "@/api/axios"
import {useState,useEffect} from 'react'

interface Slot {
  slot_id: Number,
  slot_name: String,
  start_time: String,
  end_time: String,
  total_question: Number,
  easy: Number,
  medium: Number,
  hard: Number,
  domain_name: String,
  first_name: String,
  last_name: String
}
const AllSlots: React.FC = () => {

  const [slots,setSlots] = useState()

  const getSlots = async()=>{
    try {
      const res = await instance({
        url:"/ps/getPastSlots/",
        method:"GET"
      })
      console.log(res.data)
      setSlots(res.data.slots)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(()=>{
    getSlots()
  },[])
  return (
    <div>
      <PsNavbar/>
      <div className="mx-16 my-12">
        <h2 className="font-bold text-2xl py-4">All Slots</h2>
        <div className="grid grid-cols-3 gap-6">
          {
            slots ?
              slots.map((slot, index) => (
                
                <AllSlotCard key={slot.slot_id} slot={slot} />
               
              )) :
              <div className="flex justify-center items-center  col-span-3 min-h-[22rem] text-2xl font-semibold">
                <p>No Slots available</p>
              </div>

          }
        </div>
        
      </div>
    </div>
  )
}
export default AllSlots;
