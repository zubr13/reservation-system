import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import reservations from "./reservation/reservation.reducer";
import universities from "./universities/universities.reducer";
import user from "./user/user.reducer";

export default combineReducers({
  routing: routerReducer,
  reservations,
  universities,
  user
});
