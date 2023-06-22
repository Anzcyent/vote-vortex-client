import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CreateSurvey = () => {
  const [items, setItems] = useState(["", ""]);

  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleItemRemove = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const addItem = () => {
    if (items.length < 4) {
      setItems([...items, ""]);
    }
  };

  return (
    <section className="grow w-full font-poppins flip-horizontal-bottom">
      <form className="container w-full section__padding flex flex-col">
        <div className="w-full flex flex-col">
          <input
            type="text"
            name="title"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Title"
          />
          <small className="text-xs mb-3 text-aqua font-semibold">
            (Should be max 50 characters.)
          </small>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="text"
            name="description"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Description"
          />
          <small className="text-xs mb-3 text-aqua font-semibold">
            (Should be max 255 characters.)
          </small>
        </div>

        <div
          className="w-full flex flex-col justify-start items-start my-5"
          id="itemsContainer"
        >
          <span>Items</span>
          {items.map((item, index) => (
            <div className="flex items-center w-full sm:bg-white bg-blue my-3" key={index}>
              <input
                type="text"
                name="item"
                className=" border-0 outline-0 text-white bg-blue p-2 placeholder:text-white sm:w-1/2 w-full"
                placeholder={`Item ${index + 1}`}
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                key={index}
              />

              {index >= 2 && (
                <AiOutlineClose
                  className="sm:ml-5 mr-5 font-bold text-xl cursor-pointer hover:opacity-40 active:scale-105 text-white sm:text-black"
                  onClick={() => handleItemRemove(index)}
                />
              )}
            </div>
          ))}
          <small className="text-xs mb-3 text-aqua font-semibold">
            (You can add minimum 2 and maximum 4 items.)
          </small>
          {items.length < 4 && (
            <button
              type="button"
              className="my-4 bg-aqua text-white px-4 py-1 flex__center hover:opacity-80 active:scale-105"
              onClick={addItem}
            >
              Add Item
            </button>
          )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="flex__center bg-red text-sm font-bold text-white px-4 py-1"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateSurvey;
