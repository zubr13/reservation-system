import React from "react";
import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div class="main">
        <div class="container">
          <div class="title">
            <h2>Пошук навчального закладу</h2>
            <p>
              Знайдіть навчальний заклад, в якому бажаєте забронювати приміщення
            </p>
          </div>
          <input type="text" />
          <ul class="actions">
            <li>
              <a class="button">Пошук</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
