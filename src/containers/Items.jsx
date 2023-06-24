import React from "react";
import { Item } from "../components";

const Items = ({ items }) => {
  return (
    <main className="grow w-full my-5">
      {items?.map((item) => (
        <Item
          key={item._id}
          _id={item._id}
          content={item.content}
          percentage={item.percentage}
          voters={item.voters}
        />
      ))}
    </main>
  );
};

export default Items;
