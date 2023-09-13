import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' 
             placeholder='Name' 
             onChange={(e) => setName(e.target.value)}
             value={name}
          />
      <input type='tel' 
             placeholder='Number' 
             onChange={(e) => setPhone(e.target.value)}
             value={phone}
             />
      <input type='email' 
             placeholder='Email' 
             onInput={(e) => {
              setEmail(e.target.value)
            }}
             value={email}
             /> 
      <button type='submit'>Submit</button>
    </form>
  );
};
