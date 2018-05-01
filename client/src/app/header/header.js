import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div class="header container">
        <div class="logo">
          <h1>
            <a>
              <i class="fas fa-graduation-cap fa-lg" />
            </a>
          </h1>
        </div>
        <div class="menu">
          <ul>
            <li class="current_page_item">
              <a>Головна</a>
            </li>
            <li>
              <a>Мої бронювання</a>
            </li>
            <li>
              <a>Університети</a>
            </li>
            <li>
              <a>Контакти</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
