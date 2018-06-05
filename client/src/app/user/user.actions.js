import callApi from "../../utils/apiService";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function getCurrentUer(dispatch) {
  return dispatch => {
    return callApi("auth/me").then(res => {
      dispatch(setCurrentUser(res.user));
    });
  };
}
