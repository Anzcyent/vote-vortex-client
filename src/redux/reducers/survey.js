import { surveyConstants } from "../constants";

const initialState = {
  surveys: [],
  survey: {},
};

export default function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case surveyConstants.GET_ALL_SURVEYS:
      return {
        ...state,
        surveys: action.payload,
      };
    case surveyConstants.GET_ONE_SURVEY:
      return {
        ...state,
        survey: action.payload,
      };

    default:
      return state;
  }
}
