import callApi from "../../utils/apiService";

export const ADD_UNIVERSTIES = "ADD_UNIVERSITIES";

export function addUniversities(universities) {
  return {
    type: ADD_UNIVERSTIES,
    universities
  };
}

export function fetchUniversities(dispatch) {
  return callApi("universities").then(res => {
    dispatch(addUniversities(res.universities));
  });
}
