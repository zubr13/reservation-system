import React from "react";
import "./universities-list.css";

class UniversitiesList extends React.Component {
  render() {
    return (
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
    );
  }
}

export default UniversitiesList;
