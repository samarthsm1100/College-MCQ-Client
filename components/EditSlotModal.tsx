'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from "formik";


export default function EditSlotModal(slot:any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const onSubmit=async (values:any)=>{
    console.log(values)
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
      slot_name: slot.slot.slot_name,
      domain_name: slot.slot.domain_name,
      start_time: slot.slot.start_time,
      end_time: slot.slot.end_time,
      total_question:slot.slot.total_question,
      easy:slot.slot.easy,
      medium:slot.slot.medium,
      hard:slot.slot.hard
    },
    validationSchema:Schema,
    onSubmit,
  });

  return (
    <>
      <Button onPress={onOpen} color="default" variant="solid">Edit</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Slot</ModalHeader>
              <ModalBody>
                <div >
                    <form className="" onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        label="Slot Name"
                        name="slot_name"
                        labelPlacement="inside"
                        value={formik.values.slot_name}
                        onChange={formik.handleChange}
                        description="ex., DSA Test"
                        />
                    <Input
                        type="text"
                        label="Domain Name"
                        name="domain_name"
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
                        label="Easy"
                        name="easy"
                        labelPlacement="inside"
                        value={formik.values.easy}
                onChange={formik.handleChange}
                        description="ex., 10"
                        />
                        <Input
                        type="number"
                        label="Medium"
                        name="medium"
                        labelPlacement="inside"
                        value={formik.values.medium}
                onChange={formik.handleChange}
                        description="ex., 15"
                        />
                        <Input
                        type="number"
                        label="Hard"
                        name="hard"
                        labelPlacement="inside"
                        value={formik.values.hard}
                onChange={formik.handleChange}
                        description="ex., 5"
                        />
                        </div>
                        <div className="flex gap-8">
                        <Input
                        type="time"
                        label="Start time"
                        name="start_time"
                        labelPlacement="outside-left"
                        description="ex., 10:00"
                        placeholder=""
                        value={formik.values.start_time}
                onChange={formik.handleChange}
                        className="flex justify-start"
                        />
                        <Input
                        type="time"
                        label="End time"
                        name="end_time"
                        labelPlacement="outside-left"
                        description="ex., 13:00"
                        placeholder=""
                        value={formik.values.end_time}
                onChange={formik.handleChange}
                        className="flex justify-end"
                        />
                        </div>
                        <ModalFooter className="gap-6">
                      <Button type="submit" color="default" variant="solid" onPress={onClose}>
                        Cancel
                      </Button>
                      <Button color="success" variant="solid" onPress={onClose}>
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