import { Button } from "@nextui-org/react";
import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from 'yup';

type FormData = {
    domain_name: string;
    image_url: string;
};

const schema = yup.object().shape({
    domain_name: yup.string().required("Domain Name is required"),
    image_url: yup.mixed().required("Image URL is required")
});

const DomainForm = () => {
    const { register, handleSubmit, formState: { errors } }: UseFormReturn<FormData> = useForm();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 border-2 border-black rounded-md p-8">
                <label className="font-semibold text-xl text-black px-4">Domain Name</label>
                <input className="bg-white text-black w-4/5 mx-auto rounded-md h-8 px-2 font-semibold" type="text" {...register("domain_name")} />
                <p className="text-red-700">{errors.domain_name?.message}</p>
                <label className="font-semibold text-xl text-black px-4">Domain Image</label>
                <input className="bg-white text-black w-4/5 mx-auto" type="file" {...register("image_url")} />
                <p className="text-red-700">{errors.image_url?.message}</p>
                <Button className="w-2/5 mx-auto mt-4 font-semibold text-lg bg-purple-800 hover:cursor-pointer hover:bg-white hover:text-purple-700" variant="shadow" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default DomainForm;
