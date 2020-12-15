import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div style={{
        border: 'solid black 2px',
        width: '40%', margin: 10
      }} >
        <h4>Student</h4>
        <h5>id={this.props.id}</h5>
        <h5>name={this.props.name}</h5>
      </div>
    )
  }
}

CCStudent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
