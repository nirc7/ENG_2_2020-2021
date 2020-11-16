import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 100,
      seats: 4
    };
  }


  btnAddOne = () => {
    //this.state.speed = this.state.speedd+1 ; //ERROR!
    //this.setState({speed : 200}); //not dependency!

    this.setState((prev) => ({
      speed : prev.speed + 1,
      seats: prev.seats + 2,
      color: 'red'
    }));  //with dependency
  }

  render() {
    return (
      <div style={{ margin: 20, border: 'solid green 2px', padding: 15 }}>
        <div>Car2</div>
        Model = { this.props.model} <br />
        Speed = { this.state.speed} < br />
        Seats = { this.state.seats}  <br />
        Color = { this.state.color === undefined ? 'no color yet!' : this.state.color}   <br />
        <Button variant="warning" size="sm" style={{ margin: 5 }}
          onClick={this.btnAddOne} >Add One</Button> <br />
      </div>
    );
  }
}