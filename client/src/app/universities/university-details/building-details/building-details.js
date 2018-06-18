import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./building-details.css";
import RoomsList from "./rooms-list/room-list";
import { Route, Switch, Link } from "react-router-dom";
import RoomDetails from "./rooms-list/room-details/room-details";
import Authorization from "../../../user/authorization";
import CreateRoom from "./rooms-list/create-room/create-room";

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
          path={"/universities/:id/buildings/:id/rooms/create"}
          component={CreateRoom}
        />
        <Route
          path={"/universities/:id/buildings/:id/rooms/:id"}
          component={RoomDetails}
        />
        <div>
          <Authorization allowedRoles={["admin"]}>
            <Link to={`${this.props.match.url}/rooms/create`}>
              <div className="button add-room">Додати аудиторію</div>
            </Link>
          </Authorization>
          <RoomsList rooms={building.rooms} />
        </div>
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
