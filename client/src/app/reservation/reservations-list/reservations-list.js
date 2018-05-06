import React from "react";
import "./reservations-list.css";
import _ from "lodash";

class ReservationList extends React.Component {
  render() {
    if (!this.props.reservations || !_.isArray(this.props.reservations)) {
      return null;
    }
    return (
      <ul class="reservations-list">
        {this.props.reservations.map(reservation => {
          return (
            <li>
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

export default ReservationList;
