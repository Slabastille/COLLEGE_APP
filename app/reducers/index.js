import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// -- actions --
const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};
const _getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};

// -- thunks -- (pre results)
export const getStudents = () => {
  return (dispatch) => {
    axios
      .get('/api/students')
      .then((res) => {
        dispatch(_getStudents(res.data));
      })
      .catch((err) => {
        console.log('Could not get students', err.message);
      });
  };
};

export const getCampuses = () => {
  return (dispatch) => {
    axios
      .get('/api/campuses')
      .then((res) => {
        dispatch(_getCampuses(res.data));
      })
      .catch((err) => {
        console.log('Could not get Campuses', err.message);
      });
  };
};

const initialState = {
  students: [],
  campuses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.students };
    case GET_CAMPUSES:
      return { ...state, campuses: action.campuses };
    default:
      return state;
  }
};
