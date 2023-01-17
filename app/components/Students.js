import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteStudent } from '../reducers';

const Students = (props) => {
  const { deleteStudent, students } = props;
  return (
    <div>
      <h1>HERE ARE STUDENTS</h1>
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
                <img src={student.imgUrl} />
                <div>Email: {student.email}</div>
                <div>GPA: {student.gpa}</div>

                <div>-</div>
                <div>School Currently Attending</div>
                <div>
                  {student.campus && (
                    <NavLink to={`/campuses/${student.campus.id}`}>
                      <div> {student.campus.name}</div>
                    </NavLink>
                  )}
                </div>
              </div>
              <button onClick={() => deleteStudent(student.id)}>DELETE</button>

              <div className="space"> - </div>
            </div>
          );
        })}
      </div>
      <div>
        <NavLink to="/studentCreation">CLICK HERE TO CREATE A STUDENT</NavLink>
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
