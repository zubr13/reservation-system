import callApi from "../../utils/apiService";
export const ADD_UNIVERSTIES = "ADD_UNIVERSITIES";
export const ADD_UNIVERSITY = "ADD_UNIVERSITY";
export const SET_SHEDULE = "SET_SHEDULE";

export function addUniversities(universities) {
  return {
    type: ADD_UNIVERSTIES,
    universities
  };
}

export function addUniversity(university) {
  return {
    type: ADD_UNIVERSITY,
    university
  };
}

export function setShedule(shedule) {
  return {
    type: SET_SHEDULE,
    shedule
  };
}

export function fetchUniversities(dispatch) {
  return callApi("universities").then(res => {
    dispatch(addUniversities(res.universities));
  });
}

export function postUniversity(university) {
  return dispatch => {
    return callApi("universities", "post", university).then(res => {
      dispatch(addUniversity(res.university));
    });
  };
}

export function fetchRoomShedule(room, date = new Date()) {
  return dispatch =>
    fetch(
      `https://api.rozklad.hub.kpi.ua/lessons/?&day=${date.getDay()}&week=1&rooms=${
        room.id
      }`
    )
      .then(res => res.json())
      .then(lessons => {
        const requests = lessons.results.map(lesson =>
          fetch(
            `https://api.rozklad.hub.kpi.ua/teachers/${lesson.teachers[0]}/`
          ).then(response => response.json())
        );
        return Promise.all(requests).then(teachers => {
          lessons.results.forEach((lesson, index) => {
            lesson.teacher = teachers[index];
          });
          dispatch(setShedule(lessons.results));
        });
      });
}
