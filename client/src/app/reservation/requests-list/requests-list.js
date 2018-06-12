import React from "react";
import { connect } from "react-redux";
import "../reservations-list/reservations-list.css";
import _ from "lodash";
import { updateReservation } from "../reservation.actions";

class RequestsList extends React.Component {
  onAccept = reservation => {
    reservation.status = "accepted";
    this.props.onUpdate(reservation);
  };

  onReject = reservation => {
    reservation.status = "rejected";
    this.props.onUpdate(reservation);
  };

  render() {
    if (!this.props.reservations || !_.isArray(this.props.reservations)) {
      return null;
    }
    return (
      <ul className="reservations-list">
        {this.props.reservations.map(reservation => {
          return (
            <li key={reservation["_id"]}>
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
              <div className="reservation-accepting">
                <div
                  className="button"
                  onClick={this.onAccept.bind(this, reservation)}
                >
                  Прийняти
                </div>
                <div
                  className="button"
                  onClick={this.onReject.bind(this, reservation)}
                >
                  Відхилити
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestsList);
