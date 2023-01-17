import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteCampus } from '../reducers';

function Campuses(props) {
  const { deleteCampus, campuses } = props;
  return (
    <div>
      <h1>HERE ARE THE CAMPUSES</h1>
      <div> --- </div>
      <div>
        {campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <img src={campus.imgUrl} />
              <div className="card">
                <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
                <div> - </div>
                <div>{campus.description}</div>
                <div>{campus.address}</div>
                <div>Students Enrolled: {campus.students.length}</div>

                {/* <div>{campus.description}</div> */}
              </div>
              <button onClick={() => deleteCampus(campus.id)}>DELETE</button>
              <div className="space"> - </div>
            </div>
          );
        })}
      </div>
      <div>
        <NavLink to="/campusCreation">CLICK HERE TO CREATE A CAMPUS</NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};
const mapDispatchToProps = (dispatch, { history }) => {
  return { deleteCampus: (id) => dispatch(deleteCampus(id, history)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
