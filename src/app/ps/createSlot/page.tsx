'use client'
import { Input, Button } from "@nextui-org/react"
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import PsNavbar from "../../../../components/PsNavbar"

//   slot_name:String,
//   start_time:String,
//   end_time:String,
//   total_question:Number,
//   easy:Number,
//   medium:Number,
//   hard:Number,
//   domain_name:String,



const CreateSlot: React.FC = () => {
  const router = useRouter()

  const onSubmit=async (values:any,errors:any)=>{
    console.log(values)
    console.log(errors)
    alert('New Slot created!');
    //send req to backend
  }

  const Schema = object().shape({
    slot_name: string().required("Required"),
    domain_name: string().required("Required"),
    start_time: string().required("Required"),
    end_time: string().required("Required"),
    total_question:string().required("Required"),
    easy:string().required("Required"),
    medium:string().required("Required"),
    hard:string().required("Required"),
  });
  
  const formik = useFormik({
    initialValues:{
      slot_name: "",
      domain_name: "",
      start_time: "",
      end_time: "",
      total_question:'',
      easy:'',
      medium:'',
      hard:''
    },
    validationSchema:Schema,
    onSubmit,
  });

  return (
    <>
    <PsNavbar/>
      <div className="flex justify-center items-center my-24">
        <div className="border rounded-xl p-6 border-purple-400">
          <form className="" onSubmit={(e)=>{
            e.preventDefault()
            const totalQuestion = document.getElementsByName("total_question")
            const easy = document.getElementsByName("easy")
            const medium = document.getElementsByName("medium")
            const hard = document.getElementsByName("hard")
            const start_time = document.getElementsByName("start_time")
            const end_time = document.getElementsByName("end_time")
            console.log(start_time)
            if(Number(totalQuestion[0].value) !== Number(easy[0].value)+Number(medium[0].value)+Number(hard[0].value))
            {
              alert("Total question count must be equal to sum of number easy, medium, hard level questions!")
            }
            else if(end_time[0].value <= start_time[0].value)
            {
              alert("Start time must be smaller than end time!")
            }
            else{
              formik.handleSubmit()
            }
            

          }}>
            <Input
              type="text"
              name="slot_name"
              label="Slot Name"
              labelPlacement="inside"
              value={formik.values.slot_name}
              onChange={formik.handleChange}
              description="ex., DSA Test"
              isInvalid=
              {formik.errors.slot_name && formik.touched.slot_name ? 
                true
                :false}
              errorMessage={formik.errors.slot_name && formik.touched.slot_name ? 
                "Required"
                :""}
            />
            
            <Input
              type="text"
              name="domain_name"
              label="Domain Name"
              labelPlacement="inside"
              value={formik.values.domain_name}
              onChange={formik.handleChange}
              description="ex., DSA"
              isInvalid=
              {formik.errors.domain_name && formik.touched.domain_name ? 
                true
                :false}
              errorMessage={formik.errors.domain_name && formik.touched.domain_name ? 
                "Required"
                :""}
            />
        
            <Input
              type="number"
              name="total_question"
              label="Total No. of Questions"
              labelPlacement="inside"
              value={formik.values.total_question}
              onChange={formik.handleChange}
              description="ex., 30"
              isInvalid=
              {formik.errors.total_question && formik.touched.total_question ? 
                true
                :false}
              errorMessage={formik.errors.total_question && formik.touched.total_question ? 
                "Required"
                :""}
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
                isInvalid=
              {formik.errors.easy && formik.touched.easy ? 
                true
                :false}
              errorMessage={formik.errors.easy && formik.touched.easy ? 
                "Required"
                :""}
              />
              <Input
                type="number"
                name="medium"
                label="Medium"
                labelPlacement="inside"
                value={formik.values.medium}
                onChange={formik.handleChange}
                description="ex., 15"
                isInvalid=
              {formik.errors.medium && formik.touched.medium ? 
                true
                :false}
              errorMessage={formik.errors.medium && formik.touched.medium ? 
                "Required"
                :""}
              />
              <Input
                type="number"
                name="hard"
                label="Hard"
                labelPlacement="inside"
                value={formik.values.hard}
                onChange={formik.handleChange}
                description="ex., 5"
                isInvalid=
              {formik.errors.hard && formik.touched.hard ? 
                true
                :false}
              errorMessage={formik.errors.hard && formik.touched.hard ? 
                "Required"
                :""}
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
                isInvalid=
              {formik.errors.start_time && formik.touched.start_time ? 
                true
                :false}
              errorMessage={formik.errors.start_time && formik.touched.start_time ? 
                "Required"
                :""}
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
                isInvalid=
              {formik.errors.end_time && formik.touched.end_time ? 
                true
                :false}
              errorMessage={formik.errors.end_time && formik.touched.end_time ? 
                "Required"
                :""}
              />
            </div>
            <div className="w-full flex justify-end mt-6 gap-6">
            <Button type="button" color="default" variant="solid" className="" onClick={()=> router.push("/")}>Cancel</Button>
            <Button type="submit" color="success" variant="solid" className="">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default CreateSlot;