import React from 'react'
import { useState } from 'react';
import PropsTest from '../components/PropsSecond/PropsTest'

function Props(props) {

    const { username, email, address } = props.userDetails;

    console.log("props data ===>",props)

  return (
    <>
        {/* <h1>Props Data: Name {props.name}</h1>
        <h2>Props Data: Location {props.location}</h2> */}
        <h3>Props Data: username {username}</h3>
       <PropsTest userDetails = {props.userDetails} />
    </>
  )
}

export default Props