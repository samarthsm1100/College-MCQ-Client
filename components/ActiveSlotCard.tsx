import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import DeleteSlotModal from "./DeleteSlotModal";
import EditSlotModal from "./EditSlotModal";

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
    last_name: String,
    class_names:String[]
}

export default function App(slot: any) {

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      function convertUTCDateToLocalDate(date: any) {
        var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
        return newDate;   
    }

    let startDateConverted = slot.slot.start_time.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).substring(0, 10)
    let startTimeConverted = slot.slot.start_time.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).substring(11, 19)
    let startFinal = `${startDateConverted} ${startTimeConverted}`
    let endDateConverted = slot.slot.end_time.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).substring(0, 10)
    let endTimeConverted = slot.slot.end_time.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).substring(11, 19)
    let endFinal = `${endDateConverted} ${endTimeConverted}`

    startFinal = formatter.format(convertUTCDateToLocalDate(new Date(startFinal)))
    endFinal = formatter.format(convertUTCDateToLocalDate(new Date(endFinal)))

    return (
        <Card className="w-[200px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://cdn-icons-png.flaticon.com/128/10017/10017337.png"
                    width={40}
                />
                <div className="w-full flex justify-between">
                    <div className="flex flex-col">
                        <p className="text-md">{slot.slot.slot_name}</p>
                        <p className="text-small text-default-500">{slot.slot.domain_name}</p>
                    </div>
                    <div className="text-default-500">
                        {`Slot Id: ${slot.slot.slot_id}`}
                    </div>
                </div>
            </CardHeader>
            <div className="px-4"> 
                <Divider />
            </div>
            
            <CardBody>
                <div>
                    <p>
                        {`Total Questions: ${slot.slot.total_question}`}
                    </p>
                    <p>
                        {`Easy: ${slot.slot.easy}`}
                    </p>
                    <p>
                        {`Medium: ${slot.slot.medium}`}
                    </p>
                    <p>
                        {`Hard: ${slot.slot.hard}`}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-md">{`Start time: ${startFinal}`}</p>
                    <p className="text-md">{`End time: ${endFinal}`}</p>
                    
                </div>
            </CardBody>
            <div className="px-4"> 
                <Divider />
            </div>
            <CardFooter className="flex justify-between">
            <p className="text-default-500 py-2">
                {`Created By: ${slot.slot.first_name} ${slot.slot.last_name}`}
            </p>
            <div className="flex gap-4">
                <EditSlotModal key={slot.slot.slot_id} slot={slot.slot}/>
                
                <DeleteSlotModal slot_id={slot.slot.slot_id}/>
            </div>
            </CardFooter>
        </Card>
    );
}
