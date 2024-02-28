import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

import ContactImage from "../imgs/Messages-bro.png";
import { IoIosCheckmarkCircleOutline, IoIosCloseCircle } from "react-icons/io";

function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jpovben", "template_a2oc0wn", form.current, {
        publicKey: "4uoXXQYPoXoQK1PCF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowModal(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error");
        }
      );
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-5"> Contact Us 📨 </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="to_name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <img
            src={ContactImage}
            alt="Contact Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        className=" w-96 h-full p-4 sm:w-[400px] sm:h-[300px] relative   bg-stone-100 shadow-md mx-auto my-9 rounded-md  "
      >
        <div className=" text-center p-4  ">
          <IoIosCheckmarkCircleOutline className="text-center mb-4  text-8xl mx-auto text-green-600"></IoIosCheckmarkCircleOutline>
          <p> You Message has been sent</p>
        </div>
        <IoIosCloseCircle
          className=" absolute top-0 right-0 text-xl cursor-pointer"
          onClick={() => setShowModal(false)}
        />{" "}
      </Modal>
    </div>
  );
}

export default ContactPage;
