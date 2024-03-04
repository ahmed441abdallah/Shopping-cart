import React, { useState } from "react";
import { Link } from "react-router-dom";
import register_img from "../imgs/Sign up-bro.png";
import axios from "axios";
import Modal from "react-modal";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://o-live-api.vercel.app/signup", {
        email,
        password,
      });
      alert(response.data.message);
      // Display success message
      // Optionally, you can redirect the user to another page after successful signup
      setIsModalOpen(true);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        console.log(error);
        // Handle specific error messages from the backend
      } else {
        setError("An unexpected error occurred");
        // Handle unexpected errors
      }
    }
  };
  return (
    <div className="container mx-auto px-6 mt-20">
      <h1 className="text-center mb-4 text-2xl">Create An Account</h1>
      <div className=" grid gap-4 lg:grid-cols-2">
        <div>
          <img
            src={register_img}
            alt=" register_img"
            className=" w-full h-96"
          ></img>
        </div>
        <div className="  bg-slate-50 rounded-md pt-2 shadow-lg">
          <form
            className="max-w-sm mx-auto"
            action="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                for="email"
                classNameName="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name_user@.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                for="password"
                classNameName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Agree Terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Signup
            </button>
          </form>
          <br></br>
          <div className="text-center">
            <p className="text-center">OR</p>
            <Link to="/login" className="text-center text-gray-600 mx-auto">
              Already have An Account ? Login
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)} // Close modal when requested
        contentLabel="Success Modal"
        className=" w-96 h-80 mx-auto my-9 rounded-md flex justify-center items-center"
      >
        <div className=" text-center p-4">
          <IoIosCheckmarkCircleOutline className="text-center mb-2 text-6xl mx-auto text-green-600"></IoIosCheckmarkCircleOutline>
          <p> Successful Registration</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 text-white  bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
