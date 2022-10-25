import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
const Home = (props) => {
  const [user, setUser] = useState({ name: "", number: "" });
  const navigate = useNavigate();

  const handleclick = (event) => {
    event.preventDefault();
    navigate("/garage");
    props.setgar([...props.gar, user]);
    setUser({ name: "", number: "" });
  };

  return (
    <div className="input">
      <form className="input__form">
        Drivers NAME:
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, name: event.target.value });
          }}
          value={user.name}
        />
        <br />
        <br />
        Car Number:{" "}
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, number: event.target.value });
          }}
          value={user.number}
        />
        <br />
        <br />
        <button className="input__button" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Home;
