import React from "react";
import "./universities.css";
import { connect } from "react-redux";
import { fetchUniversities } from "./universities.actions";
import {
  fetchUserReservations,
  groupReservationsByRoom
} from "../reservation/reservation.actions";
import { getUniversities } from "./universities.reducer";
import UniversitiesList from "./universities-list/universities-list";
import UniversityDetails from "./university-details/university-details";
import { Route, Switch } from "react-router-dom";

class Universities extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUniversities);
    this.props.dispatch(fetchUserReservations).then(() => {
      this.props.dispatch(groupReservationsByRoom(this.props.reservations));
    });
  }

  render() {
    return (
      <Switch>
        <Route path={"/universities/:id"} component={UniversityDetails} />
        <div className="page container">
          <div className="title">
            <h2>Список університетів</h2>
            <span className="byline">
              Оберіть навчальний заклад, який бажаєте забронювати
            </span>
          </div>
          <UniversitiesList universities={this.props.universities} />
        </div>
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: getUniversities(state),
    reservations: state.reservations.data
  };
}

export default connect(mapStateToProps)(Universities);
