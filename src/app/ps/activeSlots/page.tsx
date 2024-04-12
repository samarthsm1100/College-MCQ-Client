"use client"
import ActiveSlotCard from "../../../../components/ActiveSlotCard"
import PsNavbar from "../../../../components/PsNavbar"
import instance from "@/api/axios"
import { useEffect,useState } from "react"
interface Slot{
  slot_id:Number,
  slot_name:String,
  start_time:String,
  end_time:String,
  total_question:Number,
  easy:Number,
  medium:Number,
  hard:Number,
  domain_name:String,
  first_name:String,
  last_name:String,
  class_names:String[]
}
const ActiveSlots:React.FC = () => {

  const [slots,setSlots] = useState()

  const getSlots = async()=>{
    try {
      const res = await instance({
        url:"/ps/getActiveslots/",
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

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div>
      <PsNavbar/>
      <div className="mx-16 my-12">
      
      <h2 className="font-bold text-2xl py-4">Active Slots</h2>
      <div className="grid grid-cols-3 gap-6">
        {
          slots?
          slots.map((slot,index)=>(
            <ActiveSlotCard key={slot.slot_id} slot={slot}/>
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
export default ActiveSlots;
