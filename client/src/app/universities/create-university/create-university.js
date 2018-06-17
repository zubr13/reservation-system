import React from "react";
import "./create-university.css";
import { postUniversity } from "../universities.actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Authorization from "../../user/authorization";

class CreateUniversity extends React.Component {
  constructor(props) {
    super(props);
    this.university = {};
  }

  onSubmit = () => {
    this.props.onSubmit(this.university);
    document.documentElement.scrollTop = 0;
  };

  onChange = (propName, event) => {
    this.university[propName] = event.target.value;
  };

  render() {
    return (
      <Authorization allowedRoles={["admin"]} redirect={true}>
        <div className="featured create-university">
          <div className="container">
            <div className="title">
              <h2>Додавання університету</h2>
              <span className="byline">Заповніть усі необхідні поля</span>
            </div>
            <form>
              <div className="input-container">
                <label>Назва університету</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "title")}
                />
              </div>
              <div className="input-container">
                <label>Опис</label>
                <textarea onChange={this.onChange.bind(this, "description")} />
              </div>
              <div className="input-container">
                <label>Адреса</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "address")}
                />
              </div>
              <div className="input-container">
                <label>Телефон</label>
                <input
                  type="tel"
                  onChange={this.onChange.bind(this, "telephone")}
                />
              </div>
              <div className="input-container">
                <label>Веб-сайт</label>
                <input
                  type="url"
                  onChange={this.onChange.bind(this, "website")}
                />
              </div>
              <div className="input-container">
                <label>Емейл</label>
                <input
                  type="email"
                  onChange={this.onChange.bind(this, "email")}
                />
              </div>
              <div className="input-container">
                <label>Місто</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "city")}
                />
              </div>
            </form>
          </div>
          <ul className="actions">
            <li>
              <Link to="/universities">
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
    onSubmit: university => {
      dispatch(postUniversity(university));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUniversity);
