import ActiveSlotCard from "../../../../components/ActiveSlotCard"

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
  last_name:String
}
const ActiveSlots:React.FC = () => {
  const slots:Slot[] = [
    {
      slot_id:1,
      slot_name:"DSA Mock Test",
      start_time:"2023-10-01 10:00",
      end_time:"2023-10-01 13:00",
      total_question:30,
      easy:10,
      medium:10,
      hard:10,
      domain_name:"DSA",
      first_name:"G.B.",
      last_name:"Potadar"
    },
    {
      slot_id:2,
      slot_name:"MPL Mock Test",
      start_time:"2023-10-01 10:00",
      end_time:"2023-10-01 13:00",
      total_question:30,
      easy:10,
      medium:10,
      hard:10,
      domain_name:"MP",
      first_name:"Sheetal",
      last_name:"Girme"
    },
    {
      slot_id:3,
      slot_name:"WT Mock Test",
      start_time:"10:00",
      end_time:"13:00",
      total_question:30,
      easy:10,
      medium:10,
      hard:10,
      domain_name:"WT",
      first_name:"Pooja",
      last_name:"Kohok"
    },
    {
      slot_id:4,
      slot_name:"WT Mock Test",
      start_time:"2023-10-01 10:00",
      end_time:"2023-10-01 13:00",
      total_question:30,
      easy:10,
      medium:10,
      hard:10,
      domain_name:"WT",
      first_name:"Pooja",
      last_name:"Kohok"
    }
  ];
  return (
    <div>
      <div className="mx-16 my-12">
      {/* 
      update form */}
      
      <h2 className="font-bold text-2xl py-4">Active Slots</h2>
      <div className="grid grid-cols-3 gap-6">
        {
          slots?
          slots.map((slot,index)=>(
            <ActiveSlotCard key={slot.slot_id} slot={slot}/>
          )) :
          <p>No Slots available</p>
        }
      </div>
    </div>
    </div>
  )
}
export default ActiveSlots;
