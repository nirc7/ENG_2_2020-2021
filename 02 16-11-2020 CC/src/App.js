import React from 'react';
import './App.css';
import CCCar from './ClassComponents/CCCar';
import ESmallHeader from './Elements/ESmallHeader';
import FCStudent from './FunctionalComponents/FCStudent';

const App =
  <div>
    <div style={{ margin: 15, backgroundColor: "gray" }} >
      <center>
        <h1>Hello World!</h1>
        <h3 className="nirStyle">ruppin</h3>
      </center>
    </div>

    <CCCar model="bmw" />

    {ESmallHeader}
    {ESmallHeader}

    <FCStudent  name="avi" age={7} inRup={true}  />
    <FCStudent  name="ben" age={8} inRup={false} />

  </div>
//const App2 = <div>Hello World!</div>
//const App3 = <div>Hello World!</div>
export default App;