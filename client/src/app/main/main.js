import React from "react";
import "./main.css";
import { connect } from "react-redux";
import { fetchUniversities } from "../universities/universities.actions";
import { getUniversities } from "../universities/universities.reducer";
import UniversitiesList from "../universities/universities-list/universities-list";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUniversities: []
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchUniversities);
  }

  onSearch = event => {
    const filteredUniversities = this.props.universities.filter(university =>
      university.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      filteredUniversities
    });
  };

  render() {
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="title">
              <h2>Пошук навчального закладу</h2>
              <p>
                Знайдіть навчальний заклад, в якому бажаєте забронювати
                приміщення
              </p>
            </div>
            <input type="text" onChange={this.onSearch} />
            <ul className="actions">
              <li>
                <a className="button">Пошук</a>
              </li>
            </ul>
          </div>
        </div>
        <UniversitiesList universities={this.state.filteredUniversities} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: getUniversities(state)
  };
}

export default connect(mapStateToProps)(Main);
