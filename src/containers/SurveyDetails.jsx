import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getOneSurvey } from "../redux/actions/survey";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { Items } from "../containers";

const SurveyDetails = () => {
  const { isLoaded, error } = useSelector((state) => state.appReducer);
  const { survey } = useSelector((state) => state.surveyReducer);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneSurvey(id));
  }, []);

  if (!isLoaded) {
    return (
      <section className="grow font-poppins scale-up-center w-full flex__col-center">
        <h3 className="font-bold text-green sm:text-2xl text-lg">Loading...</h3>
      </section>
    );
  }

  if (!survey._id) {
    return (
      <section className="grow font-poppins scale-up-center w-full flex__col-center">
        <h3 className="font-bold text-red sm:text-2xl text-lg">
          404 Survey Not Found
        </h3>
      </section>
    );
  }

  return (
    <section className="grow w-full font-poppins">
      <div className="container w-full flex flex-col justify-start items-start section__padding">
        <header className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h3 className="font-bold tracking-wide">{survey.title}</h3>
            <small className="text-xs text-aqua">
              {moment(survey.createdAt).fromNow()}
            </small>
          </div>

          {survey?.voters?.length === 0 && (
            <AiFillEdit
              className="text-white bg-blue text-4xl p-2 cursor-pointer rounded hover:opacity-80 transition active:scale-105"
              title="Edit your article"
              onClick={() => navigate(`/survey/edit/${survey._id}`)}
            />
          )}
        </header>

        <p className="my-5 text-sm sm:text-base leading-5">
          {survey.description}
        </p>

        <Items items={survey.items} />

        <button
          type="button"
          className="my-5 bg-aqua text-white px-4 py-2 hover:opacity-80 active:scale-105 text-sm sm:text-base"
        >
          Vote
        </button>
      </div>
    </section>
  );
};

export default SurveyDetails;
