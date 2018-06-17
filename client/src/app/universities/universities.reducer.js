import {
  ADD_UNIVERSTIES,
  ADD_UNIVERSITY,
  SET_SHEDULE,
  ADD_BUILDING
} from "./universities.actions";
import _ from "lodash";

const initialState = { data: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNIVERSTIES:
      return {
        ...state,
        data: action.universities
      };
    case ADD_UNIVERSITY:
      const universities = [...state.data];
      universities.push(action.university);
      return {
        ...state,
        data: universities
      };
    case ADD_BUILDING:
      const universitiesData = [...state.data];
      _.remove(universitiesData, ["_id", action.university._id]);
      universitiesData.push(action.university);
      return {
        ...state,
        data: universitiesData
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
