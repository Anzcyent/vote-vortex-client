import { surveyConstants } from "../constants";

const initialState = {
  surveys: [],
};

export default function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case surveyConstants.GET_ALL_SURVEYS:
      return {
        ...state,
        surveys: action.payload,
      };

    default:
      return state;
  }
}
