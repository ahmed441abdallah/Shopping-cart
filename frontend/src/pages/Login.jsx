import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import login_img from "../imgs/Computer login-bro.png";
import Modal from "react-modal"; // Import Modal from react-modal
import { IoCloseCircleOutline } from "react-icons/io5";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [error, setError] = useState("");
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://o-live-api.vercel.app/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setIsLogin(true); // Store the token in localStorage
      // Redirect to the home page or any other page upon successful login
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        setIsModalOpen(true);
      } else {
        setError("An unexpected error occurred");
        setIsModalOpen(true);
      }
    }
  };
  return (
    <div className="container mx-auto px-6  mt-20">
      <h1 className="text-center mb-4 text-2xl"> Login Your Account</h1>
      <div className=" grid gap-4 lg:grid-cols-2">
        <div>
          <img
            src={login_img}
            alt="login_img"
            className=" w-full  lg:h-96"
          ></img>
        </div>
        <div className="  bg-slate-50 rounded-md pt-2 shadow-lg">
          <form
            className="max-w-sm mx-auto"
            action="POST"
            onSubmit={handleLoginSubmit}
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
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Login
            </button>
          </form>
          <br></br>
          <div className="text-center">
            <p className="text-center">OR</p>
            <Link to="/signup" className="text-center text-gray-600 mx-auto">
              Don't Have An Account ? Register Now
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)} // Close modal when requested
        contentLabel="Error Modal"
        className=" w-96 h-80 bg-slate-100 shadow-md mx-auto my-9 rounded-md flex justify-center items-center"
      >
        <div className=" text-center p-4">
          <IoCloseCircleOutline className="text-center mb-2 text-6xl mx-auto text-red-500"></IoCloseCircleOutline>
          <p className="text-xl"> Ooops!</p>
          <p className="text-2xl">{error}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
