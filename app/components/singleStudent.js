import React from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../reducers';
import PropTypes from 'prop-types';

class singleStudent extends React.Component {
  componentDidMount() {
    this.props.loadStudent(this.props.match.params.id);
  }
  render() {
    const { id, firstName, lastName, email, imgUrl } = this.props.student;
    console.log('yojcdsvisdvh', this.props.student);
    return (
      <div>
        <div>here is the student</div>
        <div> --- </div>
        <div>{lastName}</div>
        <div>{firstName}</div>
        <div>{email}</div>
        <div>{imgUrl}</div>
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
