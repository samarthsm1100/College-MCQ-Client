'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import instance from "@/api/axios";
import { useRouter } from "next/navigation";

export default function DeleteSlotModal({slot_id}:any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router = useRouter()
  const handleDelete =async ()=>{
    try {
      const res = await instance({
        url:`/ps/slot/${slot_id}`,
        method:"DELETE"
      })
      router.push("/ps/activeSlots")
      console.log("slot deleted")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Button onPress={onOpen} color="danger" variant="ghost">Delete</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Are you sure?</ModalHeader>
              <ModalBody>
                <p> 
                  Are you sure want to delete slot? Once deleted cannot be undone.
                </p>
                
              </ModalBody>
              <ModalFooter className="gap-6">
                <Button color="default" variant="shadow" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" variant="ghost" onPress={onClose} onClick={()=>{handleDelete()}}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}