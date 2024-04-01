/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@nextui-org/react"
import PsNavbar from "../../../../components/PsNavbar"
import { useState } from "react";
import DomainForm from "../../../../components/DomainForm";
import PsDomainDelete from "../../../../components/PsDomainDelete";

const domain = [
    {name: 'C++'},
    {name: 'Java'},
    {name: 'Python'},
    {name: 'Javascript'},
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'React'},
    {name: 'Angular'},
    {name: 'Vue'},
    {name: 'Node'},
    {name: 'Express'},
    {name: 'Django'}
]

const ProblemSetter = () => {

    const [selectedDomain, setSelectedDomain] = useState({})
    const [flag, setFlag] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(e.target[0].files[0])
        console.log('Submitted')
    }

  return (

    <div className=" w-full flex m-0 p-0 bg-slate-200">
        <div className="h-inherit w-full bg-violet-300">
            <PsNavbar />

            <div className="grid grid-cols-2 gap-4">

                {/* Domain Controllers */}
                <div className="p-2 bg-violet-400 text-center col-span-1">
                    <h2 className="font-bold text-xl text-black">Domain Controller</h2>
                    <hr className="my-2"/>

                    <div className="max-h-[30rem] overflow-y-auto">
                    <ul className="divide-y text-start divide-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-white">
                    {domain.map((item, index) => (
                        <div className="py-4 flex items-center" key={index}>
                        <div className="text-lg font-semibold text-violet-900 ml-4 hover:cursor-pointer" onClick={() => {setSelectedDomain(item); setFlag(true)}}>
                            <span className="rounded-full bg-white p-1 text-center mr-4">{index+1}&nbsp;</span>
                            {item.name}
                        </div>
                        
                        </div>
                    ))}
                    </ul>
                    </div>

                    <hr className="my-2"/>

                    <div className="flex justify-center my-4 pt-2">
                        <Button className="font-semibold text-lg bg-purple-800 hover:cursor-pointer hover:bg-white hover:text-purple-700" variant="shadow" 
                        onClick={() =>setFlag(false)} 
                        >Create Domain</Button>
                    </div>

                </div>

                <div className="p-2 bg-violet-400 w-full col-span-1">
                    {
                        flag === false ? 
                        (
                            <div className="flex justify-center mt-16">
                                <DomainForm />
                            </div>
                        )
                        :
                        <div className="flex flex-col my-16 items-center">
                            <h1 className="text-4xl font-semibold text-center text-black bg-white mx-auto p-2 rounded-md">{(selectedDomain as { name: string, image_url: string }).name}</h1>
                            <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="domainImg" className="mt-10" width={200} height={200}/>

                            <div className="flex flex-col gap-4 mt-6">
                                <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <label className="text-xl font-semibold text-black">Upload CSV : </label>
                                    <input type="file" className="border border-black rounded-md"/>
                                    <Button type="submit" className="font-semibold text-lg bg-purple-800 border border-black hover:bg-white hover:cursor-pointer hover:text-purple-700" variant="bordered">Add Questions</Button>
                                </form>
                                <PsDomainDelete domain={selectedDomain as { name: string; image_url: string; }}/>
                            </div>

                        </div>
                    }
                </div>

            </div>
        </div>
    </div>
  )
}
export default ProblemSetter