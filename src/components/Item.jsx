import React from "react";

const Item = ({ content, percentage, voters }) => {
  const dynamicStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="border border-blue my-3 sm:w-1/2 w-full flex justify-between items-center pr-3 overflow-hidden">
      <div
        className={`bg-${percentage === 0 ? "white" : "blue"} text-${
          percentage === 0 ? "black" : "white"
        } h-full p-2 slide-right`}
        style={dynamicStyles}
      >
        <span className="font-medium sm:text-base text-xs">{content}</span>
      </div>

      <span className="font-bold text-blue">{percentage}%</span>
    </div>
  );
};

export default Item;
