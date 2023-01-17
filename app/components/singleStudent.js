import React from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../reducers';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class singleStudent extends React.Component {
  componentDidMount() {
    this.props.loadStudent(this.props.match.params.id);
  }
  render() {
    const { id, firstName, lastName, email, imgUrl, campus } =
      this.props.student;
    console.log('yojcdsvisdvh', this.props.student);
    return (
      <div>
        <h1>STUDENT INFO</h1>
        <img src={imgUrl} />
        <div> --- </div>
        <div>firstName: {firstName}</div>
        <div>lastName: {lastName}</div>
        <div>email: {email}</div>
        <div>
          {campus && (
            <NavLink to={`/campuses/${campus.id}`}>
              <div>Attending: {campus.name}</div>
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadStudent: (id) => dispatch(getStudent(id)),
});

// singleStudent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(singleStudent);
