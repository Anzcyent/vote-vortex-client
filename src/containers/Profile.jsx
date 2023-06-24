import React, { useEffect } from "react";
import Surveys from "./Surveys";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/user";
import { useParams } from "react-router-dom";
import { SurveyCard } from "../components";

const Profile = () => {
  const { current_user } = useSelector((state) => state.userReducer);
  const { isLoaded } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  if (current_user?.surveys?.length === 0) {
    <section className="grow font-poppins scale-up-center w-full flex__col-center">
      <h3 className="font-bold text-green sm:text-2xl text-lg">
        No survey found
      </h3>
    </section>;
  }

  return (
    <section className="grow font-poppins w-full overflow-auto scroll-none">
      <div className="container py-5 px-5 sm:px-0">
        <h1 className="font-bold sm:text-4xl text-lg text-blue">
          {!isLoaded ? "..." : current_user.username}'s Surveys
        </h1>
      </div>

      <section className="grow overflow-auto scroll-none font-poppins scale-up-center w-full">
        <div className="container flex sm:flex-row flex-col items-center lg:justify-start justify-evenly flex-wrap">
          {current_user?.surveys?.map((survey) => (
            <SurveyCard
              key={survey._id}
              _id={survey._id}
              title={survey.title}
              description={survey.description}
              username={current_user.username}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Profile;
