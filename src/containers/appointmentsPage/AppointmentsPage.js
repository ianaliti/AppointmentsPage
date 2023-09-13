import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, addNewAppointment, deleteTile }) => {
  
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("Bla - " + contact);

    if(title !== '' && contact !== '' && date !== '' && time !== '') {
      const newAppointment = {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
      addNewAppointment(newAppointment);
      event.target.reset()
      setTitle('');
      setContact('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm contacts={contacts} handleSubmit={handleSubmit} setTitle={setTitle} setContact={setContact} setDate={setDate} setTime={setTime} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList contacts={[]} appointments={appointments} deleteTile={deleteTile}/>
      </section>
    </div>
  );
};