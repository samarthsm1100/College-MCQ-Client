'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function DeleteSlotModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleDelete =()=>{
    
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