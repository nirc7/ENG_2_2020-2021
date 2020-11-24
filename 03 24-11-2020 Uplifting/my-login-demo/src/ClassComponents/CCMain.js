import React, { Component } from 'react';
import FCMessage from '../FunctionalComponents/FCMessage';
import FCMessage2 from '../FunctionalComponents/FCMessage2';
import CCLogin from './CCLogin';

export default class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDataFromChild = (userData) => {
    console.log('in parent got data from child', userData);
    this.setState({
      userd: userData,
      isLoggedIn: userData !== undefined,
      userN: userData !== undefined ? userData.name : ''
    });
  }

  render() {
    return (
      <div>
        <CCLogin sendData2Parent={this.getDataFromChild} />
        <FCMessage check={this.state.userd} /> <br/>
        <FCMessage2 isLoggedIn={this.state.isLoggedIn} userName={this.state.userN} />
      </div>
    )
  }
}
