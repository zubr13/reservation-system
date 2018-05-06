import React from "react";
import "./create-reservation.css";
import { postReservation } from "../reservation.actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

class CreateReservation extends React.Component {
  constructor(props) {
    super(props);
    this.reservation = {};
    this.university = {};
    this.room = {};
  }

  componentWillMount() {
    if (this.props.location.state) {
      this.room = this.props.location.state.room;
      this.pathName = this.props.location.state.pathname;
      this.props.history.replace({
        pathname: this.props.location.pathname,
        state: {}
      });
    }
  }

  onSubmit = () => {
    this.props.onSubmit(this.reservation);
  };

  onChange = (propName, event) => {
    this.reservation[propName] = event.target.value;
  };

  getUniversityByPathName(pathName) {
    const universityId = pathName.split("/")[2];
    const university = this.props.universities.find(
      university => university["_id"] === universityId
    );
    return _.cloneDeep(university);
  }

  render() {
    if (this.pathName) {
      this.university = this.getUniversityByPathName(this.pathName);
    }
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
                value={this.university.title}
              />
            </div>
            <div className="input-container">
              <label>Корпус</label>
              <input
                type="text"
                onChange={this.onChange.bind(this, "building")}
                value={this.room.building}
              />
            </div>
            <div className="input-container">
              <label>Аудиторія</label>
              <input
                type="text"
                onChange={this.onChange.bind(this, "room")}
                value={this.room["full_name"]}
              />
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
            <Link to="/reservations">
              <a className="button" onClick={this.onSubmit}>
                Надіслати
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: state.universities.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: reservation => {
      dispatch(postReservation(reservation));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReservation);
