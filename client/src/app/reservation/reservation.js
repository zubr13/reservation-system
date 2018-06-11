import React from "react";
import "./reservation.css";
import { connect } from "react-redux";
import { getReservations } from "./reservation.reducer";
import { fetchUserReservations } from "./reservation.actions";
import ReservationsList from "./reservations-list/reservations-list";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserReservations);
  }

  render() {
    return <ReservationsList reservations={this.props.reservations} />;
  }
}

function mapStateToProps(state) {
  return {
    reservations: getReservations(state)
  };
}

export default connect(mapStateToProps)(Reservation);
