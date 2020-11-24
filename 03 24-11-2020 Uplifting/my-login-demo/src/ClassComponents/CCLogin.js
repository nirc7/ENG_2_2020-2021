import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

const Users = [
  { email: 'avi@a.com', pass: 'avi123', name: 'avi' },
  { email: 'ben@a.com', pass: 'ben123', name: 'ben' },
  { email: 'charlie@a.com', pass: 'charlie123', name: 'charlie' },
];

export default class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  btnLogin = () => {
    let check = Users.find((user) =>
      user.email === this.state.email && user.pass === this.state.pass);

    if (check !== undefined) {
      this.setState({ status: 'hello ' + check.name + ' u r logged in ' });
    }
    else {
      this.setState({ status: 'not logged in' });
    }
  }

  chgEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  chgPass = (e) => {
    //console.log(this.state.pass);
    this.setState({ pass: e.target.value });
    //console.log(this.state.pass);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <TextField label="Email"
          onChange={this.chgEmail} /> <br /> <br />

        <TextField label="Pass" type="password"
          onChange={this.chgPass} />  <br /> <br />

        <Button
          color="primary" size="small"
          variant="outlined" onClick={this.btnLogin}>Login</Button>

        <h4>{this.state.status}</h4>
      </div>
    )
  }
}
