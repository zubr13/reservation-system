import React from "react";
import _ from "lodash";
import "./university-details.css";
import BuildingsList from "./buildings-list/buildings-list";
import { Route, Switch } from "react-router-dom";
import BuildingDetails from "./building-details/building-details";

class UniversityDetails extends React.Component {
  render() {
    const university = _.get(this.props, "location.state.university") || {};
    return (
      <Switch>
        <Route
          path={"/universities/:id/buildings/:id"}
          component={BuildingDetails}
        />
        <div className="university-details page container">
          <div className="title">
            <h3>{university.title}</h3>
            <div className="byline">{university.description}</div>
            <dl>
              <dt>Місто: </dt>
              <dd>{university.city}</dd>
              <br />
              <dt>Адреса: </dt>
              <dd>{university.address}</dd>
              <br />
              <dt>Сайт: </dt>
              <dd>{university.website}</dd>
              <br />
              <dt>Телефон: </dt>
              <dd>{university.telephone}</dd>
              <br />
              <dt>Пошта: </dt>
              <dd>{university.email}</dd>
            </dl>
          </div>
          <BuildingsList buildings={university.buildings} />
        </div>
      </Switch>
    );
  }
}

export default UniversityDetails;
