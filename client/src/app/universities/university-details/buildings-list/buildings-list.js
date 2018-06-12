import React from "react";
import "./buildings-list.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import { GoogleMapComponent } from "./google-map";

class BuildingsList extends React.Component {
  render() {
    if (!this.props.buildings) {
      return (
        <p>
          Інформація про будівлі цього університету ще не додано. Зверніться,
          будь ласка до адміністратора
        </p>
      );
    }
    return (
      <div>
        <h4>Список корпусів університету</h4>
        <ul className="buildings-list">
          {_(this.props.buildings)
            .sortBy(building => Number(building.name))
            .map(building => {
              return (
                <li key={building["_id"]}>
                  <p>Корпус номер {building.name}</p>
                  <GoogleMapComponent
                    lat={building.latitude}
                    lng={building.longitude}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWb3v48EWpheJjEziApCo2y37NWGFOxZ4&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={
                      <div style={{ height: `300px`, width: "500px", border: "1px solid #27ae61", margin: "auto" }} />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                  <Link
                    to={{
                      pathname: `${window.location.pathname}/buildings/${
                        building._id
                      }`,
                      state: { building }
                    }}
                  >
                    <div className="button">Детальніше</div>
                  </Link>
                </li>
              );
            })
            .value()}
        </ul>
      </div>
    );
  }
}

export default BuildingsList;
