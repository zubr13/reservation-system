import React from "react";
import { connect } from "react-redux";
import { fetchActiveReservations } from "../../reservation.actions";
import RequestsList from "../../requests-list/requests-list";

class ActiveRequests extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchActiveReservations);
  }

  render() {
    return <RequestsList reservations={this.props.reservations} />;
  }
}

function mapStateToProps(state) {
  return {
    reservations: state.reservations.active
  };
}

export default connect(mapStateToProps)(ActiveRequests);
