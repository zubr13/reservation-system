import React from "react";
import "./universities.css";
import { connect } from "react-redux";
import { fetchUniversities } from "./universities.actions";
import { getUniversities } from "./universities.reducer";

class Universities extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUniversities);
  }
  render() {
    return (
      <div className="page container">
        <div className="title">
          <h2>Список університетів</h2>
          <span className="byline">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </span>
        </div>
        <p>
          {" "}
          Vivamus fermentum nibh in augue. Praesent a lacus at urna congue
          rutrum. Nulla enim eros nibh. Duis enim nulla, luctus eu, dapibus
          lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend
          rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id
          lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium
          suscipit, justo nulla blandit libero, in blandit augue justo quis
          nisl. Fusce mattis viverra elit. Fusce quis tortor.
        </p>
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
    universities: getUniversities(state)
  };
}

export default connect(mapStateToProps)(Universities);
