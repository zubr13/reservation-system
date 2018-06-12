import React from "react";
import { connect } from "react-redux";
import "./reservations-list.css";
import _ from "lodash";
import { updateReservation } from "../reservation.actions";

const statusMapper = {
  active: "Активна",
  accepted: "Прийнята",
  rejected: "Відхилена"
};

class ReservationList extends React.Component {
  render() {
    if (!this.props.reservations || !_.isArray(this.props.reservations)) {
      return null;
    }
    return (
      <ul className="reservations-list">
        {this.props.reservations.map(reservation => {
          return (
            <li key={reservation["_id"]}>
              <span className="reservation-status">
                {statusMapper[reservation.status]}
              </span>
              <h3>{reservation.description}</h3>
              <p>{reservation.organizer}</p>
              <dl>
                <dt>Час початку: </dt>
                <dd>{new Date(reservation.startTime).toLocaleString()}</dd>
                <br />
                <dt>Час закінчення: </dt>
                <dd>{new Date(reservation.endTime).toLocaleString()}</dd>
                <br />
                <dt>Університет: </dt>
                <dd>{reservation.university}</dd>
                <br />
                <dt>Корпус: </dt>
                <dd>{reservation.building}</dd>
                <br />
                <dt>Аудиторія: </dt>
                <dd>{reservation.room}</dd>
              </dl>
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    reservation: state.reservations.reservation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdate: reservation => {
      dispatch(updateReservation(reservation));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);
