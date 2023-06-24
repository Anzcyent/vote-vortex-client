import React, { useEffect } from "react";
import Surveys from "./Surveys";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/user";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { current_user } = useSelector((state) => state.userReducer);
  const { isLoaded } = useSelector((state) => state.appReducer);
  console.log(current_user)

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);


  return (
    <section className="grow font-poppins w-full overflow-auto scroll-none">
      <div className="container py-5 px-5 sm:px-0">
        <h1 className="font-bold sm:text-4xl text-lg text-blue">
          {!isLoaded ? "..." : current_user.username}'s Surveys
        </h1>
      </div>

      <Surveys />
    </section>
  );
};

export default Profile;
