import React from 'react';
import { NavLink } from 'react-router-dom';
//import students from '../../server/db/models/students';

const Header = () => {
  return (
    <div>
      <buttom>
        <NavLink className="headerItems" to="/">
          Home
        </NavLink>
      </buttom>
      <buttom>
        <NavLink className="headerItems" to="/students">
          Students
        </NavLink>
      </buttom>
      <buttom>
        <NavLink className="headerItems" to="/campuses">
          Campuses
        </NavLink>
      </buttom>
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
