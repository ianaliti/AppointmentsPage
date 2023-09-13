import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { Tile } from "../../components/tile/Tile";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addNewContact, deleteTile }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    if(name !== '' && phone !== '' && email !== '') {
      const contact =  ({
        name: name,
        phone: phone,
        email: email
      })

      addNewContact(contact);
    };
    event.target.reset()
    setEmail('');
    setName('');
    setPhone('')
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
   
},[])


  return (
    <div>
      <section> 
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} setName={setName} setPhone={setPhone} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} appointments={[]} deleteTile={deleteTile} />
      </section>
    </div>
  );
};
