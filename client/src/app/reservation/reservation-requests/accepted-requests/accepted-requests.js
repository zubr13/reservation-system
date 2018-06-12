import React from "react";
import { connect } from "react-redux";
import { fetchAcceptedReservations } from "../../reservation.actions";
import ReservationsList from "../../reservations-list/reservations-list";

class AcceptedRequests extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAcceptedReservations);
  }

  render() {
    return <ReservationsList reservations={this.props.reservations} />;
  }
}

function mapStateToProps(state) {
  return {
    reservations: state.reservations.accepted
  };
}

export default connect(mapStateToProps)(AcceptedRequests);
