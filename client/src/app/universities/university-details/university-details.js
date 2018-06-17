import React from "react";
import _ from "lodash";
import "./university-details.css";
import { connect } from "react-redux";
import BuildingsList from "./buildings-list/buildings-list";
import { Route, Switch } from "react-router-dom";
import BuildingDetails from "./building-details/building-details";
import Authorization from "../../user/authorization";
import { Link } from "react-router-dom";

class UniversityDetails extends React.Component {
  constructor(props) {
    super(props);
    document.documentElement.scrollTop = 0;
  }

  render() {
    const university =
      _.get(this.props, "location.state.university") ||
      _.find(this.props.universities, ["_id", this.props.match.params.id]) ||
      {};
    return _.isEmpty(university) ? null : (
      <Switch>
        <Route
          path={"/universities/:id/buildings/create"}
          component={BuildingDetails}
        />
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
          <Authorization allowedRoles={["admin"]}>
            <Link to={`/universities/${university._id}/buildings/create`}>
              <div className="button">Додати корпус</div>
            </Link>
          </Authorization>
          <BuildingsList buildings={university.buildings} />
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

export default connect(mapStateToProps)(UniversityDetails);
