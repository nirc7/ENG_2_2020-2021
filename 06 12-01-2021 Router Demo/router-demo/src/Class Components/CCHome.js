import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class CCHome extends Component {


  btngo2studentPWSD = () => {
    var userObj = {
      userId: 77,
      userName: 'avi'
    };

    this.props.history.push({
      pathname: '/student/' + 18,
      search: '?query=abc',
      state: { userObj2Send: userObj }
    });
  }

  render() {
    return (
      <div>
        <h2>CCHome</h2>
        <button onClick={this.btngo2studentPWSD}>go 2 student page with some data</button>
      </div>
    )
  }
}

export default withRouter(CCHome);