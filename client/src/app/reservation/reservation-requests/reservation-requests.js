import React from "react";
import "./reservation-requests.css";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AcceptedRequests from "./accepted-requests/accepted-requests";
import ActiveRequests from "./active-requests/active-requests";
import RejectedRequests from "./rejected-requests/rejected-requests";

class ReservationRequests extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="menu reservation-nav">
          <li>
            <NavLink
              to={`${this.props.match.url}/active`}
              activeClassName="active"
            >
              Активні
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/accepted`}
              activeClassName="active"
            >
              Прийняті
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/rejected`}
              activeClassName="active"
            >
              Відхилені
            </NavLink>
          </li>
        </nav>
        <Route
          path={`${this.props.match.url}/active`}
          component={ActiveRequests}
        />
        <Route
          path={`${this.props.match.url}/accepted`}
          component={AcceptedRequests}
        />
        <Route
          path={`${this.props.match.url}/rejected`}
          component={RejectedRequests}
        />
      </div>
    );
  }
}

export default ReservationRequests;
