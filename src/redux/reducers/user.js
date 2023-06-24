import { userConstants } from "../constants";

const initialState = {
  current_user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER:
      return {
        ...state,
        current_user: action.payload,
      };

    default:
      return state;
  }
}
