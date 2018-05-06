import React from "react";
import "./reservation.css";
import { connect } from "react-redux";
import { getReservations } from "./reservation.reducer";
import { fetchReservations } from "./reservation.actions";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchReservations);
  }

  render() {
    return "My reservations";
  }
}

function mapStateToProps(state) {
  return {
    reservations: getReservations(state)
  };
}

export default connect(mapStateToProps)(Reservation);
