import { ADD_RESERVATIONS } from "./reservation.actions";

const initialState = { data: [] };

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATIONS:
      return {
        data: action.reservations
      };
    default:
      return state;
  }
};

export const getReservations = state => state.reservations.data;

export default ReservationReducer;
