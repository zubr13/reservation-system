import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header container">
        <div className="logo">
          <h1>
            <a>
              <i className="fas fa-graduation-cap fa-lg" />
            </a>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li className="current_page_item">
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/reservations">Мої бронювання</Link>
            </li>
            <li>
              <Link to="/universities">Університети</Link>
            </li>
            <li>
              <Link to="/contacts">Контакти</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
