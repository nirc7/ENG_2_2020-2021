import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverTwoTone from '@material-ui/icons/DeleteForeverTwoTone';

export default function FCStudentItem(props) {

  function btnRemoveById() {
    props.sendId2RemovefromParent(props.student.id);
  }

  function btnRemoveById2() {
    props.sendId2RemovefromParent2(props.student.id);
  }

  return (
    <div>
      <p style={{
        border: 'solid green 1px', padding: 15,
        borderRadius: 5
      }} >id={props.student.id} name={props.student.name}
        <IconButton aria-label="delete" onClick={btnRemoveById} >
          <DeleteForeverTwoTone style={{ color: 'red', fontSize: 35 }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={btnRemoveById2} >
          <DeleteForeverTwoTone style={{ color: 'blue', fontSize: 35 }} />
        </IconButton></p>
    </div>
  )
}
