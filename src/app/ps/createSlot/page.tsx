'use client'
import { Input, Button } from "@nextui-org/react"
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from "formik";

//   slot_name:String,
//   start_time:String,
//   end_time:String,
//   total_question:Number,
//   easy:Number,
//   medium:Number,
//   hard:Number,
//   domain_name:String,



const CreateSlot: React.FC = () => {

  const onSubmit=async (values:any)=>{
    console.log(values)
    alert('New Slot created!');
    //send req to backend
  }

  const Schema = object().shape({
    slot_name: string().required(),
    domain_name: string().required(),
    start_time: string().required(),
    end_time: string().required(),
    total_question:string().required(),
    easy:string().required(),
    medium:string().required(),
    hard:string().required(),
  });
  
  const formik = useFormik({
    initialValues:{
      slot_name: "",
      domain_name: "",
      start_time: "",
      end_time: "",
      total_question:'0',
      easy:'0',
      medium:'0',
      hard:'0'
    },
    validationSchema:Schema,
    onSubmit,
  });

  return (
    <>
      <div className="flex justify-center items-center my-24">
        <div className="border rounded-xl p-6 border-purple-400">
          <form className="" onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              name="slot_name"
              label="Slot Name"
              labelPlacement="inside"
              value={formik.values.slot_name}
              onChange={formik.handleChange}
              description="ex., DSA Test"
            />
            <Input
              type="text"
              name="domain_name"
              label="Domain Name"
              labelPlacement="inside"
              value={formik.values.domain_name}
              onChange={formik.handleChange}
              description="ex., DSA"
            />
            <Input
              type="number"
              name="total_question"
              label="Total No. of Questions"
              labelPlacement="inside"
              value={formik.values.total_question}
              onChange={formik.handleChange}
              description="ex., 30"
            />
            <div className="flex gap-4">
              <Input
                type="number"
                name="easy"
                label="Easy"
                labelPlacement="inside"
                value={formik.values.easy}
                onChange={formik.handleChange}
                description="ex., 10"
              />
              <Input
                type="number"
                name="medium"
                label="Medium"
                labelPlacement="inside"
                value={formik.values.medium}
                onChange={formik.handleChange}
                description="ex., 15"
              />
              <Input
                type="number"
                name="hard"
                label="Hard"
                labelPlacement="inside"
                value={formik.values.hard}
                onChange={formik.handleChange}
                description="ex., 5"
              />
            </div>
            <div className="flex gap-8">
              <Input
                type="time"
                name="start_time"
                label="Start time"
                labelPlacement="outside-left"
                description="ex., 10:00"
                placeholder=""
                value={formik.values.start_time}
                onChange={formik.handleChange}
                className="flex justify-start"
              />
              <Input
                type="time"
                name="end_time"
                label="End time"
                labelPlacement="outside-left"
                description="ex., 13:00"
                placeholder=""
                value={formik.values.end_time}
                onChange={formik.handleChange}
                className="flex justify-end"
              />
            </div>
            <div className="w-full flex justify-end mt-6 gap-6">
            <Button type="button" color="default" variant="solid" className="">Cancel</Button>
            <Button type="submit" color="success" variant="solid" className="">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default CreateSlot;