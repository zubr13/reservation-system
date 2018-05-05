import React from "react";
import "./create-reservation.css";
import { postReservation } from "../reservation.actions";
import { connect } from "react-redux";

class CreateReservation extends React.Component {
  constructor(props) {
    super(props);
    this.reservation = {};
  }

  onSubmit = () => {
    this.props.onSubmit(this.reservation);
  };

  onChange = (propName, event) => {
    this.reservation[propName] = event.target.value;
  };

  render() {
    return (
      <div className="featured create-reservation">
        <div className="container">
          <div className="title">
            <h2>Форма для резерування</h2>
            <span className="byline">
              Надішліть запит на резерування та очікуйте на підтвердження
              адміністратора
            </span>
          </div>
          <form>
            <div className="input-container">
              <label>ПІБ організатора</label>
              <input
                type="text"
                onChange={this.onChange.bind(this, "organizer")}
              />
            </div>
            <div className="input-container">
              <label>Університет</label>
              <input
                type="text"
                onChange={this.onChange.bind(this, "university")}
              />
            </div>
            <div className="input-container">
              <label>Корпус</label>
              <input
                type="text"
                onChange={this.onChange.bind(this, "building")}
              />
            </div>
            <div className="input-container">
              <label>Аудиторія</label>
              <input type="text" onChange={this.onChange.bind(this, "room")} />
            </div>
            <div className="input-container">
              <label>Час початку</label>
              <input
                type="datetime-local"
                onChange={this.onChange.bind(this, "startTime")}
              />
            </div>
            <div className="input-container">
              <label>Час закінченя</label>
              <input
                type="datetime-local"
                onChange={this.onChange.bind(this, "endTime")}
              />
            </div>
            <div className="input-container">
              <label>Опис</label>
              <textarea onChange={this.onChange.bind(this, "description")} />
            </div>
          </form>
        </div>
        <ul className="actions">
          <li>
            <a className="button" onClick={this.onSubmit}>
              Надіслати
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: reservation => {
      dispatch(postReservation(reservation));
    }
  };
}

export default connect(() => ({}), mapDispatchToProps)(CreateReservation);
