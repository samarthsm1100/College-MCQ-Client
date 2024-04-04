'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { object, string, array,number, date, InferType } from 'yup';
import { useFormik } from "formik";
import instance from "@/api/axios";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { useState,useEffect } from "react";

export default function EditSlotModal(slot: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [classes,setClasses] = useState([])
  const [year,setYear] = useState("")
  const [domains,setDomains] = useState([])
  const [fkDomain,setFkDomain] = useState(new Set([]))

  const getDomains = async()=>{
    try {
      const response = await instance({
        url: "/admin/domains/",
        method: "GET"
      })
      console.log(response);
      setDomains(response.data.domains);
    } catch (error) {
      console.error(error);
    }
  }

  const onSubmit = async (values: any) => {
    const allClasses = classes.map((cls)=>{
      return year+cls;
    })

    let domainName;
     for(let i=0;i<domains.length;i++){
      if(domains[i].domain_id===fkDomain.currentKey)
      {
        domainName = domains[i].domain_name
        break
      }
    }
    console.log(domainName)
    values.domain_name = domainName
    values.fk_domain = Number(fkDomain.currentKey)
    values.class_names = allClasses
    console.log(values)
    
    try {
      const response = await instance({
        url: `/ps/slot/${slot.slot.slot_id}`,
        method: "PUT",
        data: values
      })
      console.log(response);
      alert('Slot updated successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  const Schema = object().shape({
    slot_name: string().required("Required"),
    domain_name: string(),
    start_time: string().required("Required"),
    end_time: string().required("Required"),
    total_question: string().required("Required"),
    easy: string().required("Required"),
    medium: string().required("Required"),
    hard: string().required("Required"),
    class_names:array().of(string()),
    fk_domain:string()
  });

  const formik = useFormik({
    initialValues: {
      slot_name: slot.slot.slot_name,
      domain_name: slot.slot.domain_name,
      start_time: slot.slot.start_time,
      end_time: slot.slot.end_time,
      total_question: slot.slot.total_question,
      easy: slot.slot.easy,
      medium: slot.slot.medium,
      hard: slot.slot.hard,
      class_names:slot.class_names,
      fk_domain:slot.fk_domain
    },
    validationSchema: Schema,
    onSubmit,
  });

  useEffect(()=>{
    getDomains()
  }
  ,[])

  return (
    <>
      <Button onPress={onOpen} color="default" variant="solid">Edit</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Slot</ModalHeader>
              <ModalBody>
                <div >
                  <form className="" onSubmit={(e) => {
                    e.preventDefault()
                    const totalQuestion = document.getElementsByName("total_question")
                    const easy = document.getElementsByName("easy")
                    const medium = document.getElementsByName("medium")
                    const hard = document.getElementsByName("hard")
                    const start_time = document.getElementsByName("start_time")
                    const end_time = document.getElementsByName("end_time")
                    console.log(start_time)
                    if (Number(totalQuestion[0].value) !== Number(easy[0].value) + Number(medium[0].value) + Number(hard[0].value)) {
                      alert("Total question count must be equal to sum of number easy, medium, hard level questions!")
                    }
                    else if (end_time[0].value < start_time[0].value) {
                      alert("Start time must be smaller than end time!")
                    }
                    else {
                      formik.handleSubmit()
                    }

                  }}>
                    <Input
                      type="text"
                      label="Slot Name"
                      name="slot_name"
                      labelPlacement="inside"
                      value={formik.values.slot_name}
                      onChange={formik.handleChange}
                      description="ex., DSA Test"
                      isInvalid=
                      {formik.errors.slot_name && formik.touched.slot_name ?
                        true
                        : false}
                      errorMessage={formik.errors.slot_name && formik.touched.slot_name ?
                        "Required"
                        : ""}
                    />
                    {/* <Input
                      type="text"
                      label="Domain Name"
                      name="domain_name"
                      labelPlacement="inside"
                      value={formik.values.domain_name}
                      onChange={formik.handleChange}
                      description="ex., DSA"
                      isInvalid=
                      {formik.errors.domain_name && formik.touched.domain_name ?
                        true
                        : false}
                      errorMessage={formik.errors.domain_name && formik.touched.domain_name ?
                        "Required"
                        : ""}
                    /> */}
                     <Select
                label="Select Domain"
                name="fk_domain"
                selectedKeys={fkDomain}
                className="pb-4"
                onSelectionChange={setFkDomain}
              >
                {domains.map((domain) => (
                  <SelectItem key={domain.domain_id} value={domain.domain_id}>
                    {domain.domain_name}
                  </SelectItem>
                ))}
              </Select>
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
                        : false}
                      errorMessage={formik.errors.total_question && formik.touched.total_question ?
                        "Required"
                        : ""}
                    />
                    <div className="flex gap-4">
                      <Input
                        type="number"
                        label="Easy"
                        name="easy"
                        labelPlacement="inside"
                        value={formik.values.easy}
                        onChange={formik.handleChange}
                        description="ex., 10"
                        isInvalid=
                        {formik.errors.easy && formik.touched.easy ?
                          true
                          : false}
                        errorMessage={formik.errors.easy && formik.touched.easy ?
                          "Required"
                          : ""}
                      />
                      <Input
                        type="number"
                        label="Medium"
                        name="medium"
                        labelPlacement="inside"
                        value={formik.values.medium}
                        onChange={formik.handleChange}
                        description="ex., 15"
                        isInvalid=
                        {formik.errors.medium && formik.touched.medium ?
                          true
                          : false}
                        errorMessage={formik.errors.medium && formik.touched.medium ?
                          "Required"
                          : ""}
                      />
                      <Input
                        type="number"
                        label="Hard"
                        name="hard"
                        labelPlacement="inside"
                        value={formik.values.hard}
                        onChange={formik.handleChange}
                        description="ex., 5"
                        isInvalid=
                        {formik.errors.hard && formik.touched.hard ?
                          true
                          : false}
                        errorMessage={formik.errors.hard && formik.touched.hard ?
                          "Required"
                          : ""}
                      />
                    </div>
                    <div className="flex gap-8">
                      <Input
                        type="datetime-local"
                        label="Start time"
                        name="start_time"
                        labelPlacement="outside-left"
                        description="ex., 10:00"
                        placeholder=""
                        value={formik.values.start_time}
                        onChange={formik.handleChange}
                        className="flex justify-start"
                        isInvalid=
                        {formik.errors.start_time && formik.touched.start_time ?
                          true
                          : false}
                        errorMessage={formik.errors.start_time && formik.touched.start_time ?
                          "Required"
                          : ""}
                      />
                      <Input
                        type="datetime-local"
                        label="End time"
                        name="end_time"
                        labelPlacement="outside-left"
                        description="ex., 13:00"
                        placeholder=""
                        value={formik.values.end_time}
                        onChange={formik.handleChange}
                        className="flex justify-end"
                        isInvalid=
                        {formik.errors.end_time && formik.touched.end_time ?
                          true
                          : false}
                        errorMessage={formik.errors.end_time && formik.touched.end_time ?
                          "Required"
                          : ""}
                      />
                    </div>
                    <RadioGroup
              label="Select class"
              orientation="horizontal"
              value={year}
              onValueChange={setYear}
              className="my-2"
            >
              <Radio value="FE">FE</Radio>
              <Radio value="SE">SE</Radio>
              <Radio value="TE">TE</Radio>
              <Radio value="BE">BE</Radio>
            </RadioGroup>
            <CheckboxGroup
              label="Select applicable divisions"
              name="class_names"
              orientation="horizontal"
              color="secondary"
              defaultValue={[]}
              className="my-2"
              value={classes}
              onValueChange={setClasses}
            >
              <div className="grid grid-cols-7 w-full">
              
                <Checkbox value="1">1</Checkbox>
                <Checkbox value="2">2</Checkbox>
                <Checkbox value="3">3</Checkbox>
                <Checkbox value="4">4</Checkbox>
                <Checkbox value="5">5</Checkbox>
                <Checkbox value="6">6</Checkbox>
                <Checkbox value="7">7</Checkbox>
                <Checkbox value="8">8</Checkbox>
                <Checkbox value="9">9</Checkbox>
                <Checkbox value="10">10</Checkbox>
                <Checkbox value="11">11</Checkbox>
                <Checkbox value="12">12</Checkbox>
                <Checkbox value="13">13</Checkbox>
              </div>

            </CheckboxGroup>
                    <ModalFooter className="gap-6">
                      <Button color="default" variant="solid" onPress={onClose}>
                        Cancel
                      </Button>
                      <Button type="submit" color="success" variant="solid" onPress={onClose}>
                        Save
                      </Button>
                    </ModalFooter>
                  </form>
                </div>


              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}