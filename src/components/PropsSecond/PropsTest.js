import React from 'react'

function PropsTest(props) {

  const { username, email, address } = props.userDetails; // object distructuring

  return (
    <>
        <h1>Props Data: Name {username}</h1>
        <h2>Props Data: Location {email}</h2>
        <h3>Props Data: Degree {address}</h3>
    </>
  )
}

export default PropsTest
