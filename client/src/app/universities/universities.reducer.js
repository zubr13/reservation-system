import { ADD_UNIVERSTIES, SET_SHEDULE } from "./universities.actions";

const initialState = { data: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNIVERSTIES:
      return {
        ...state,
        data: action.universities
      };
    case SET_SHEDULE:
      return {
        ...state,
        shedule: action.shedule
      };
    default:
      return state;
  }
};

export const getUniversities = state => state.universities.data;

export default UniversityReducer;
