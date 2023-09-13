import React from "react";

export const ContactPicker = ({contacts, contact, setContact}) => {

  console.log(contact)

  const contactPhone = contacts.map((contact) => {
    return contact.phone
  });

  const pushContact = (contactPhone) => {
    setContact('contactPhone')
  }

  // pushContact()

  return (
    <select 
        value={contact}
        defaultValue={'No Contact Selected'}
        >
    {
    contacts.map((contact) => (
      <option value={pushContact}>{contact.name}</option>
    ))
    }
    </select>
  );
};
