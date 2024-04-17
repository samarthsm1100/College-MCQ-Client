import instance from "@/api/axios";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const CSVForm = ({domain}: any) => {

    const [file, setFile] = useState()

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0])        
    }

    const handleFileSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        if(file) formData.append('csvFile', file as File)
        try {
            const res = await instance({
                url: `/ps/upload/${domain.domain_id}`,
                method: 'POST',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }            
            })
            alert(res.data.msg);
            window.location.reload();
        }
        catch (error) {
            console.log(error);    
        }
    }


  return (
    <form onSubmit={handleFileSubmit} className="flex flex-col gap-4">
      <label className="text-xl font-semibold text-black">Upload CSV : </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-black rounded-md"
      />
      <Button
        type="submit"
        className="font-semibold text-lg bg-purple-400 border border-black hover:bg-white hover:cursor-pointer hover:text-purple-700"
        variant="bordered"
      >
        Add Questions
      </Button>
    </form>
  );
};
export default CSVForm;
