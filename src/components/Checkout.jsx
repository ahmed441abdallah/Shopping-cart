import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [shippingData, setShippingData] = useState("");
  const [order, setOrder] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const totalPrice = Math.round(
    cartItems.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0)
  );
  const totalQty = cartItems.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);
  const handleChange = (e) => {
    setShippingData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder(shippingData);
    const orderDetails = cartItems
      .map(
        (item) =>
          `Product: ${item.title}, Quantity: ${
            item.qty
          }, Price: $${item.price.toFixed(2)}`
      )
      .join("\n");
    const emailMessage = `
    Order Confirmation\n
    ${orderDetails}\n
    Total Quantity: ${totalQty}\n
    Total Price: $${totalPrice.toFixed(2)}\n
    Shipping Information:\n
    Name: ${shippingData.fname} ${shippingData.lname}\n
    Address: ${shippingData.address}\n
    Email: ${shippingData.email}
  `;
    const emailData = {
      to_name: `${shippingData.fname} ${shippingData.lname}`,
      from_name: "O LIVE Company ", // or your own name
      message: emailMessage,
      reply_to: shippingData.email,
    };
    emailjs
      .send(
        "service_2pyxu5v",
        "template_gcwvb7l",
        emailData,
        "4uoXXQYPoXoQK1PCF"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Handle success (e.g., show a message to the user)
        },
        (err) => {
          console.log("FAILED...", err);
          // Handle errors (e.g., show an error message to the user)
        }
      );
  };
  return (
    <div className=" container  mx-auto px-8">
      <ul
        data-te-stepper-init
        className="relative mt-4 m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
      >
        <li
          data-te-stepper-step-ref
          data-te-stepper-step-active
          className="w-[4.5rem] flex-auto"
        >
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              1
            </span>
            <span
              data-te-stepper-head-text-ref
              className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step1
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="absolute w-full p-4 transition-all duration-500 ease-in-out"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              2
            </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step2
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              3
            </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step3
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>
      </ul>
      <h1 className=" text-center text-2xl font-bold"> Shipping Information</h1>
      <div className="block max-w-md p-8  mx-auto mt-4 ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                name="fname"
                className="peer block min-h-[auto] w-full  border rounded-md px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full  border rounded-md px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                placeholder="Last Name"
                name="lname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded-md border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput125"
              placeholder=" Street Address"
              name="address"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded-md border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input type="checkbox" />
            <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
              Subscribe to our newsletter
            </label>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out "
          >
            Checkout
          </button>
        </form>
      </div>
      <Modal
        isOpen={order}
        className=" w-96 h-full p-4 sm:w-[650px] sm:h-[535px] relative   bg-stone-100 shadow-md mx-auto my-9 rounded-md "
      >
        <div className=" text-center p-4">
          <IoIosCheckmarkCircleOutline className="text-center mb-2 text-6xl mx-auto text-green-600"></IoIosCheckmarkCircleOutline>
          <p> Order done successfully</p>
          <p> Check Your Email </p>
        </div>
        <IoIosCloseCircle
          className=" absolute top-0 right-0 text-xl cursor-pointer"
          onClick={() => setOrder(false)}
        />
        <hr></hr>
        <div class="relative overflow-x-auto mt-1">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
              <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr class="bg-white ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.title}
                  </th>
                  <td class="px-6 py-4"> {item.qty}</td>
                  <td class="px-6 py-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 ">
                <th scope="row" class="px-6 py-3 text-base">
                  Total
                </th>
                <td class="px-6 py-3">{totalQty}</td>
                <td class="px-6 py-3">${totalPrice}</td>
              </tr>
            </tfoot>
          </table>
          <hr></hr>
          <div className="person-info mt-3">
            <h3 className=" mb-1">Your Name : {order.fname + order.lname}</h3>
            <h3 className=" mb-1"> Email: {order.email}</h3>
            <h3 className=" mb-1"> Address : {order.address}</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
