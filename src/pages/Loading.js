import React from "react";
import Logo from "../asset/Logo.png";
import {
  AiFillLock,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUserAdd,
} from "react-icons/ai";
import InputComponent from "../components/InputComponent";
import LoadingButton from "../components/LoadingButton";

export default function Loading() {
  return (
    <div>
      <div className="flex w-full justify-center">
        <img src={Logo} className="w-[70%] sm:w-auto " />
      </div>
      <div className="flex w-full justify-center mt-7 ">
        <h1 className="text-darkslategray-100 font-bold text-2xl sm:text-4xl">
          Create Your Account
        </h1>
      </div>
      <div className="flex justify-center text-neutral-600 font-normal mt-4 ">
        <span className="max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </span>
      </div>

      <form className="flex w-full justify-center mt-6 px-3 flex-col items-center">
        <div className="w-full sm:w-1/2 ">
          <InputComponent
            label="User name"
            name="name"
            type="text"
            placeholder="Enter your name"
            id="name"
            Icon={AiOutlineUserAdd}
          />
          <InputComponent
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email address"
            id="email"
            Icon={AiOutlineMail}
          />
          <InputComponent
            label="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            id="phone"
            Icon={AiOutlinePhone}
          />
          <InputComponent
            label="Create your password"
            name="password"
            type="text"
            placeholder="********"
            id="password"
            Icon={AiFillLock}
          />
          <div className="flex justify-center w-full">
            <LoadingButton className="mb-10 w-full" />
          </div>
        </div>
      </form>
    </div>
  );
}
