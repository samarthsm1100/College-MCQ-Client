"use client";
import { useState } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Import Axios
import toast from 'react-hot-toast';
import instance from '@/api/axios';
interface FormData
{
  email: string;
  user_password: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    user_password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await instance({
        url: "/user/login",
        method: "POST",
        data: formData
      })
      toast.success(response.data.message);
      router.push("/"); 
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex h-auto w-4/6 justify-center items-center space-y-4 shadow-md ring-2 ring-purple-600">
        <div className="space-x-8 w-1/2 h-full shadow-md overflow-hidden">
          <Image src="/quiz.jpg" removeWrapper className="h-full object-cover rounded-none" alt="temp" />
        </div>
        <div className="p-8 w-1/2 h-full shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome</h2>
          <form >
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                name="user_password"
                placeholder="Password"
                value={formData.user_password}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Button
                type="submit"
                variant="ghost"
                color="secondary"
                className="text-white px-4 py-2 rounded font-medium"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-500">
              Dont have an account yet?{' '}
              <Link href="./signup">
                <span className="text-purple-600 cursor-pointer">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
