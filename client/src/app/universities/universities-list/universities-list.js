import React from "react";
import { Link } from "react-router-dom";
import "./universities-list.css";

class UniversitiesList extends React.Component {
  render() {
    return (
      <ul className="universities-list">
        {this.props.universities.map(university => {
          return (
            <li key={university._id}>
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
              <Link
                to={{
                  pathname: `/universities/${university._id}`,
                  state: { university }
                }}
              >
                <div className="button">Переглянути</div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UniversitiesList;
