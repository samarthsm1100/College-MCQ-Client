"use client";
import { useState } from 'react';
import { Input, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface FormData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEmailValid) {
      if (formData.email === 'asp21k@outlook.com' && formData.password === 'asp21k') {
        toast.success('Login successful'); // Show success toast
        router.push('/');
        return;
      }

      toast.error('Invalid email or password'); // Show error toast
    } else {
      console.error('Invalid email');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsEmailValid(isValid);
    setFormData((prevData) => ({ ...prevData, email }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData((prevData) => ({ ...prevData, password }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex h-auto w-4/6 justify-center items-center space-y-4 shadow-md ring-2 ring-purple-600">
        <div className="space-x-8 w-1/2 h-full shadow-md overflow-hidden">
          <Image src="/quiz.jpg" removeWrapper className="h-full object-cover rounded-none" alt="temp" />
        </div>
        <div className="p-8 w-1/2 h-full shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleEmailChange}
                className={`w-full p-2 rounded ${isEmailValid ? '' : 'border-red-500'}`}
              />
              {!isEmailValid && (
                <p className="text-red-500 text-sm">Please enter a valid email address.</p>
              )}
            </div>

            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handlePasswordChange}
                className="w-full p-2 rounded"
              />
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Button
                type="submit"
                variant="ghost"
                color="secondary"
                className="text-white px-4 py-2 rounded font-medium"
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
