'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function EditSlotModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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

                    </form>
                </div>
              
                
              </ModalBody>
              <ModalFooter className="gap-6">
                <Button color="default" variant="solid" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant="solid" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}