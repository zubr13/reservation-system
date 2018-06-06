import React from "react";
import "./universities.css";
import { connect } from "react-redux";
import { fetchUniversities } from "./universities.actions";
import { getUniversities } from "./universities.reducer";
import UniversitiesList from "./universities-list/universities-list";

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
            Оберіть навчальний заклад, який бажаєте забронювати
          </span>
        </div>
        <UniversitiesList universities={this.props.universities} />
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
