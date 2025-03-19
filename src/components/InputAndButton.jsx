import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase-config";
import Modal from "./Modal";
import Form from "./Form";
import useModal from "../hooks/useModal";

export default function InputAndButton() {
  const { isOpen, onClose, toggle } = useModal();

  const addContact = async (contactData) => {
    try {
      if (!contactData.name || !contactData.email) {
        alert("Please fill all fields");
        return;
      }

      await addDoc(collection(db, "contacts"), contactData);
      console.log("Contact added successfully");
      onClose();
    } catch (error) {
      console.error("Error adding contact:", error);
      alert("Error adding contact");
    }
  };

  return (
    <>
      <div className="w-full my-4">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search contact..."
            className="border border-white text-white rounded-md w-full p-2 outline-none"
          />
          <button
            onClick={toggle}
            className="bg-blue-500 text-white rounded-r-md h-full px-6 absolute right-0"
          >
            Add
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Form addContact={addContact} />
      </Modal>
    </>
  );
}
