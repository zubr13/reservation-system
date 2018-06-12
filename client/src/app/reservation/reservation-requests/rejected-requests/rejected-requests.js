import React from "react";
import { connect } from "react-redux";
import { fetchRejectedReservations } from "../../reservation.actions";
import ReservationsList from "../../reservations-list/reservations-list";

class RejectedRequests extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRejectedReservations);
  }

  render() {
    return <ReservationsList reservations={this.props.reservations} />;
  }
}

function mapStateToProps(state) {
  return {
    reservations: state.reservations.rejected
  };
}

export default connect(mapStateToProps)(RejectedRequests);
