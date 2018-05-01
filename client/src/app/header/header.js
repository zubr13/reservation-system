import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

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
            <li>
              <NavLink to="/main" activeClassName="active">Головна</NavLink>
            </li>
            <li>
              <NavLink to="/reservations" activeClassName="active">Мої бронювання</NavLink>
            </li>
            <li>
              <NavLink to="/universities" activeClassName="active">Університети</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="active">Контакти</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
