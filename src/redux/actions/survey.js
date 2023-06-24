import { getData, postData, putData } from "../../utils/fetchData";
import { surveyConstants, appConstants, authConstants } from "../constants";

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
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
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
    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });

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
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
    throw new Error(err.response.data.message);
  }
};

export const editSurvey = (id, data, token, navigate) => async (dispatch) => {
  try {
    const res = await putData(`/api/survey/edit?_id=${id}`, data, token);

    dispatch(getAllSurveys());

    navigate(`/survey/${res.data.survey._id}`);

    dispatch({
      type: surveyConstants.GET_ONE_SURVEY,
      payload: res.data.survey,
    });
  } catch (err) {
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
    throw new Error(err.response.data.message);
  }
};

export const vote = (survey_id, item_id, token) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await postData(
      `/api/survey/vote?_id=${survey_id}&item_id=${item_id}`,
      null,
      token
    );

    dispatch(getOneSurvey(res.data.survey._id));

    dispatch({
      type: authConstants.AUTH,
      payload: res.data,
    });

    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
    throw new Error(err.response.data.message);
  }
};

export const selectItem = (item_id) => (dispatch) => {
  dispatch({
    type: surveyConstants.SELECTED_ITEM,
    payload: item_id,
  });
};

export const searchSurvey = (title) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await getData(`/api/survey/search?title=${title}`);

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
