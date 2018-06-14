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
            <dd>{lesson.discipline_name}</dd>
            <br />
            <dt>Викладач: </dt>
            <dd>{lesson.teacher.full_name}</dd>
            <br />
            <dt>Група: </dt>
            <dd>{lesson.groups_names[0]}</dd>
            <br />
            <dt>Час початку: </dt>
            <dd>{timeMapper[lesson.number].startTime}</dd>
            <br />
            <dt>Час закінченні: </dt>
            <dd>{timeMapper[lesson.number].endTime}</dd>
          </div>
        ))}
      </dl>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.universities.shedule
  };
}

export default connect(mapStateToProps)(RoomDetails);
