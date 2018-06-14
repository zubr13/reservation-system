import { ADD_UNIVERSTIES, SET_SHEDULE } from "./universities.actions";

const initialState = { data: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNIVERSTIES:
      return {
        data: action.universities
      };
    case SET_SHEDULE:
      return {
        shedule: action.shedule
      };
    default:
      return state;
  }
};

export const getUniversities = state => state.universities.data;

export default UniversityReducer;
