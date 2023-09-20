import React from "react";

export default function LoadingButton({ className, title,loading,onClick,...rest }) {
  return <button onClick={onClick} {...rest} disabled={loading} className={`bg-gray-scale-gray-500 text-white p-1 font-bold rounded-md py-2 w-full  hover:bg-gray transition-all duration-700 ${className}`}>{title}</button>;
}
LoadingButton.defaultProps = {
  className : "",
  title:"Submit",
  loading:false,
  onClick:null,


}