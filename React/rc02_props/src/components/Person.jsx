import React from "react";
import Clock from "./Clock";
import Message from "./Message";

function Person({ name, img, tel }) {
  //   const { name, img, tel } = props;
  return (
    <div>
      <Message ad={name} />
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h3>{tel}</h3>
      <Clock/>
    </div>
  );
}

export default Person;
