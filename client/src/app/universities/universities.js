import React from "react";
import "./universities.css";
import { connect } from "react-redux";
import { fetchUniversities } from "./universities.actions";
import { getUniversities } from "./universities.reducer";

class Universities extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUniversities);
  }
  render() {
    return (
      <div className="page container">
        <div className="title">
          <h2>Список університетів</h2>
          <span className="byline">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </span>
        </div>
        <ul className="universities-list">
          {this.props.universities.map(university => {
            return (
              <li>
                <h3>{university.title}</h3>
                <p>{university.description}</p>
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
                <a className="button">Переглянути</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: getUniversities(state)
  };
}

export default connect(mapStateToProps)(Universities);
