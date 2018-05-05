import callApi from "../../utils/apiService";

export const ADD_RESERVATIONS = "ADD_RESERVATIONS";
export const ADD_RESERVATION = "ADD_RESERVATION";

export function addReservations(reservations) {
  return {
    type: ADD_RESERVATIONS,
    reservations
  };
}

export function addReservation(reservation) {
  return {
    type: ADD_RESERVATION,
    reservation
  };
}

export function postReservation(reservation) {
  return dispatch => {
    return callApi("reservations", "post", reservation).then(res => {
      dispatch(addReservation(res.reservation));
    });
  };
}

export function fetchReservations(dispatch) {
  return callApi("reservations").then(res => {
    dispatch(addReservations(res.reservations));
  });
}
