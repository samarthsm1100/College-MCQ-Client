import { Input, Button } from "@nextui-org/react"
import { object, string, number, date, InferType } from 'yup';


//   slot_name:String,
//   start_time:String,
//   end_time:String,
//   total_question:Number,
//   easy:Number,
//   medium:Number,
//   hard:Number,
//   domain_name:String,

const Schema = object({
  slot_name: string().required(),
  domain_name: string().required(),
  start_time: string().required(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

const CreateSlot: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center my-24">
        <div className="border rounded-xl p-6 border-purple-400">
          <form className="">
            <Input
              type="text"
              label="Slot Name"
              labelPlacement="inside"
              description="ex., DSA Test"
            />
            <Input
              type="text"
              label="Domain Name"
              labelPlacement="inside"
              description="ex., DSA"
            />
            <Input
              type="number"
              label="Total No. of Questions"
              labelPlacement="inside"
              description="ex., 30"
            />
            <div className="flex gap-4">
              <Input
                type="number"
                label="Easy"
                labelPlacement="inside"
                description="ex., 10"
              />
              <Input
                type="number"
                label="Medium"
                labelPlacement="inside"
                description="ex., 15"
              />
              <Input
                type="number"
                label="Hard"
                labelPlacement="inside"
                description="ex., 5"
              />
            </div>
            <div className="flex gap-8">
              <Input
                type="time"
                label="Start time"
                labelPlacement="outside-left"
                description="ex., 10:00"
                placeholder=""
                className="flex justify-start"
              />
              <Input
                type="time"
                label="End time"
                labelPlacement="outside-left"
                description="ex., 13:00"
                placeholder=""
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
export default CreateSlot