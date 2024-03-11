
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import DeleteSlotModal from "./DeleteSlotModal";

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

export default function AllSlotCard(slot: any) {
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
                    <p className="text-md">{`Start time: ${slot.slot.start_time}`}</p>
                    <p className="text-md">{`End time: ${slot.slot.end_time}`}</p>
                    
                </div>
            </CardBody>
            <div className="px-4"> 
                <Divider />
            </div>
            <CardFooter className="flex justify-between">
            <p className="text-default-500 py-2">
                {`Created By: ${slot.slot.first_name} ${slot.slot.last_name}`}
            </p>
            <div className="flex">
                <DeleteSlotModal/>
            </div>
            </CardFooter>
        </Card>
    );
}
