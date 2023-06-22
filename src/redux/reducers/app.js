import { appConstants } from "../constants";

const initialState = {
  isLoaded: true,
  error: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case appConstants.LOADING:
      return {
        ...state,
        isLoaded: action.payload ? false : true,
      };

    case appConstants.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
