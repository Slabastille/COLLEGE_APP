import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Students = (props) => {
  return (
    <div>
      <div>here is students</div>
      <div> --- </div>
      <div>
        {props.students.map((student) => {
          return (
            <div key={student.id}>
              <div className="card">
                <NavLink to={`/students/${student.id}`}>
                  {student.firstName}
                </NavLink>
              </div>
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
export default connect(mapStateToProps)(Students);
