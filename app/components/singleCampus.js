import React from 'react';
import { connect } from 'react-redux';
import { getCampus } from '../reducers';
import PropTypes from 'prop-types';

class singleCampus extends React.Component {
  componentDidMount() {
    this.props.loadCampus(this.props.match.params.id);
  }
  render() {
    const { name, imgUrl, address, description } = this.props.campus;
    // console.log('this is campus', this.props.campus);
    return (
      <div>
        <div>here is the campus</div>
        <div> --- </div>
        <div>{name}</div>
        <div>{imgUrl}</div>
        <div>{address}</div>
        <div>{description}</div>
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
