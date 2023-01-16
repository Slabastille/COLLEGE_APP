import React from 'react';
import { NavLink } from 'react-router-dom';
//import students from '../../server/db/models/students';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <div>
      <Button>
        <NavLink className="headerItems" to="/">
          Home
        </NavLink>
      </Button>
      <Button>
        <NavLink className="headerItems" to="/students">
          Students
        </NavLink>
      </Button>
      <Button>
        <NavLink className="headerItems" to="/campuses">
          Campuses
        </NavLink>
      </Button>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     students: state.students,
//     campuses: state.campuses,
//   };
// };
export default Header;
