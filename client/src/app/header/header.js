import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Authorization from "../user/authorization";

class Header extends React.Component {
  logout() {
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  render() {
    return (
      <div className="header container">
        <div className="logo">
          <h1>
            <NavLink to="/main" activeClassName="active">
              <i className="fas fa-graduation-cap fa-lg" />
            </NavLink>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/main" activeClassName="active">
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation/create" activeClassName="active">
                Забронювати
              </NavLink>
            </li>
            <li>
              <NavLink to="/universities" activeClassName="active">
                Університети
              </NavLink>
            </li>
            <li>
              <Authorization allowedRoles={["admin"]}>
                <NavLink
                  to="/reservation-requests/active"
                  activeClassName="active"
                >
                  Заявки на бронювання
                </NavLink>
              </Authorization>
            </li>
            <li>
              <Authorization allowedRoles={["user"]}>
                <NavLink to="/reservations" activeClassName="active">
                  Мої бронювання
                </NavLink>
              </Authorization>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="active">
                Контакти
              </NavLink>
            </li>
            <li>
              {sessionStorage.getItem("token") ? (
                <a onClick={this.logout}>Вийти</a>
              ) : (
                <NavLink to="/login" activeClassName="active">
                  Зареєструватися/увійти
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
