import React from "react";

export const Tile = ({ fields, deleteTile }) => {

  
  return (
    <div className="tile-container">
      <div>
        {
          fields.map((field, index) => {
            return (
              <div>
              <p className="tile" key={index}>{field.name}: {field.value}</p>
              <button>Edit</button>
              <button onClick={deleteTile(field.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
      <div>
        <button>Edit</button>
        <button onClick={deleteTile}>Delete</button>
      </div>
    </div>
  );
};
