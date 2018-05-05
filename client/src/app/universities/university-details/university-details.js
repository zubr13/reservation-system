import React from "react";
import "./university-details.css";

class UniversityDetails extends React.Component {
  render() {
    const university = this.props.location.state.university;
    return (
      <div className="university-details page container">
        <div className="title">
          <h3>{university.title}</h3>
          <div className="byline">{university.description}</div>
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
        </div>
      </div>
    );
  }
}

export default UniversityDetails;
