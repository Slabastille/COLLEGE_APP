import React from 'react';
import { connect } from 'react-redux';

function Campuses(props) {
  return (
    <div>
      <div>Here are the campuses</div>
      <div> --- </div>
      <div>
        {props.campuses.map((campus) => {
          return <div key={campus.id}>{campus.name}</div>;
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
