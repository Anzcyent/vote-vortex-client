import { getData, postData } from "../../utils/fetchData";
import { surveyConstants, appConstants } from "../constants";

export const getAllSurveys = () => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await getData("/api/survey");

    dispatch({
      type: surveyConstants.GET_ALL_SURVEYS,
      payload: res.data.surveys,
    });

    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getOneSurvey = (id) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await getData(`/api/survey/${id}`);

    dispatch({
      type: surveyConstants.GET_ONE_SURVEY,
      payload: res.data.survey,
    });

    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const createSurvey = (data, token, navigate) => async (dispatch) => {
  try {
    const res = await postData("/api/survey/create", data, token);

    dispatch(getAllSurveys());

    navigate(`/survey/${res.data.survey._id}`);

    dispatch({
      type: surveyConstants.GET_ONE_SURVEY,
      payload: res.data.survey,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
