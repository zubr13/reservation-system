import {
  ADD_RESERVATIONS,
  ADD_ACTIVE_RESERVATIONS,
  ADD_ACCEPTED_RESERVATIONS,
  ADD_REJECTED_RESERVATIONS,
  ADD_RESERVATION,
  GROUP_RESERVATIONS_BY_ROOM
} from "./reservation.actions";
import _ from "lodash";

const initialState = { data: [], groupedReservations: [] };

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATIONS:
      return {
        ...state,
        data: action.reservations
      };
    case ADD_ACTIVE_RESERVATIONS:
      return {
        ...state,
        active: action.reservations
      };
    case ADD_ACCEPTED_RESERVATIONS:
      return {
        ...state,
        accepted: action.reservations
      };
    case ADD_REJECTED_RESERVATIONS:
      return {
        ...state,
        rejected: action.reservations
      };
    case ADD_RESERVATION:
      return {
        ...state,
        reservation: action.reservation
      };
    case GROUP_RESERVATIONS_BY_ROOM:
      const groupedReservations = _.groupBy(
        _.filter(action.reservations, ["status", "accepted"]),
        "room"
      );
      return {
        ...state,
        groupedReservations
      };
    default:
      return state;
  }
};

export const getReservations = state => state.reservations.data;

export default ReservationReducer;
