import { authConstants } from "../constants";

const initialState = {
  user: {},
  access_token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
      };
    case authConstants.UPDATE:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
}
