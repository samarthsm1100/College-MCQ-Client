"use client";
import { useState } from "react";
import { Input, Button,Image } from "@nextui-org/react";
import Link from "next/link"

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [division, setDivision] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle signup logic here (e.g., send a request to your server to create a new user)

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Roll No:", rollNo);
    console.log("Phone No:", phoneNo);
    console.log("Year:", year);
    console.log("Department:", dept);
    console.log("Division:", division);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex h-auto w-4/6 justify-center items-center space-y-4 shadow-md ring-2 ring-purple-600">
      <div className="space-x-8 w-1/2 h-full shadow-md overflow-hidden ">
        <Image src="/signup.svg" removeWrapper height={5} className=" object-cover rounded-none" alt="temp" />
      </div>
      <div className="p-8 w-1/2  shadow-md rounded-lg  ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                size="sm"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                size="sm"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Roll No"
                value={rollNo}
                size="sm"
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Division"
                value={division}
                size="sm"
                onChange={(e) => setDivision(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Year"
                value={year}
                size="sm"
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Department"
                value={dept}
                size="sm"
                onChange={(e) => setDept(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="tel"
                placeholder="Phone No"
                value={phoneNo}
                size="sm"
                onChange={(e) => setPhoneNo(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                size="sm"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                size="sm"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <Button
              type="submit"
              variant="shadow"
              color="secondary"
              className="text-white px-4 py-2 rounded font-medium"
            >
              Sign Up
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500"> Already have account?<Link href="/signin"><span className="text-purple-600 cursor-pointer">Sign In</span></Link></p>
          </div>
        </form>
      </div>
      </div> 
    </div>
  );
};

export default Signup;
