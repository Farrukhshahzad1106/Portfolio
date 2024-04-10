import React, { useState } from "react";

const ContactMe = () => {
  const initialFormData = {
    name: "",
    email: "",
    contactNo: '',
    subject: "",
    message: "",
  };
  const errorFormData = {
    email: "",
    contactNo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(errorFormData);

  function Validate(name, value) {
    switch (name) {
      case "email" : 
        break;
      case "contactNo":
        break;
      default :
        return ""
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "email" || name === "contactNo") {
      let errorData = Validate(name, value);
      setError({
        ...error,
        [error[name]]: errorData,
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="contactNo"> Contact Number </label>
          <input
            type="tel"
            id="contactNo"
            name='contactNo'
            onChange={handleChange}
            value={formData.contactNo}
          />
        </div>
        <div>
          <label htmlFor="subject"> Subject </label>
          <input
            type="text"
            id="subject"
            name='subject'
            onChange={handleChange}
            value={formData.subject}
          />
        </div>
        <div>
          <label htmlFor="message"> Message </label>
          <input
            type="text"
            id="message"
            name='message'
            onChange={handleChange}
            value={formData.message}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

//Entering all the Fields is Mandatory
//Validating the email and contactNo fields and setting errors is present
//Checking if email is of email type (although it can be achieved suing type='email' but will still validate using regex) and checking if the contact No is an indian Number
//Setting error and while submitting if an error is present it will not submit and notify usinig a toast
//if no error is present it will submit the form and notify a successfully submitted message using toast