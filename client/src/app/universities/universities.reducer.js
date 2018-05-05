import { ADD_UNIVERSTIES } from "./universities.actions";

const initialState = { data: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNIVERSTIES:
      return {
        data: action.universities
      };
    default:
      return state;
  }
};

export const getUniversities = state => state.universities.data;

export default UniversityReducer;
