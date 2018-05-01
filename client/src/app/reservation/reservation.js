import React from "react";
import "./reservation.css";
import { connect } from "react-redux";
import { getReservations } from "./reservation.reducer";
import { fetchReservations } from "./reservation.actions";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchReservations);
  }

  render() {
    return (
      <div className="featured">
        <div className="container">
          <div className="title">
            <h2>Форма для резерування</h2>
            <span className="byline">
              Donec leo, vivamus fermentum nibh in augue praesent a lacus at
              urna congue
            </span>
          </div>
          <p>
            This is <strong>Soft String</strong>, a free, fully
            standards-compliant CSS template designed by{" "}
            <a href="http://templated.co" rel="nofollow">
              TEMPLATED
            </a>. The photos in this template are from{" "}
            <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is
            released under the{" "}
            <a href="http://templated.co/license">
              Creative Commons Attribution
            </a>{" "}
            license, so you're pretty much free to do whatever you want with it
            (even use it commercially) provided you give us credit for it. Have
            fun :){" "}
          </p>
        </div>
        <ul className="actions">
          <li>
            <a className="button">Etiam posuere</a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reservations: getReservations(state)
  };
}

export default connect(mapStateToProps)(Reservation);
