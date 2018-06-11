import React from "react";
import { connect } from "react-redux";
import { getReservations } from "../../reservation.reducer";
import { fetchUserReservations } from "../../reservation.actions";

class RejectedRequests extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserReservations);
  }

  render() {
    return <span>RejectedRequests</span>;
  }
}

function mapStateToProps(state) {
  return {
    reservations: getReservations(state)
  };
}

export default connect(mapStateToProps)(RejectedRequests);
