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
  componentDidMount() {
    this.props.dispatch(fetchRoomShedule(this.props.location.state.room));
  }

  render() {
    const lessons = this.props.lessons || [];
    const reservations = this.props.reservations || {};
    const reservedLections =
      reservations[this.props.location.state.room.full_name] || [];
    lessons.push(...reservedLections);
    if (_.isEmpty(lessons)) {
      return (
        <p class="empty">Розклад для цієї аудиторії на даний час відсутній</p>
      );
    }
    return (
      <dl>
        {_.sortBy(lessons, "number").map(lesson => (
          <div className="lesson">
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
              {new Date(
                lesson.startTime || timeMapper[lesson.number].startTime
              ).toLocaleString()}
            </dd>
            <br />
            <dt>Час закінчення: </dt>
            <dd>
              {new Date(
                lesson.endTime || timeMapper[lesson.number].endTime
              ).toLocaleString()}
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
    reservations: state.reservations.groupedReservations
  };
}

export default connect(mapStateToProps)(RoomDetails);
