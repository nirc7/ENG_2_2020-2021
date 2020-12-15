import React, { Component } from 'react';
import './App.css';
import CCStudent from './ClassComponents/CCStudent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //userName: 'enter your name...'
    }

    this.txtInput1 = null;
    this.txtInput2 = React.createRef();
  }

  btnSayHello = () => {
    //alert(this.stam);
    alert('hello ' + this.state.userName);
  }

  onTextChanged = (e) => {
    let output = e.target.value.toUpperCase().replace('6', '');
    this.setState({ userName: output });
  }

  btnRef2 = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);

    this.setState({
      txt2: this.txtInput2.current.value,
      txt1: this.txtInput1.value
    });
  }

  render() {
    let Users = [
      { id: 7, name: 'avi' },
      { id: 1, name: 'ben' },
      { id: 5, name: 'chralie' }
    ];

    let usersLi = Users.map((user, index) =>
      <li key={user.id}><a href="#">id={user.id} -- name={user.name}</a></li>
    );

    return (
      <div className="App">
        <header className="App-header">
          not connected to state input <input type="text" name="stam" /><br />

          connected to state input WO onchange
          <input type="text" value={this.state.userName} /><br />

          connected to state input With onchange
          <input type="text" placeholder="enter your name..." value={this.state.userName}
            onChange={this.onTextChanged} />

          <button onClick={this.btnSayHello} >say hello</button> <br />

          <input type="text" ref={this.txtInput2} />
          <span style={{ marginRight: 50 }} />
          hello1 {this.state.txt2}

          <input type="text" ref={(input) => { this.txtInput1 = input }} />
          <span style={{ marginRight: 50 }} />
          hello2 {this.state.txt1}

          <input type="button" onClick={this.btnRef2} value="using refs" />


          <CCStudent id={7} name="avi" />
          <CCStudent id={7} />
          <CCStudent name="avi" />
          <CCStudent />
          <CCStudent id="ben" name={8} />

          <ul>
            {usersLi}
          </ul>
        </header>
      </div >
    );
  }
}
export default App;
