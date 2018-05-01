import React from "react";
import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="title">
            <h2>Пошук навчального закладу</h2>
            <p>
              Знайдіть навчальний заклад, в якому бажаєте забронювати приміщення
            </p>
          </div>
          <input type="text" />
          <ul className="actions">
            <li>
              <a className="button">Пошук</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
