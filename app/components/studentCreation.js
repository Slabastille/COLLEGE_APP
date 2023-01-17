import React from 'react';
import { createStudent } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class studentCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imgUrl: '',
      gpa: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createStudent({ ...this.state });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { firstName, lastName, email, imgUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div>CREATE A NEW USER</div>
        <div>---</div>
        <form id="create-student" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" value={firstName} onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" value={lastName} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input name="email" value={email} onChange={handleChange} />
          <label htmlFor="imgUrl">Image URL</label>
          <input name="imgUrl" value={imgUrl} onChange={handleChange} />
          <label htmlFor="gpa">gpa</label>
          <input name="gpa" value={gpa} onChange={handleChange} />
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
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatchToProps)(studentCreation);
