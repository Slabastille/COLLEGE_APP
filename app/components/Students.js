import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteStudent } from '../reducers';

const Students = (props) => {
  const { deleteStudent, students } = props;
  return (
    <div>
      <div>here is students</div>
      <div> --- </div>
      <div>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <div className="card">
                <NavLink to={`/students/${student.id}`}>
                  {student.firstName}
                </NavLink>
              </div>
              <button onClick={() => deleteStudent(student.id)}>DELETE</button>

              <div>allStudentsArr</div>
              <div className="space"> - </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};
const mapDispatchToProps = (dispatch, { history }) => {
  return { deleteStudent: (id) => dispatch(deleteStudent(id, history)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
