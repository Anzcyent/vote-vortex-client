import { appConstants, userConstants } from "../constants";
import { getData } from "../../utils/fetchData";

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await getData(`/api/user/${id}`);

    dispatch({
      type: userConstants.GET_USER,
      payload: res.data.user,
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
