import React, { useState } from 'react'
import { UserContext } from "../context/UserContext";

function UserProvider({children}) {
    const [name, setName] = useState("Bilal Aslam");

    const updateName = () => {
      setName("Mohsin");
    };
  
    return (
      <UserContext.Provider value={{ name, updateName }}>
        {children}
      </UserContext.Provider>
    );
}

export {UserProvider};
