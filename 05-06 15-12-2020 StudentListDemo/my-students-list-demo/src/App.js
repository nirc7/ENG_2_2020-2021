import React, { Component } from 'react';
import './App.css';
import CCAddStudent from './ClassComponents/CCAddStudent';
import Student from './Classes/Student';
import FCStudentList from './FunctionalComponents/FCStudentList';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        new Student(7, "avi"),
        new Student(2, "ben"),
        new Student(9, "charlie"),
      ]
    }
  }

  //atheer -

  getStudentfromChild = (stud) => {
    let newStudents = [...this.state.students, stud];
    this.setState({ students: newStudents });
  }

  getId2RemovefromChild = (id) => {
    let newStudents = this.state.students.filter(stud => stud.id !== id);
    this.setState({ students: newStudents });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CCAddStudent sendStudentfromParent={this.getStudentfromChild} />
          <FCStudentList
            sendId2RemovefromParent={this.getId2RemovefromChild}
            sendId2RemovefromParent2={this.getId2RemovefromChild}
            students={this.state.students} />
            
        </header>
      </div>
    )
  }
}

