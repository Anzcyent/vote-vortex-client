import React from "react";

const Item = () => {
  return (
    <div className="my-3 w-1/2 flex justify-between items-center p-1">
      <div className="border bg-blue text-white w-1/2 h-full p-2">
        <span className="font-medium">Item</span>
      </div>

      <span className="font-bold text-blue">33%</span>
    </div>
  );
};

export default Item;
