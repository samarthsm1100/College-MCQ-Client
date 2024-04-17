/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@nextui-org/react"
import PsNavbar from "../../../../components/PsNavbar"
import { useEffect, useState } from "react";
import DomainForm from "../../../../components/DomainForm";
import PsDomainDelete from "../../../../components/PsDomainDelete";
import instance from "@/api/axios";
import CSVForm from "../../../../components/CSVForm";
import { useRouter } from "next/navigation";
import { set } from "react-hook-form";

const ProblemSetter = () => {

    const token = localStorage.getItem('token')
    if(!token) window.location.href = '/ps/login'
        
    const [selectedDomain, setSelectedDomain] = useState({})
    const [flag, setFlag] = useState(false)

    const [domainArray, setDomainArray] = useState<{ domain_name: string, image_url: string }[]>([])

    const getDomains = async() => {
        try {
            const res = await instance({
                url: '/admin/domains',
                method: 'GET'
            })
            setDomainArray(res.data.domains)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDomains();
    }, [])

  return (

    <div className=" w-full flex m-0 p-0 bg-white">
        <div className="h-full fixed w-full bg-white">
            <PsNavbar />

            <div className="grid grid-cols-2 gap-4 h-full pb-24 px-4">

                {/* Domain Controllers */}
                <div className="p-2 h-full bg-white text-center col-span-1 border-r-4 border-purple-400">
                    <h2 className="font-bold text-xl text-black">Domain Controller</h2>
                    <hr className="my-2"/>

                    <div className="max-h-[30rem] overflow-y-auto">
                    
                    {domainArray.length != 0 ? <ul className="divide-y-2 text-start divide-purple-400 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-white">
                    {domainArray.map((item, index) => (
                        <div className="py-4 flex items-center justify-between" key={index}>
                            <div className="text-lg font-semibold text-violet-900 ml-4 hover:cursor-pointer" onClick={() => {setSelectedDomain(item); setFlag(true)}}>
                                <span className="rounded-full bg-white p-1 text-center mr-4">{index+1}&nbsp;</span>
                                {item.domain_name}
                            </div>
                            <Button onClick={() => {setSelectedDomain(item); setFlag(true)}} className="bg-purple-300">Edit</Button>
                        </div>
                    ))}
                    </ul> 
                    :
                        <div>
                            <h1 className="text-2xl font-semibold text-black">No Domains Found</h1>
                        </div>
                    }
                    </div>

                    <hr  className="my-2 text-purple-400" />

                    <div className="flex justify-center my-4 pt-2">
                        <Button className="font-semibold text-lg bg-purple-400 hover:cursor-pointer hover:bg-white hover:text-purple-700" variant="shadow" 
                        onClick={() =>setFlag(false)} 
                        >Create Domain</Button>
                    </div>

                </div>

                <div className="p-2 bg-white w-full col-span-1">
                    {
                        flag === false ? 
                        (
                            <div className="flex justify-center mt-16">
                                <DomainForm />
                            </div>
                        )
                        :
                        <div className="flex flex-col my-16 items-center">
                            <h1 className="text-4xl font-semibold text-center text-black bg-white mx-auto p-2 rounded-md">{(selectedDomain as { domain_name: string, image_url: string }).domain_name}</h1>
                            <img src={(selectedDomain as { domain_name: string, image_url: string }).image_url} alt="domainImg" className="mt-10 border-2 border-purple-400" width={200} height={200}/>

                            <div className="flex flex-col gap-4 mt-6">
                                <CSVForm domain={selectedDomain} />
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