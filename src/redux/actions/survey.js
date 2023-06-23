import { getData } from "../../utils/fetchData";
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
