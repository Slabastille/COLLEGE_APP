import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

const GET_STUDENT = 'GET_STUDENT';
const GET_CAMPUS = 'GET_CAMPUS';

const DELETE_CAMPUS = 'DELETE_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';

const CREATE_STUDENT = 'CREATE_STUDENT';
const CREATE_CAMPUS = 'CREATE_CAMPUS';

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
const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};
const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};
const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};
const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
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
export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const { data: campus } = await axios.delete(`/api/campuses/${id}`);
    dispatch(_deleteCampus(campus));
    history.push('/campuses');
  };
};
export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const { data: student } = await axios.delete(`/api/students/${id}`);
    dispatch(_deleteStudent(student));
    history.push('/students');
  };
};
export const createStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/students', student);
    dispatch(_createStudent(created));
    history.push('/');
  };
};
export const createCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/campuses', campus);
    dispatch(_createCampus(created));
    history.push('/');
  };
};
const initialState = {
  students: [],
  campuses: [],
  student: {},
  campus: {},
};

// eslint-disable-next-line complexity
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
    // eslint-disable-next-line no-case-declarations
    case DELETE_CAMPUS:
      const newCampusList = state.campuses.filter(
        (campus) => campus.id !== action.campus.id
      );
      return { ...state, campuses: [...newCampusList] };

    // eslint-disable-next-line no-case-declarations
    case DELETE_STUDENT:
      const newStudentList = state.students.filter(
        (student) => student.id !== action.student.id
      );
      return { ...state, students: [...newStudentList] };
    case CREATE_STUDENT:
      return { ...state, student: action.student };
    case CREATE_CAMPUS:
      return { ...state, campus: action.campus.data };

    default:
      return state;
  }
};
