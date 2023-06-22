import React from "react";
import { AiFillEdit } from "react-icons/ai";

import { Items } from "../containers";

const SurveyDetails = () => {
  return (
    <section className="grow w-full font-poppins">
      <div className="container w-full flex flex-col justify-start items-start section__padding">
        <header className="flex justify-between items-center w-full">
          <h3 className="font-bold tracking-wide">Title</h3>
          <AiFillEdit
            className="text-white bg-blue text-4xl p-2 cursor-pointer rounded hover:opacity-80 transition active:scale-105"
            title="Edit your article"
          />
        </header>

        <p className="my-5 text-sm sm:text-base leading-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, vero.
        </p>

        <Items />

        <button type="button" className="my-5 bg-aqua text-white px-4 py-2 hover:opacity-80 active:scale-105 text-sm sm:text-base">Vote</button>
      </div>
    </section>
  );
};

export default SurveyDetails;
