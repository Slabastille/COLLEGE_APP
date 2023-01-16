import React from 'react';
import { connect } from 'react-redux';

const Students = (props) => {
  return (
    <div>
      <div>here is students</div>
      <div> --- </div>
      <div>
        {props.students.map((student) => {
          return <div key={student.id}>{student.firstName}</div>;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};
export default connect(mapStateToProps)(Students);
