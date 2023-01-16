import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

const GET_STUDENT = 'GET_STUDENT';
const GET_CAMPUS = 'GET_CAMPUS';

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

const _getStudent = (student) => {
  return {
    type: GET_STUDENT,
    student,
  };
};
const _getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus,
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

export const getStudent = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/students/${id}`)
      .then((res) => {
        dispatch(_getStudent(res.data));
      })
      .catch((err) => {
        console.log('Could not get single student', err.message);
      });
  };
};
export const getCampus = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/campuses/${id}`)
      .then((res) => {
        dispatch(_getCampus(res.data));
      })
      .catch((err) => {
        console.log('Could not get single campus', err.message);
      });
  };
};

const initialState = {
  students: [],
  campuses: [],
  student: {},
  campus: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.students };
    case GET_CAMPUSES:
      return { ...state, campuses: action.campuses };
    case GET_STUDENT:
      return { ...state, student: action.student };
    case GET_CAMPUS:
      return { ...state, campus: action.campus };
    default:
      return state;
  }
};
