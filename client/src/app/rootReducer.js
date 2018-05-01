import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import reservations from "./reservation/reservation.reducer";

export default combineReducers({
  routing: routerReducer,
  reservations
});
