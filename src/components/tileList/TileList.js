import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({ contacts, appointments, deleteTile }) => {

  const contactsFields = contacts.map( (contact) => {
    return ([
      {name: "Name", value: contact.name},
      {name: "Phone", value: contact.phone},
      {name: "Email", value: contact.email},
    ])
  })

  const appointmentsFields = appointments.map( (appointment) => {
    return ([
      {name: "Title", value: appointment.title},
      {name: "Date", value: appointment.date},
      {name: "Time", value: appointment.time},
      {name: "Contact", value: appointment.phone},
    ])
  })

  return (
    <div>
      <div>
        {
          contactsFields.map((fields, index) => {
            return (
              <Tile fields={fields} key={index} deleteTile={deleteTile} />
            )
          })
        }
      </div>
      <div>
        {
          appointmentsFields.map((fields, index) => {
            return (
              <Tile fields={fields} key={index} deleteTile={deleteTile}/>
            )
          })
        }
      </div>
    </div>
  );
};

