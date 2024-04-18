"use client"

import React, { useState,useEffect } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import NavigationBar from '../../../components/Navbar';

const userprofile: React.FC = () => {

    const recentTests:{title:String,date:String,mark:Number}[] = [
        {
            title:"Physics",
            date:"2023-04-12",
            mark:88
        },
        {
            title:"Chemistry",
            date:"2023-08-21",
            mark:45
        },
        {
            title:"DSA",
            date:"2023-12-20",
            mark:94
        }
    ]

    return (
        <div>
            <NavigationBar />
            <div className='mx-16 '>
                <div className=' '>
                    <img src="https://b2316719.smushcdn.com/2316719/wp-content/uploads/2022/03/bg_06.jpg?lossy=1&strip=1&webp=1" alt="temp" className="w-full h-[200px]" />
                </div>
                <div className=" my-8 flex relative ">
                    <div className="p-4 w-96 min-w-96 relative bottom-36 ">
                        <div className="flex flex-col pb-6 ">
                            <div className="flex justify-center">
                                <Image src="/quiz.jpg" height={200} width={200} alt="temp" className="border border-8 rounded-full" />
                            </div>
                            <div className="flex flex-col text-center p-2">
                                <h1 className='font-bold text-3xl'>Kedar Pawar</h1>
                                <h3 className='font-semibold text-xl'>Student</h3>
                            </div>
                            <div className="flex justify-center ">
                                <Button className='w-full'>
                                    Edit
                                </Button>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 grid-rows-6 px-4 '>
                            <div className='flex justify-between'>
                                <p>Class:</p>
                                <p>TE</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Department: </p>
                                <p>COMP</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Div: </p>
                                <p>1</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Roll No: </p>
                                <p>31160</p>
                            </div >
                            <div className='flex justify-between'>
                                <p>Email: </p>
                                <p>kedar@gmail.com</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Phone: </p>
                                <p>1234567890</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full right-1/2'>
                        <div className='p-4 border border-none rounded-lg bg-gray-800'>
                            <h2 className='text-xl font-bold py-2'>Recent Tests</h2>
                            <div className='flex flex-col py-2'>
                                {
                                    recentTests.length!=0?
                                    recentTests.map((test, ind) => (
                                        <div key={ind} className={ind % 2 == 0 ? "flex h-[56px] items-center justify-between rounded px-4 bg-purple-400" :
                                            "flex h-[56px] items-center  justify-between rounded px-4"}>
            
                                            <div>{test.title}</div>
                                            <div>{test.date}</div>
                                            {/* <div>{test.mark}</div> */}
                                        </div>
                                    ))
                                    :
                                    <div className="flex items-center justify-center min-h-[10rem]">
                                        <div className='text-center text-xl font-medium '>
                                        Participate in test to view..
                                    </div>
                                    </div>
            
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default userprofile;