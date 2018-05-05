import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import reservations from "./reservation/reservation.reducer";
import universities from "./universities/universities.reducer";

export default combineReducers({
  routing: routerReducer,
  reservations,
  universities
});
