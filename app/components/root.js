import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Header from './Header';

class Root extends React.Component {
  // componentDidMount() {
  //   this.props.getStudents();
  //   this.props.getCampuses();
  // }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/students" component={Students} />
                <Route exact path="/campuses" component={Campuses} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
//   const mapDispatchToProps = (dispatch) => ({
//     getStudents: () => dispatch(getStudents()),
//     getCampuses: () => dispatch(getCampuses()),
//   });
//   connect(null, mapDispatchToProps)
export default Root;
