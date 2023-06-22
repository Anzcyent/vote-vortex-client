import React, {useEffect} from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { generateNewAccessToken } from "./redux/actions/auth";

import { Navbar, Footer } from "./components";
import {
  SurveyDetails,
  Surveys,
  CreateSurvey,
  NotFound,
  Login,
  Register,
  Profile,
} from "./containers";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { access_token, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateNewAccessToken());
  }, [access_token]);
  return (
    <div className="h-[100vh] flex__col-center">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Surveys />} />
        <Route exact path="/survey/:id" element={<SurveyDetails />} />
        <Route exact path="/create" element={<CreateSurvey />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
