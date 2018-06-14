import React from "react";
import "./room-list.css";
import _ from "lodash";
import { Link } from "react-router-dom";

class RoomList extends React.Component {
  render() {
    return (
      <ul className="rooms-list">
        {_(this.props.rooms)
          .sortBy("name")
          .map(room => {
            return (
              <li>
                <div>
                  Аудиторія № {room.name}
                  <br />
                  Повне ім'я: {room["full_name"]}
                </div>
                <div class="rooms-controls">
                  <Link
                    to={{
                      pathname: `/reservation/create`,
                      state: { room, pathname: window.location.pathname }
                    }}
                  >
                    <div className="button">Забронювати</div>
                  </Link>
                  <Link
                    to={{
                      pathname: `${window.location.pathname}/rooms/${room._id}`,
                      state: { room }
                    }}
                  >
                    <div className="button">Детальніше</div>
                  </Link>
                </div>
              </li>
            );
          })
          .value()}
      </ul>
    );
  }
}

export default RoomList;
