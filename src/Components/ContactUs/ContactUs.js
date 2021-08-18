import React, { useState } from "react";
import "./ContactUs.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="formcontainer">
      <div className="contentrow">
        <label className="name" htmlFor="name">Name:</label>
        <input className="nameinput" type="text" id="name" required />
      </div>
      <div className="contentrow">
        <label className="name" htmlFor="email">Email:</label>
        <input className="emailinput" type="email" id="email" required />
      </div>
      <div className="contentrow">
        <label className="name" htmlFor="message">Message:</label>
        <textarea className="messageinput" id="message" required />
      </div>
      <button type="submitbutton">{status}</button>
    </form>
  );
};

export default ContactForm;