import React from "react";
import "./building-details.css";
import RoomsList from "./rooms-list/room-list";

class BuildingDetails extends React.Component {
  render() {
    const building = this.props.location.state.building;
    return <RoomsList rooms={building.rooms} />;
  }
}

export default BuildingDetails;
