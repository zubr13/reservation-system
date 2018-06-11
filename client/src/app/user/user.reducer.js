import { SET_CURRENT_USER } from "./user.actions";

const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      sessionStorage.setItem("currentUser", JSON.stringify(action.user));
      return {
        currentUser: action.user
      };
    default:
      return state;
  }
};

export default UserReducer;
