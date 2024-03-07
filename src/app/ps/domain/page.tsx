import { Button } from "@nextui-org/react"
import {Chip, Avatar} from "@nextui-org/react";
import PsNavbar from "../../../../components/PsNavbar"
import Card from "../../../../components/Card"
import * as Yup from "yup";
import PsDomain from "../../../../components/PsDomain";

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

    const schema = Yup.object().shape({
        
    })



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
                        <div className="text-lg font-semibold text-violet-900 ml-4">
                            <span className="rounded-full bg-white p-1 text-center mr-4">{index+1}&nbsp;</span>
                            {item.name}
                        </div>
                        
                        </div>
                    ))}
                    </ul>


                    </div>

                    <hr className="my-2"/>

                    <div className="flex justify-center my-4 pt-2">
                        <Button className="font-semibold text-lg bg-purple-800 border border-black" variant="shadow">Create Domain</Button>
                    </div>

                </div>

                <div className="p-2 bg-violet-400 w-full col-span-1">
                        
                        <PsDomain domain={domain}/>

                </div>

            </div>
        </div>
    </div>
  )
}
export default ProblemSetter