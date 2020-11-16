import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FCStudent(props) {

  let name="avi";
  let num = 7;
  num++;
  console.log(num);
  //props.age=19; //ERROR! props are read only!

  function btnAddOne() {
    console.log(num);
    num++;
    console.log(num);
  }

  function chgName(e) {
    console.log(e.target.value);
    name = e.target.value;
  }

  return (
    <div style={{ margin: 20, border: 'solid black 2px', padding: 15 }}>
      Student <br />
        name: {props.name} { props.name === "avi" && ' is the great:)'} <br />
        age:  {props.age * 2}<br />
        inRup {props.inRup} { props.inRup ? 'Yes' : 'No'} <br />
      <Button variant="success" size="sm" style={{ margin: 5 }}
        onClick={btnAddOne} >Add One</Button> <br />
      num= {num} <br />
      <input type="text" onChange={chgName} /> <br/>
      name = {name}
    </div>
  );

  // if (props.age === 7) {
  //   return (
  //     <div style={{ margin: 20, border: 'solid black 2px' }}>
  //       Student2 <br />
  //         name: {props.name} { props.name !== "avi" && ' is the great:)'} <br />
  //         age:  {props.age*2}<br />
  //         inRup {props.inRup} { props.inRup ? 'Yes' : 'No'}
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div>not 7</div>
  //   );
  // }


}