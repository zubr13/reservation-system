import React from "react";
import "./create-building.css";
import { postBuilding } from "../../universities.actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Authorization from "../../../user/authorization";

class CreateBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.building = {};
    this.university = {};
  }

  componentDidMount() {
    this.university = _.find(this.props.universities, [
      "_id",
      this.props.match.params.id
    ]);
  }

  onSubmit = () => {
    this.props.onSubmit(this.university, this.building);
    document.documentElement.scrollTop = 0;
  };

  onChange = (propName, event) => {
    this.building[propName] = event.target.value;
  };

  render() {
    return (
      <Authorization allowedRoles={["admin"]} redirect={true}>
        <div className="featured create-building">
          <div className="container">
            <div className="title">
              <h2>Додавання корпусу</h2>
              <span className="byline">Заповніть усі необхідні поля</span>
            </div>
            <form>
              <div className="input-container">
                <label>Назва корпусу</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "name")}
                />
              </div>
              <div className="input-container">
                <label>Широта</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "latitude")}
                />
              </div>
              <div className="input-container">
                <label>Довгота</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "longitude")}
                />
              </div>
            </form>
          </div>
          <ul className="actions">
            <li>
              <Link to={`/universities/${this.props.match.params.id}`}>
                <a className="button" onClick={this.onSubmit}>
                  Надіслати
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Authorization>
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
    onSubmit: (university, building) => {
      dispatch(postBuilding(university, building));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBuilding);
