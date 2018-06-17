import {
  ADD_RESERVATIONS,
  ADD_ACTIVE_RESERVATIONS,
  ADD_ACCEPTED_RESERVATIONS,
  ADD_REJECTED_RESERVATIONS,
  ADD_RESERVATION,
  GROUP_RESERVATIONS_BY_ROOM
} from "./reservation.actions";
import _ from "lodash";

const initialState = { data: [] };

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATIONS:
      return {
        data: action.reservations
      };
    case ADD_ACTIVE_RESERVATIONS:
      return {
        active: action.reservations
      };
    case ADD_ACCEPTED_RESERVATIONS:
      return {
        accepted: action.reservations
      };
    case ADD_REJECTED_RESERVATIONS:
      return {
        rejected: action.reservations
      };
    case ADD_RESERVATION:
      return {
        reservation: action.reservation
      };
    case GROUP_RESERVATIONS_BY_ROOM:
      const groupedReservations = _.groupBy(action.reservations, "room");
      return {
        groupedReservations
      };
    default:
      return state;
  }
};

export const getReservations = state => state.reservations.data;

export default ReservationReducer;
