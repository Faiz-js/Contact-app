import { deleteDoc, doc, addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase-config";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import Form from "./Form";

export default function ContactCard({ contact }) {
  const { isOpen, onClose, toggle } = useModal();

  const deleteContacts = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between items-center bg-stone-700 my-2 p-1 rounded-md"
      >
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-red-500 w-10 h-10" />
          <div>
            <h1 className="text-xl font-semibold">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="space-x-4">
          <button
            className="bg-green-500 px-3 py-2 rounded-md"
            onClick={toggle}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-3 py-2 rounded-md"
            onClick={() => deleteContacts(contact.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Form isUpdate />
      </Modal>
    </>
  );
}
