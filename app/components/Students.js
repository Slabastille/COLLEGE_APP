import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteStudent } from '../reducers';

const Students = (props) => {
  const { deleteStudent, students } = props;
  return (
    <div>
      <h1>Here ARE STUDENTS</h1>
      <div> --- </div>
      <div>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <div className="card">
                <NavLink to={`/students/${student.id}`}>
                  <div>First Name: {student.firstName}</div>
                  <div>Last Name: {student.lastName}</div>
                </NavLink>
                <div>Email: {student.email}</div>

                <div>GPA: {student.gpa}</div>

                <div>-</div>
                <div>School Currently Attending</div>
                <NavLink to={`/campuses/${student.campus.id}`}>
                  <div>
                    {student.campus && <div> {student.campus.name}</div>}
                  </div>
                </NavLink>
              </div>
              <button onClick={() => deleteStudent(student.id)}>DELETE</button>

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
