import React from "react";

const Item = ({content, percentage, voters}) => {
  return (
    <div className="border border-blue my-3 w-1/2 flex justify-between items-center pr-3">
      <div className={`bg-${percentage === 0 ? "white" : "blue"} text-${percentage === 0 ? "black" : "white"} w-[${percentage}%] h-full p-2`}>
        <span className="font-medium sm:text-base text-xs">{content}</span>
      </div>

      <span className="font-bold text-blue">{percentage}%</span>
    </div>
  );
};

export default Item;
