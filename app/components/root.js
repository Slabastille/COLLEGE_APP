import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './root.css';
import Header from './Header';
import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';
import singleStudent from './singleStudent';
import singleCampus from './singleCampus';
import { getStudents, getCampuses } from '../reducers';
import campusCreation from './campusCreation';
import studentCreation from './studentCreation';

class Root extends React.Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getCampuses();
  }

  render() {
    return (
      <Router>
        <div className="aboveMain">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/students/:id" component={singleStudent} />
              <Route exact path="/campuses/:id" component={singleCampus} />
              <Route exact path="/campusCreation" component={campusCreation} />
              <Route
                exact
                path="/studentCreation"
                component={studentCreation}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => dispatch(getStudents()),
    getCampuses: () => dispatch(getCampuses()),
  };
};
export default connect(null, mapDispatchToProps)(Root);
