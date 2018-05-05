import React from "react";
import "./room-list.css";
import _ from "lodash";

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
                <div className="button">Забронювати</div>
              </li>
            );
          })
          .value()}
      </ul>
    );
  }
}

export default RoomList;
