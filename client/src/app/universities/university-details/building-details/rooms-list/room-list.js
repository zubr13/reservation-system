import React from "react";
import "./room-list.css";

class RoomList extends React.Component {
  render() {
    return (
      <ul className="rooms-list">
        {this.props.rooms.map(room => {
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
        })}
      </ul>
    );
  }
}

export default RoomList;
