import React, { useState } from "react";
import Logo from "../asset/Logo.png";
import { MdOutlineNotifications } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function Navbar() {
  const [sideBar, setSidebar] = useState(false);
  const hideSidebar = () => {
    setSidebar(false);
  };
  return (
    <div className="flex gap-10  px-4 py-3 items-center shadow-lg ">
      <div className="flex lg:w-auto w-full  items-center justify-between">
        <div className="flex w-40">
          <img src={Logo} className="w-full object-contain  " />
        </div>
        <div>
          <button className="block lg:hidden " onClick={() => setSidebar(true)}>
            <AiOutlineMenuFold />
          </button>
        </div>
      </div>
      <div className="lg:w-[calc(100%-10rem)]">
        <div
          className={`${
            sideBar ? "translate-x-0" : "translate-x-full"
          } right-0 bg-white lg:items-center lg:pt-0 lg:static lg:h-auto lg:shadow-none shadow-md shadow-slate-500 px-5 top-0 fixed h-screen z-20 pt-5 transition-all duration-300 flex lg:flex flex-col-reverse lg:flex-row  justify-end  gap-7 lg:justify-between lg:translate-x-0`}
        >
          <div>
            <ul className="flex gap-6 text-lightgray text-sm lg:flex-row  flex-col">
              <li onClick={hideSidebar}  className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Dashboard
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Client
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Appointment
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Invoice
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Total Earning
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Inventory
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                Schedule{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex gap-x-5 text-2xl">
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                <MdOutlineNotifications />
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                <CiSettings />
              </li>
              <li onClick={hideSidebar} className="cursor-pointer  hover:text-gray-scale-gray-500 transition-all">
                <FaUserSecret />
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setSidebar(false)}
          className={`${
            sideBar ? "block" : "hidden"
          } bg-black/50 lg:hidden w-full z-10  left-0 px-5 top-0 cursor-pointer fixed h-screen `}
        ></div>
      </div>
    </div>
  );
}
