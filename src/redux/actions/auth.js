import { getData, postData } from "../../utils/fetchData";
import { authConstants, appConstants } from "../constants";

export const register = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await postData("/api/auth/register", data);
    console.log(res);

    dispatch({
      type: authConstants.AUTH,
      payload: {
        user: res.data.user,
        access_token: res.data.access_token,
      },
    });

    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });

    navigate("/");
  } catch (err) {
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
    throw new Error(err.response.data.message);
  }
};

export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: appConstants.LOADING,
      payload: true,
    });

    const res = await postData("/api/auth/login", data);

    dispatch({
      type: authConstants.AUTH,
      payload: {
        user: res.data.user,
        access_token: res.data.access_token,
      },
    });

    dispatch({
      type: appConstants.LOADING,
      payload: false,
    });

    navigate("/");
  } catch (err) {
    dispatch({
      type: appConstants.ERROR,
      payload: err.response.data.message,
    });
    throw new Error(err.response.data.message);
  }
};

export const logout = async () => {
  const res = await getData("/api/auth/logout");

  window.location.reload();
};

export const generateNewAccessToken = () => async (dispatch) => {
  try {
    const res = await postData("/api/auth/rf_token");

    dispatch({
      type: authConstants.AUTH,
      payload: {
        user: res.data.user,
        access_token: res.data.access_token,
      },
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};