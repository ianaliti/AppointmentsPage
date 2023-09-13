import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import { ContactForm } from "./components/contactForm/ContactForm";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addNewContact = (contact) => {

    console.log("contact - " + contact)
    setContacts([
      ...contacts,
      contact])
    // console.log(contacts)

  }

  const addNewAppointment = (appointment) => {
    setAppointments([
      ...appointments,
      appointment])
      console.log(appointments)
  }

  const deleteTile = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
    console.log('work')
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addNewContact={addNewContact} deleteTile={deleteTile} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} addNewAppointment={addNewAppointment} deleteTile={deleteTile} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
