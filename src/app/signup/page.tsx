"use client";
import { useState } from "react";
import { Input, Button,Image } from "@nextui-org/react";
import Link from "next/link"
import toast from 'react-hot-toast';
import instance from "@/api/axios";
import { useRouter } from "next/navigation";

interface FormData
{
  first_name: string;
  last_name: string;
  roll_no: string;
  phone: string;
  year: string;
  department: string;
  division: string;
  email: string;
  user_password: string;
}

const Signup: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    roll_no: '',
    phone: '',
    year: '',
    department: '',
    division: '',
    email: '',
    user_password: ''
  });

  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");
  // const [roll_no, setRollNo] = useState("");
  // const [phone, setPhoneNo] = useState("");
  // const [year, setYear] = useState("");
  // const [department, setDept] = useState("");
  // const [division, setDivision] = useState("");
  // const [email, setEmail] = useState("");
  // const [user_password, setUserPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Handle signup logic here (e.g., send a request to your server to create a new user)
    try {
      const response = await instance({
        url: "/user/signup",
        method: "POST",
        data: formData
      })
      toast.success(response.data.message);
      router.push("/signin"); 
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
    }
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
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                name="roll_no"
                placeholder="Roll No"
                value={formData.roll_no}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                name="division"
                placeholder="Division"
                value={formData.division}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                name="year"
                placeholder="Year"
                value={formData.year}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone No"
                value={formData.phone}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                size="sm"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <Input
                type="password"
                name="user_password"
                placeholder="Password"
                value={formData.user_password}
                size="sm"
                onChange={handleChange}
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
