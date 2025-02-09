import { useState } from "react"
import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Signup from "./components/Signup/Signup.js"
import Portfolio from "./components/Portfolio/Portfolio.js"
import styles from "./App.module.css"
import Props from "./Props/Props.js"
import { UserProvider } from "./components/provider/UserProvider.js";

function App() { 

  const userDetails = {
    username: "Bilal",
    email: "mohsin@gmail.com",
    address: "Australia"
  }

  return (
    <div className={styles.app}>
      <UserProvider>
       <Props/>
      </UserProvider>
    </div>
  )
}

export default App

