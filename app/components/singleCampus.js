import React from 'react';
import { connect } from 'react-redux';
import { getCampus } from '../reducers';
import { NavLink } from 'react-router-dom';

class singleCampus extends React.Component {
  componentDidMount() {
    this.props.loadCampus(this.props.match.params.id);
  }
  render() {
    const { campus } = this.props;
    const { name, imgUrl, address, description, students } = campus;

    return (
      <div>
        <h1>CAMPUS INFO</h1>
        <div> --- </div>
        <img src={imgUrl} />
        <div>name: {name}</div>
        <div>address: {address}</div>
        <div>{description}</div>
        <div>---</div>
        <h3> students</h3>

        {campus.students &&
          campus.students.length > 0 &&
          campus.students.map((student) => {
            return (
              <div key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  {student.firstName}
                </NavLink>
              </div>
            );
          })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadCampus: (id) => dispatch(getCampus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(singleCampus);
