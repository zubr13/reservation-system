import React from "react";
import { connect } from "react-redux";
import { fetchActiveReservations } from "../../reservation.actions";
import ReservationsList from "../../reservations-list/reservations-list";

class ActiveRequests extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchActiveReservations);
  }

  render() {
    return <ReservationsList reservations={this.props.reservations} />;
  }
}

function mapStateToProps(state) {
  return {
    reservations: state.reservations.active
  };
}

export default connect(mapStateToProps)(ActiveRequests);
