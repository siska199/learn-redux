import React, { useState } from "react";

const Form = () => {
  // ----------Variable Section ------------//
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    address: "",
    photo: "",
  });

  // -----------Handler Section-------------//
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="my-auto border-2 p-4 flex flex-col items-center">
      <div className="input-container">
        <input
          className="input peer"
          onChange={(e) => handleOnChange(e)}
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <label className="label peer-valid:block" htmlFor="email">
          Email
        </label>
      </div>
      <div className="input-container">
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handleOnChange(e)}
          className="input peer"
          required

        />
        <label className="label peer-valid:block" htmlFor="password">
          Password
        </label>
      </div>
      <div className="input-container">
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="input peer"
          onChange={(e) => handleOnChange(e)}
          required

        />
        <label className="label peer-valid:block" htmlFor="username">
          Username
        </label>
      </div>
      <div className="input-container">
        <input
          className="input peer"
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => handleOnChange(e)}
          required

        />
        <label className="label peer-valid:block" htmlFor="name">
          Name
        </label>
      </div>
      <div className="input-container">
        <input
          className="input peer"
          name="address"
          type="text"
          placeholder="Address"
          onChange={(e) => handleOnChange(e)}
          required

        />
        <label className="label peer-valid:block" htmlFor="address">
          Address
        </label>
      </div>
      <div className="input-container">
        <input
          className="input"
          name="photo"
          type="file"
          accept="image/*"
          onChange={(e) => handleOnChange(e)}
        />
        <label className="label" htmlFor="photo">
          Phoo
        </label>
      </div>
      <button
        className=" text-white font-semibold text-[1.2rem] bg-[#ff4c29] p-2 w-[10rem] rounded-lg"
        type="submit"
        onClick={(e) => handleSubmitForm(e)}
      >
        Add User
      </button>
    </form>
  );
};
export default Form;
