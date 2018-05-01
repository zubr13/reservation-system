import callApi from "../../utils/apiService";

export const ADD_RESERVATIONS = "ADD_RESERVATIONS";

export function addReservations(reservations) {
  return {
    type: ADD_RESERVATIONS,
    reservations
  };
}

export function fetchReservations(dispatch) {
  return callApi("reservations").then(res => {
    dispatch(addReservations(res.reservations));
  });
}
