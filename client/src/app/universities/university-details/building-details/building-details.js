import React from "react";
import "./building-details.css";
import RoomsList from "./rooms-list/room-list";
import { Route, Switch } from "react-router-dom";
import RoomDetails from "./rooms-list/room-details/room-details";

class BuildingDetails extends React.Component {
  render() {
    const building = this.props.location.state.building || {};
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

export default BuildingDetails;
