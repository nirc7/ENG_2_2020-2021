import React from 'react'

export default function FCMessage(props) {
  return (
    <div>
      { props.check !== undefined ?
        `hello ${props.check.name} u r logged in:)` :
        'not logged in'}
    </div>
  )
}
