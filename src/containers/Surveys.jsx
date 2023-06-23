import React, { useEffect } from "react";
import { SurveyCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurveys } from "../redux/actions/survey";

const Surveys = () => {
  const { surveys } = useSelector((state) => state.surveyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSurveys());
  }, [surveys]);

  if (surveys.length === 0) {
    return (
      <section className="grow overflow-auto scroll-none font-poppins scale-up-center w-full flex__col-center">
        <h3 className="font-bold text-green sm:text-2xl text-lg">
          No surveys have been shared yet.
        </h3>
      </section>
    );
  }

  return (
    <section className="grow overflow-auto scroll-none font-poppins scale-up-center w-full">
      <div className="container flex sm:flex-row flex-col items-center lg:justify-start justify-evenly flex-wrap">
        {surveys.map((survey) => (
          <SurveyCard
            key={survey._id}
            title={survey.title}
            description={survey.description}
            username={survey.owner.username}
          />
        ))}
      </div>
    </section>
  );
};

export default Surveys;
