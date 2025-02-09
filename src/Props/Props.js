import React, { useContext } from "react";
import { UserContext } from "../components/context/UserContext";
import { useState } from 'react';
import PropsTest from '../components/PropsSecond/PropsTest'

function Props() {

    const { name, updateName } = useContext(UserContext);

  return (
    <>
        {/* <h1>Props Data: Name {props.name}</h1>
        <h2>Props Data: Location {props.location}</h2> */}
        <h3>Context Name Data: {name}</h3>
        <button onClick={updateName}>Change Name</button>
    </>
  )
}

export default Props