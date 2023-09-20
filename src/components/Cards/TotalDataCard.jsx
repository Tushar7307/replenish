import React from "react";

export default function TotalDataCard({ title, Icon, total }) {
  return (
    <div className="bg-gray-500 w-[317px] px-4 p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <span className="text-4xl max-w-[20%]">
          <Icon />
        </span>

        <p className="text-sm break-words max-w-[80%]">{title}</p>
      </div>
      <span className="text-gray-scale-gray-500 text-4xl font-bold ">
        {total}
      </span>
    </div>
  );
}
