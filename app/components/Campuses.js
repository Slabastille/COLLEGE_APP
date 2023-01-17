import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteCampus } from '../reducers';

function Campuses(props) {
  const { deleteCampus, campuses } = props;
  return (
    <div>
      <div>Here are the campuses</div>
      <div> --- </div>
      <div>
        {campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <div className="card">
                <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
              </div>
              <button onClick={() => deleteCampus(campus.id)}>DELETE</button>
              <div className="space"> - </div>
            </div>
          );
        })}
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
