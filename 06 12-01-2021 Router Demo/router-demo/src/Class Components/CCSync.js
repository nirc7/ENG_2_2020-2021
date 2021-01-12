import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class CCSync extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grade: 0
    }
  }

  btnSync = () => {

    console.log('before');

    this.setState({
      grade:100
    },()=>{
      console.log('setstate was running grade = ', this.state.grade );
    });

    console.log('after' + this.state.grade); //0
  }

  render() {

   // let output = Users.map(user => <a href="#" data-userid={user.id} onClick={()=> this.btnX(user.id)}>X</a> );

    return (
      <div>
        <h2>Sync</h2>
        <button onClick={this.btnSync} >sync</button>
       
      </div>
    )
  }
}
export default withRouter(CCSync);
