import React from 'react'

export default function FCMessage2(props) {
  return (
    <div>
        FCMessage2
      { props.isLoggedIn ?
        `hello ${props.userName} u r logged in:)` :
        'not logged in'}
    </div>
  )
}