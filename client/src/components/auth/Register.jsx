import React from "react";

export const Register = (props) => {
  return (
    <form>
      <label>Name:</label>
      <input type="text" />
      <label>E-mail:</label>
      <input type="text"/>
      <label>Password:</label>
      <input type="text" />
      <label>Confirm Password:</label>
      <input type="text"/>
      <button type="submit">register</button>
    </form>
  );


}