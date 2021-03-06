import React from "react";
import { fetchRoomShedule } from "../../../../universities.actions";
import { connect } from "react-redux";
import _ from "lodash";
import "./room-details.css";

const timeMapper = {
  1: {
    startTime: "8:30",
    endTime: "10:05"
  },
  2: {
    startTime: "10:25",
    endTime: "12:00"
  },
  3: {
    startTime: "12:20",
    endTime: "13:55"
  },
  4: {
    startTime: "14:15",
    endTime: "15:50"
  },
  5: {
    startTime: "16:10",
    endTime: "17:45"
  }
};
class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.room = {};
    this.currentDate = new Date();
    document.documentElement.scrollTop = 0;
  }
  componentDidMount() {
    const buildings = _.flatMap(
      this.props.universities,
      university => university.buildings
    );
    const rooms = _.flatMap(buildings, building => building.rooms);
    this.room = _.find(rooms, ["_id", this.props.match.params.id]) || {};
    this.props.dispatch(fetchRoomShedule(this.room));
  }

  onDateChange = event => {
    this.currentDate = new Date(event.target.value);
    this.props.dispatch(fetchRoomShedule(this.room, this.currentDate));
  };

  render() {
    const lessons = this.props.lessons || [];
    const reservations = this.props.reservations || {};
    const reservedLections =
      _.filter(
        reservations[this.room.full_name],
        room =>
          new Date(room.startTime).toDateString() ===
          this.currentDate.toDateString()
      ) || [];
    lessons.push(...reservedLections);
    if (_.isEmpty(lessons)) {
      return (
        <div>
          <div className="date-block">
            <h3>Оберіть дату: </h3>
            <input type="date" onChange={this.onDateChange} />
          </div>
          <p className="empty">
            Розклад для цієї аудиторії на даний час відсутній
          </p>
        </div>
      );
    }
    return (
      <dl className="rooms-list">
        <div className="date-block">
          <h3>Оберіть дату: </h3>
          <input type="date" onChange={this.onDateChange} />
        </div>
        {_.sortBy(lessons, "number").map(lesson => (
          <div className="lesson" key="lesson.id">
            <dt>Назва: </dt>
            <dd>{lesson.description || lesson.discipline_name}</dd>
            <br />
            <dt>Викладач: </dt>
            <dd>{_.get(lesson, "teacher.full_name") || lesson.organizer}</dd>
            <br />
            {lesson.groups_names ? (
              <div>
                <dt>Група: </dt>
                <dd>{lesson.groups_names[0]}</dd>
                <br />
              </div>
            ) : null}
            <dt>Час початку: </dt>
            <dd>
              {lesson.startTime
                ? new Date(lesson.startTime).toLocaleString()
                : timeMapper[lesson.number].startTime}
            </dd>
            <br />
            <dt>Час закінчення: </dt>
            <dd>
              {lesson.endTime
                ? new Date(lesson.endTime).toLocaleString()
                : timeMapper[lesson.number].endTime}
            </dd>
          </div>
        ))}
      </dl>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.universities.shedule,
    reservations: state.reservations.groupedReservations,
    universities: state.universities.data
  };
}

export default connect(mapStateToProps)(RoomDetails);
