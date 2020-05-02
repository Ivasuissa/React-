import React from "react";

const Form = props => (
  <ul>
    {props.listMessages.map((mess, index) => (
      <li key={index}>Message: {mess}</li>
    ))}
  </ul>
);
export default Form;

