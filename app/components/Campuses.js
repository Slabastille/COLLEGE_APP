import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Campuses(props) {
  return (
    <div>
      <div>Here are the campuses</div>
      <div> --- </div>
      <div>
        {props.campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <div className="card">
                <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
              </div>
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
export default connect(mapStateToProps)(Campuses);
