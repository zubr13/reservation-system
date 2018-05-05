import React from "react";
import "./create-reservation.css";

class CreateReservation extends React.Component {
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
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Університет</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Корпус</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Аудиторія</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Час початку</label>
              <input type="time" />
            </div>
            <div className="input-container">
              <label>Час закінченя</label>
              <input type="time" />
            </div>
            <div className="input-container">
              <label>Опис</label>
              <textarea />
            </div>
          </form>
        </div>
        <ul className="actions">
          <li>
            <a className="button">Надіслати</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CreateReservation;
