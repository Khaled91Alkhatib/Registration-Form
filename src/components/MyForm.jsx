import React, { useState } from "react";

export const MyForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="form">
      <input
        placeholder="Write your first name"
        name="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
      />
      <input
        placeholder="Write your last name"
        name="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
      />
      <input
        placeholder="Write your email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <button>Sign Up</button>
    </div>
  );
};
