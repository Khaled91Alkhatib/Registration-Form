import React, { useState } from "react";
import "./MyForm.css";

export const MyForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [warning, setWarning] = useState(false);
  const [validSubmission, setValidSubmission] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (userInfo.firstName && userInfo.lastName && userInfo.email) {
      setValidSubmission(true);
    }
    setWarning(true);
  };

  return (
    <form className="form" onSubmit={handleRegister}>
      <div className="title">Registration Form</div>
      {warning && validSubmission ? (
        <div className="thank-you">Thank you for registering!</div>
      ) : (
        <>
          <input
            placeholder="First name"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          {warning && !userInfo.firstName ? (
            <span>Please enter your first name!</span>
          ) : null}
          <input
            placeholder="Last name"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
          {warning && !userInfo.lastName ? (
            <span>Please enter your last name!</span>
          ) : null}
          <input
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          {warning && !userInfo.email ? (
            <span>Please enter your email!</span>
          ) : null}
          <button type="submit">Sign Up</button>
        </>
      )}
    </form>
  );
};
