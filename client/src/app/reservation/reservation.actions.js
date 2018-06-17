import callApi from "../../utils/apiService";

export const ADD_RESERVATIONS = "ADD_RESERVATIONS";
export const ADD_ACTIVE_RESERVATIONS = "ADD_ACTIVE_RESERVATIONS";
export const ADD_ACCEPTED_RESERVATIONS = "ADD_ACCEPTED_RESERVATIONS";
export const ADD_REJECTED_RESERVATIONS = "ADD_REJECTED_RESERVATIONS";
export const ADD_RESERVATION = "ADD_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const GROUP_RESERVATIONS_BY_ROOM = "GROUP_RESERVATIONS_BY_ROOM";

export function addReservations(reservations) {
  return {
    type: ADD_RESERVATIONS,
    reservations
  };
}

export function removeReservation(reservation, reservationType) {
  return {
    type: REMOVE_RESERVATION,
    reservation,
    reservationType
  };
}

export function addActiveReservations(reservations) {
  return {
    type: ADD_ACTIVE_RESERVATIONS,
    reservations
  };
}

export function addAcceptedReservations(reservations) {
  return {
    type: ADD_ACCEPTED_RESERVATIONS,
    reservations
  };
}

export function addRejectedReservations(reservations) {
  return {
    type: ADD_REJECTED_RESERVATIONS,
    reservations
  };
}

export function addReservation(reservation) {
  return {
    type: ADD_RESERVATION,
    reservation
  };
}

export function groupReservationsByRoom(reservations) {
  return {
    type: GROUP_RESERVATIONS_BY_ROOM,
    reservations
  };
}

export function postReservation(reservation) {
  return dispatch => {
    return callApi("reservations", "post", {
      ...reservation,
      organizerId: JSON.parse(sessionStorage.getItem("currentUser"))["_id"]
    }).then(res => {
      dispatch(addReservation(res.reservation));
    });
  };
}

export function updateReservation(reservation) {
  return dispatch => {
    return callApi(
      `reservations/${reservation["_id"]}`,
      "put",
      reservation
    ).then(res => {
      dispatch(addReservation(res.reservation));
    });
  };
}

export function fetchReservations(dispatch) {
  return callApi("reservations").then(res => {
    dispatch(addReservations(res.reservations));
  });
}

export function fetchUserReservations(dispatch) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser._id) {
    return Promise.reject();
  }
  return callApi(`reservations?userId=${currentUser["_id"]}`).then(res => {
    dispatch(addReservations(res.reservations));
  });
}

export function fetchActiveReservations(dispatch) {
  return callApi("reservations/active").then(res => {
    dispatch(addActiveReservations(res.reservations));
  });
}

export function fetchAcceptedReservations(dispatch) {
  return callApi("reservations/accepted").then(res => {
    dispatch(addAcceptedReservations(res.reservations));
  });
}

export function fetchRejectedReservations(dispatch) {
  return callApi("reservations/rejected").then(res => {
    dispatch(addRejectedReservations(res.reservations));
  });
}
