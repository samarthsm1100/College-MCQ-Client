'use client'

import { Button, Input, Link } from "@nextui-org/react"
import {useForm, UseFormReturn } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import instance from "@/api/axios"
import { useRouter } from "next/navigation";

type FormData = {
    first_name: string
    last_name: string
    phone: string
    email: string
    ps_password: string
}

const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone: yup.string().min(10, "Phone number must be 10 digits.").max(10,"Phone number must be 10 digits.").required("Phone is required"),
    email: yup.string().email().required("Email is required"),
    ps_password: yup.string().min(8, "Password should contain at least 8 characters.").required("Password is required")
})

const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } }: UseFormReturn<FormData> = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = async(data: FormData) => {
        console.log(data);
        try {
            const response = await instance({
              url: "/ps/signup",
              method: "POST",
              data: data
            })
            console.log(response);
            router.push("/ps/login"); 
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-3xl mb-8">Problem Setter Signup</div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 flex flex-col md:w-1/3 gap-4 border p-8 rounded-lg">
                <p className="mx-auto text-xl">SIGN UP</p>
                <Input variant="underlined" type="text" label="First Name" placeholder="Enter Your First Name" {...register("first_name")} />
                <p className="text-red-500 text-sm">{errors.first_name?.message}</p>
                <Input variant="underlined" type="text" label="Last Name" placeholder="Enter Your Last Name" {...register("last_name")} />
                <p className="text-red-500 text-sm">{errors.last_name?.message}</p>
                <Input variant="underlined" type="text" label="Phone" placeholder="Enter Your Phone" {...register("phone")} />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                <Input variant="underlined" type="email" label="Email" placeholder="Enter Your Email" {...register("email")} />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                <Input variant="underlined" type="password" label="Password" placeholder="Enter Your Password" {...register("ps_password")} />
                <p className="text-red-500 text-sm">{errors.ps_password?.message}</p>
                <Button type="submit" className="w-1/2 mx-auto">Submit</Button>
                <p className="mx-auto">Already have an account ? <Link href="login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup