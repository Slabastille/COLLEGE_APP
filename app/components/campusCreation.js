import React from 'react';
import { createCampus } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class campusCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imgUrl: '',
      address: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { name, imgUrl, address, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div>CREATE A NEW CAMPUS</div>
        <div>---</div>
        <form id="create-campus" onSubmit={handleSubmit}>
          <label htmlFor="name">name:</label>
          <input name="name" value={name} onChange={handleChange} />
          <label htmlFor="address">address</label>
          <input name="address" value={address} onChange={handleChange} />
          <label htmlFor="description">description</label>
          <input
            name="description"
            value={description}
            onChange={handleChange}
          />
          {/* <select type="submit">
            <option>A</option>
            <option>V</option>
            <option>C</option>
            <option>D</option>
          </select> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampus(campus, history)),
});

export default connect(null, mapDispatchToProps)(campusCreation);
