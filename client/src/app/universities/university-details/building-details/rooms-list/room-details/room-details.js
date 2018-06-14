import React from "react";
import { fetchRoomShedule } from "../../../../universities.actions";
import { connect } from "react-redux";

class RoomDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRoomShedule(this.props.location.state.room));
  }

  render() {
    return <span>Room details</span>;
  }
}

function mapStateToProps(state) {
  return {
    universities: state.universities.shedule
  };
}

export default connect(mapStateToProps)(RoomDetails);
