import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import Student from '../Classes/Student';

export default class CCAddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  chgId = (e) => {
    this.setState({ txtId: e.target.value });
  }

  chgName = (e) => {
    this.setState({ txtName: e.target.value });
  }

  btnAddStudent = () => {
    
    let newStudent = new Student(this.state.txtId, this.state.txtName);
    console.log(newStudent);
    console.log(this.props);
    console.log(this.props.sendStudentfromParent);
    this.props.sendStudentfromParent(newStudent);
  }

  render() {
    return (
      <div>
        <TextField label="id"
          variant="outlined"
          color="secondary"
          onChange={this.chgId}
          style={{ backgroundColor: 'lightgrey', borderRadius: 5, margin: 10 }} />

        <TextField label="name"
          variant="outlined"
          onChange={this.chgName}
          style={{ backgroundColor: 'lightgrey', borderRadius: 5, margin: 10 }} /> <br/>

        <IconButton aria-label="delete" onClick={this.btnAddStudent}>
          <PersonAddTwoToneIcon style={{ color: 'green', margin: 5, fontSize: 45 }} />
        </IconButton>
      </div>
    )
  }
}
