import {
  ADD_RESERVATIONS,
  ADD_ACTIVE_RESERVATIONS,
  ADD_RESERVATION
} from "./reservation.actions";

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
    case ADD_RESERVATION:
      return {
        reservation: action.reservation
      };
    default:
      return state;
  }
};

export const getReservations = state => state.reservations.data;

export default ReservationReducer;
