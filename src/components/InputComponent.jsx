import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function InputComponent ({label,type,name,placeholder,id,Icon,inputClassName,...rest}) {
  return (
    
        <div className=" flex flex-col mb-5 w-full gap-1 relative">
          <label
            className="text-gray-secondary-color-gray text-left text-sm "
            htmlFor="name"
          >
            {label}
          </label>
          <input
            className={`outline-none border-whitesmoke border-2 rounded-md py-2 placeholder:text-gray-secondary-color-gray pl-2 text-sm ${inputClassName}`}
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
        <span className="absolute bottom-3 right-4"><Icon /></span>
        </div>
    
  );
}
