import React from 'react';

export default function FCStudent(props) {

  let num=7;
  num++;
  console.log(num);

  //props.name = "nir:)"; //ERROR! props are read only!

  return (
    <div style={{border:'solid black 2px', margin:2}}>
      <h3>Student</h3>
      name: {props.name }  { props.name === "avi"  &&  ' is the graet!' }   <br />
      age: {props.age} <br />
      inRup: {props.inRup ? 'Yes' : 'No'} <br />
    </div>
  );

  // if (props.age === 7) {
  //   return (
  //     <div style={{border:'solid black 2px', margin:2}}>
  //       <h3>Student</h3>
  //       name: {props.name }  { props.name === "avi"  &&  ' is the graet!' }   <br />
  //       age: {props.age} <br />
  //       inRup: {props.inRup ? 'Yes' : 'No'} <br />
  //     </div>
  //   );
  // }
  // else{
  //   return(<div>not 7</div>);
  // }  
}