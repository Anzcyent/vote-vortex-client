import React from "react";
import { SurveyCard } from "../components";
import Surveys from "./Surveys";

const Profile = () => {
  return (
    <section className="grow font-poppins w-full overflow-auto scroll-none">
      <div className="container py-5 px-5 sm:px-0">
        <h1 className="font-bold sm:text-4xl text-lg text-blue">Username's Surveys</h1>
      </div>

      <Surveys />
    </section>
  );
};

export default Profile;
