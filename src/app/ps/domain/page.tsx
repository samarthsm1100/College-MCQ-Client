/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@nextui-org/react"
import PsNavbar from "../../../../components/PsNavbar"
import { useEffect, useState } from "react";
import DomainForm from "../../../../components/DomainForm";
import PsDomainDelete from "../../../../components/PsDomainDelete";
import instance from "@/api/axios";
import { useRouter } from "next/navigation";
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
    const router = useRouter()
    
    const [selectedDomain, setSelectedDomain] = useState({})
    const [selectedFile, setSelectedFile] = useState(null)
    const [flag, setFlag] = useState(false)
    const [csv, setCsv] = useState(true)

    const handleFileChange = (e: any) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
        setCsv(false)
    }

    const handleFileSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData();
        if(selectedFile) formData.append("file", selectedFile)
        else{
            alert("No file selected")
            return
        }
        try {
            const res = await instance({
                url: '/ps/upload',
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                data: formData
            })
        } catch (error) {
            console.log(error)
        }
    }

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
    }, [domainArray])

  return (

    <div className=" w-full flex m-0 p-0 bg-slate-200">
        <div className="h-full fixed w-full bg-violet-300">
            <PsNavbar />

            <div className="grid grid-cols-2 gap-4 h-full pb-24 px-4">

                {/* Domain Controllers */}
                <div className="p-2 h-full bg-violet-400 text-center col-span-1">
                    <h2 className="font-bold text-xl text-black">Domain Controller</h2>
                    <hr className="my-2"/>

                    <div className="max-h-[30rem] overflow-y-auto">
                    
                    {domainArray.length != 0 ? <ul className="divide-y text-start divide-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-white">
                    {domainArray.map((item, index) => (
                        <div className="py-4 flex items-center" key={index}>
                            <div className="text-lg font-semibold text-violet-900 ml-4 hover:cursor-pointer" onClick={() => {setSelectedDomain(item); setFlag(true)}}>
                                <span className="rounded-full bg-white p-1 text-center mr-4">{index+1}&nbsp;</span>
                                {item.domain_name}
                            </div>
                        </div>
                    ))}
                    </ul> 
                    :
                        <div>
                            <h1 className="text-2xl font-semibold text-black">No Domains Found</h1>
                        </div>
                    }
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
                            <h1 className="text-4xl font-semibold text-center text-black bg-white mx-auto p-2 rounded-md">{(selectedDomain as { domain_name: string, image_url: string }).domain_name}</h1>
                            <img src={(selectedDomain as { domain_name: string, image_url: string }).image_url} alt="domainImg" className="mt-10 border-2 border-black" width={200} height={200}/>

                            <div className="flex flex-col gap-4 mt-6">
                                <form method="post" onSubmit={handleFileSubmit} className="flex flex-col gap-4">
                                    <label className="text-xl font-semibold text-black">Upload CSV : </label>
                                    <input type="file" onChange={handleFileChange} className="border border-black rounded-md"/>
                                    <Button type="submit" disabled={csv} className="font-semibold text-lg bg-purple-800 border border-black hover:bg-white hover:cursor-pointer hover:text-purple-700" variant="bordered">Add Questions</Button>
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