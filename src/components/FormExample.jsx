import React, { useState } from "react";

export default function FormExample() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload after
    console.log(firstName, lastName, email);
    // clear the form
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
}
