import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App({domain}: {domain: any}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="font-semibold text-lg bg-purple-800 border border-black hover:bg-white hover:cursor-pointer hover:text-purple-700" variant="bordered" onPress={onOpen}>Delete Domain</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm Delete</ModalHeader>
              <ModalBody>
                    <p className="text-lg">Deleting Domain : <span className="font-semibold">{domain.name}</span></p>
                    <p className="text-lg">Once deleted, can not be undone</p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary"  onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose}>
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
