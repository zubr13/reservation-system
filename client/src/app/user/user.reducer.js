import { SET_CURRENT_USER } from "./user.actions";

const initialState = { data: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        data: action.user
      };
    default:
      return state;
  }
};

export default UserReducer;
