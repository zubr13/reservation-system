import React from "react";
import "./create-room.css";
// import { postUniversity } from "../universities.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Authorization from "../../../../../user/authorization";

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.room = {};
  }

  onSubmit = () => {
    this.props.onSubmit(this.room);
    document.documentElement.scrollTop = 0;
  };

  onChange = (propName, event) => {
    this.room[propName] = event.target.value;
  };

  render() {
    return (
      <Authorization allowedRoles={["admin"]} redirect={true}>
        <div className="featured create-room">
          <div className="container">
            <div className="title">
              <h2>Додавання аудиторії</h2>
              <span className="byline">Введіть назву аудиторії</span>
            </div>
            <form>
              <div className="input-container">
                <label>Назва аудиторії</label>
                <input
                  type="text"
                  onChange={this.onChange.bind(this, "name")}
                />
              </div>
            </form>
          </div>
          <ul className="actions">
            <li>
              <Link to="/universities">
                <a className="button" onClick={this.onSubmit}>
                  Надіслати
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Authorization>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: state.universities.data
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmit: room => {
//       dispatch(postRoom(room));
//     }
//   };
// }

export default connect(mapStateToProps)(CreateRoom);
