import React from "react";

const Checkout = () => {
  return (
    <div className=" container  mx-auto px-8">
      <ul
        data-te-stepper-init
        class="relative mt-4 m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
      >
        <li
          data-te-stepper-step-ref
          data-te-stepper-step-active
          class="w-[4.5rem] flex-auto"
        >
          <div
            data-te-stepper-head-ref
            class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              1
            </span>
            <span
              data-te-stepper-head-text-ref
              class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step1
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            class="absolute w-full p-4 transition-all duration-500 ease-in-out"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>

        <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              2
            </span>
            <span
              data-te-stepper-head-text-ref
              class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step2
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>

        <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
          <div
            data-te-stepper-head-ref
            class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
          >
            <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
            >
              3
            </span>
            <span
              data-te-stepper-head-text-ref
              class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
            >
              step3
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>
      </ul>
      <h1 className=" text-center text-2xl font-bold"> Shipping Information</h1>
      <div class="block max-w-md p-8  mx-auto mt-4 ">
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full  border rounded-md px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First Name"
              />
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full  border rounded-md px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded-md border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput125"
              placeholder=" Street Address"
            />
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded-md border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput125"
              placeholder="Email Address"
            />
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded-md border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput126"
              placeholder="Password"
            />
          </div>

          <div class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              type="checkbox"
              value=""
              id="exampleCheck25"
            />
            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="exampleCheck25"
            >
              Subscribe to our newsletter
            </label>
          </div>

          <button
            type="submit"
            class="inline-block w-full rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
