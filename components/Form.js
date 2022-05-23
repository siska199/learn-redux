import React, { useState, useRef } from "react";
import { addUser } from "../redux/features/user";
import { useDispatch } from "react-redux";
const Form = () => {
  // ----------Variable Section ------------//
  const imageInputRef = useRef(null);
  const dispatch = useDispatch();

  const initialValueForm = {
    email: "",
    password: "",
    username: "",
    name: "",
    address: "",
    photo: "",
  };
  const [formData, setFormData] = useState(initialValueForm);
  const [urlImage, setURlImage] = useState(null);
  // -----------Handler Section-------------//
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name == "photo" ? e.target.files[0] : e.target.value,
    });
    if (e.target.name == "photo" && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvenet) => {
        setURlImage(readerEvenet.target.result);
      };
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addUser({ ...formData, urlImage }));
    setFormData(initialValueForm);
    setURlImage(null);
  };

  return (
    <div>
      <h1 className="text-white text-[2rem] text-center font-semibold mb-2">
        Add User
      </h1>
      <form className="my-auto border-2 rounded-[3rem] p-4 flex flex-col items-center w-[20rem]">
        <div className="input-container">
          <input
            className="input peer"
            onChange={(e) => handleOnChange(e)}
            name="email"
            type="text"
            placeholder="Email"
            required
            value={formData.email}
          />
          <label
            className="label peer-placeholder-shown:hidden"
            htmlFor="email"
          >
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
            value={formData.password}
            required
          />
          <label
            className="label peer-placeholder-shown:hidden"
            htmlFor="password"
          >
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
            value={formData.username}
          />
          <label
            className="label peer-placeholder-shown:hidden"
            htmlFor="username"
          >
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
            value={formData.name}
          />
          <label className="label peer-placeholder-shown:hidden" htmlFor="name">
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
            value={formData.address}
          />
          <label
            className="label peer-placeholder-shown:hidden"
            htmlFor="address"
          >
            Address
          </label>
        </div>
        <div
          className={`flex w-full ${
            !urlImage && " cursor-pointer"
          } bg-white mb-4 border-dashed border-4 p-4 border-gray-400 rounded-[3rem] `}
        >
          <input
            className=""
            name="photo"
            type="file"
            accept="image/*"
            onChange={(e) => handleOnChange(e)}
            hidden
            ref={imageInputRef}
          />
          <div
            onClick={() => !urlImage && imageInputRef.current.click()}
            className="w-full flex justify-center"
          >
            {urlImage ? (
              <div className="flex relative ">
                <div
                  onClick={() => setURlImage(null)}
                  className="cursor-pointer hover:bg-white bg-gray-400 rounded-full text-[1.5rem] absolute top-[-10px] right-[-10px] font-bold border-2 border-black w-[2rem] h-[2rem] flex items-center justify-center"
                >
                  x
                </div>
                <img src={urlImage} className="object-cover" />
              </div>
            ) : (
              <div className="flex flex-col justify-center">
                <h1>
                  <span className="text-blue-600 font semibold">
                    Upload a file
                  </span>
                  {` `}
                  or drag and drop
                </h1>
                <p>PNG, JPG GIF up to 10MB</p>
              </div>
            )}
          </div>
        </div>
        <button
          className=" text-white font-semibold text-[1.2rem] bg-[#ff4c29] p-2 w-[10rem] rounded-lg"
          type="submit"
          onClick={(e) => handleSubmitForm(e)}
        >
          Add User
        </button>
      </form>
    </div>
  );
};
export default Form;
