import React from 'react';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './FunctionalComponents/FCStudent';

const App =
  <div style={{margin:10}}>
    {EHeader}
    <h4>h4</h4>
    <FCStudent  name="avi" age={7} inRup={true} />
    <FCStudent  name="ben" age={8} inRup={false} />
  </div>;

//const App2 = <div>Hello World!3</div>;
// const App3 = <div>Hello World!3</div>;

export default App;