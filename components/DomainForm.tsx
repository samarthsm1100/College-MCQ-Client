import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from 'yup';
import { storage } from '../src/firebase'; // Import the Firebase instance
import {v4} from 'uuid';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { ref } from 'firebase/storage';

type FormData = {
    domain_name: string;
    image_url: string;
};

const schema = yup.object().shape({
    domain_name: yup.string().required("Domain Name is required"),
    image_url: yup.mixed().required("Image URL is required")
});

const DomainForm = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); 
    const [disable, setDisable] = useState(true);

    const handleChange = (e: any) => {
        e.preventDefault(); 
        setImageUpload(e.target.files[0]);
        setTimeout(() => {
            console.log("handleChange");
        }, 1000*10);
    }

    useEffect(() => {
        if (imageUpload) {
            handleUpload();
            const timerId = setTimeout(() => {
                console.log("Image upload handled after 5 seconds");
            }, 5000);

            return () => clearTimeout(timerId);
        }
    }, [imageUpload]);

    const handleUpload = () => {
        
        if (imageUpload) {
            const imageName = `mcq/domain/${imageUpload.name + v4()}`;
            const imageRef = ref(storage, imageName);
            // console.log(imageName);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setImageUrl(downloadURL);
                })
            });
            setTimeout(() => {
                setDisable(false);
            }, 1000*5);
        }

    };

    const { register, handleSubmit, formState: { errors } }: UseFormReturn<FormData> = useForm();

    const onSubmit = (data: FormData) => {
        data.image_url = imageUrl;
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 border-2 border-black rounded-md p-8">
                <label className="font-semibold text-xl text-black px-4">Domain Name</label>
                <input className="bg-white text-black w-4/5 mx-auto rounded-md h-8 px-2 font-semibold" type="text" {...register("domain_name")} />
                <p className="text-red-700">{errors.domain_name?.message}</p>
                <label className="font-semibold text-xl text-black px-4">Domain Image</label>
                <input className="bg-white text-black w-4/5 mx-auto" type="file" onChange={handleChange} />
                <p className="text-red-700">{errors.image_url?.message}</p>
                <Button className="w-2/5 mx-auto mt-4 font-semibold text-lg bg-purple-800 hover:cursor-pointer hover:bg-white hover:text-purple-700" variant="shadow" isDisabled={disable} type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default DomainForm;
