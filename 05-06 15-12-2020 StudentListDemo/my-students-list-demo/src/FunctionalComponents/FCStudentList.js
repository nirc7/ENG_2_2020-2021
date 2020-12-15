import React from 'react'
import FCStudentItem from './FCStudentItem';
export default function FCStudentList(props) {

  function sendItem2Remove(id){
    props.sendId2RemovefromParent2(id);
  }

  let students2Show = props.students.map(stud =>
    <FCStudentItem key={stud.id} student={stud}
      sendId2RemovefromParent={props.sendId2RemovefromParent} 
      sendId2RemovefromParent2={sendItem2Remove}/>);

  return (
    <div>
      {students2Show}
    </div>
  )
}
