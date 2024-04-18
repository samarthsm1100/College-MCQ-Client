'use client'
import { Button } from "@nextui-org/react";
import NavigationBar from "../../../components/Navbar";

const Instruction: React.FC = () => {

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth() + 1).toString(); // Months start at 0!
    let dd = today.getDate().toString();

    if (dd < '10') dd = '0' + dd.toString();
    if (mm < '10') mm = '0' + mm.toString();

    const formattedToday = dd + '/' + mm + '/' + yyyy;

  return (
    <>
    <NavigationBar />
    <div className="mx-80 my-10 text-center">
        
        {/* Instructions */}
        <div className="h-[5rem] bg-purple-500">
            <h2 className="flex text-4xl justify-center pt-4 font-semibold">Instructions</h2>
        </div>

        {/* Slot Details */}
        <div className="mt-5">
            <p className="text-2xl font-semibold">Slot Details</p>
            <div className="flex justify-center">
                <ul className="mt-5 list-disc list-inside text-justify">
                    <li><span className="text-purple-500 font-semibold">Name: &nbsp;</span> C++ Exam</li>
                    <li><span className="text-purple-500 font-semibold">Date: &nbsp;</span> {formattedToday}</li>
                    <li><span className="text-purple-500 font-semibold">Duration: &nbsp;</span> 1 Hour</li>
                    <li><span className="text-purple-500 font-semibold">Total Questions: &nbsp;</span> 30</li>
                    <li><span className="text-purple-500 font-semibold">Total Marks: &nbsp;</span> 300</li>
                </ul>
            </div>
        </div>

        <div className="flex justify-center">
            <hr className="my-5 w-4/5"/>
        </div>

        {/* General Instructions */}
        <div className="">
            <p className="text-2xl font-semibold">General Instructions</p>
            <div className="flex justify-start">
                <div className="mx-auto">
                    <ul className="mt-5 list-disc list-inside text-justify">
                        <li>There are a total of 30 questions.</li>
                        <li>Each question carries 1 mark.</li>
                        <li>There is no negative marking.</li>
                        <li>Each question is of multiple choice type.</li>
                        <li>Each question has 4 options, out of which only one is correct.</li>
                        <li>Once you have selected an option, you can&apos;t change it.</li>
                        <li>Click on the &quot;Submit&quot; button to submit your answers.</li>
                    </ul>
                </div>
            </div>
        </div>    

        <div className="flex justify-center">
            <hr className="my-5 w-4/5"/>
        </div>

        <Button className="bg-purple-500 hover:cursor-pointer hover:bg-purple-700 font-semibold text-md">
            Start
        </Button>
    </div>
    </>
  )
}
export default Instruction