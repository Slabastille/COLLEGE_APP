import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
//import students from '../../server/db/models/students';

const Header = (props) => {
  const numStudents = props.students.length;
  const numCampuses = props.campuses.length;
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Button color="default">
          <NavLink className="headerItems" to="/">
            <Typography gutterBottom variant="h6">
              Home
            </Typography>
          </NavLink>
        </Button>
        <Button>
          <NavLink className="headerItems" to="/students">
            <Typography gutterBottom variant="h6">
              Students
            </Typography>
            <div className="counters"> {numStudents}</div>
          </NavLink>
        </Button>
        <Button>
          <NavLink className="headerItems" to="/campuses">
            <Typography gutterBottom variant="h6">
              Campuses
            </Typography>
            <div className="counters"> {numCampuses}</div>
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};
export default connect(mapStateToProps)(Header);
