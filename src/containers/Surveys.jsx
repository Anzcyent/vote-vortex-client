import React from "react";
import { SurveyCard } from "../components";

const Surveys = () => {
  return (
    <section className="grow overflow-auto scroll-none font-poppins scale-up-center w-full">
      <div className="container flex sm:flex-row flex-col items-center lg:justify-start justify-evenly flex-wrap">
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
        <SurveyCard
          title="Title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aperiam!"
        />
      </div>
    </section>
  );
};

export default Surveys;
