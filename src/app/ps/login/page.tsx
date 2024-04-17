'use client'

import { Button, Input, Link } from "@nextui-org/react"
import {useForm, UseFormReturn } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import instance from "@/api/axios"
import { useRouter } from "next/navigation";

type FormData = {
    email: string
    ps_password: string
}

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    ps_password: yup.string().min(8, "Password should contain at least 8 characters.").required("Password is required")
})

const Login = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } }: UseFormReturn<FormData> = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = async(data: FormData) => {
        console.log(data);
        try {
            const response = await instance({
              url: "/ps/login",
              method: "POST",
              data: data
            })
            console.log(response);
            const accessToken = response.data.token
            localStorage.setItem('token',accessToken)
            router.push("/ps/domain"); 
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-3xl mb-8">Problem Setter Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 flex flex-col md:w-1/3 gap-4 border p-8 rounded-lg">
                <p className="mx-auto text-xl">LOGIN</p>
                <Input variant="underlined" type="email" label="Email" placeholder="Enter Your Email" {...register("email")} />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                <Input variant="underlined" type="password" label="Password" placeholder="Enter Your Password" {...register("ps_password")} />
                <p className="text-red-500 text-sm">{errors.ps_password?.message}</p>
                <Button type="submit" className="w-1/2 mx-auto">Submit</Button>
                <p className="mx-auto">Do not have account ? <Link href="signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login