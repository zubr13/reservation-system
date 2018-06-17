import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./building-details.css";
import RoomsList from "./rooms-list/room-list";
import { Route, Switch } from "react-router-dom";
import RoomDetails from "./rooms-list/room-details/room-details";

class BuildingDetails extends React.Component {
  constructor(props) {
    super(props);
    document.documentElement.scrollTop = 0;
  }

  render() {
    const building =
      _.find(
        _.flatMap(this.props.universities, university => university.buildings),
        ["_id", this.props.match.params.id]
      ) || {};
    return (
      <Switch>
        <Route
          path={"/universities/:id/buildings/:id/rooms/:id"}
          component={RoomDetails}
        />
        <RoomsList rooms={building.rooms} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: state.universities.data
  };
}

export default connect(mapStateToProps)(BuildingDetails);
