import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { generateNewAccessToken } from "./redux/actions/auth";
import { ToastContainer, toast } from "react-toastify";

import { Navbar, Footer } from "./components";
import {
  SurveyDetails,
  Surveys,
  CreateSurvey,
  NotFound,
  Login,
  Register,
  Profile,
  EditSurvey,
} from "./containers";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { access_token } = useSelector((state) => state.authReducer);
  const { error } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateNewAccessToken());
  }, [access_token]);

  useEffect(() => {
    if (error) notify();
  }, [error]);

  const notify = () => toast.error(error);
  return (
    <div className="h-[100vh] flex__col-center">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Surveys />} />
        <Route exact path="/survey/:id" element={<SurveyDetails />} />
        <Route exact path="/create" element={<CreateSurvey />} />
        <Route exact path="/survey/edit/:id" element={<EditSurvey />} />
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
