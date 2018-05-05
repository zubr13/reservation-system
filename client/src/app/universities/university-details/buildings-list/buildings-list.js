import React from "react";
import "./buildings-list.css";
import _ from "lodash";
import { Link } from "react-router-dom";

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
