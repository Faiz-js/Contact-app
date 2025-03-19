import React, { useState } from "react";

export default function Form({ isUpdate, addContact }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">
        {isUpdate ? "Update" : "Add new"} Contact
      </h2>
      <Input
        label="name"
        type="text"
        id="name-input"
        value={contactData.name}
        onChange={(value) => setContactData({ ...contactData, name: value })}
      />
      <Input
        label="email"
        type="email"
        id="email-input"
        value={contactData.email}
        onChange={(value) => setContactData({ ...contactData, email: value })}
      />
      <button
        className="bg-blue-500 w-full p-2 rounded-lg"
        onClick={() => addContact(contactData)}
      >
        {isUpdate ? "Update" : "Add"} Contact
      </button>
    </div>
  );
}

const Input = ({ label, type, id, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        id={id}
        name={label}
        placeholder={`Enter your ${label}`}
        className="p-2 rounded-lg border border-white outline-none"
      />
    </div>
  );
};
