import React from "react";
import "./Garage.css";

const Garage = (props) => {
  const current = new Date();
  return (
    <>
      {props.gar.map((i) => {
        return (
          <div className="garage__contents">
            <h1> Name:{i.name}</h1>
            <h1> Plate:{i.number}</h1>
            <h1> Check in:{current.toLocaleString()}</h1>
          </div>
        );
      })}
    </>
  );
};
export default Garage;
