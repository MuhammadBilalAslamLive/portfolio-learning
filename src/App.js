import { useState } from "react"
import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Signup from "./components/Signup/Signup.js"
import Portfolio from "./components/Portfolio/Portfolio.js"
import styles from "./App.module.css"
import Props from "./Props/Props.js"

function App() { 

  const userDetails = {
    username: "Mohsin",
    email: "mohsin@gmail.com",
    address: "Australia"
  }

  return (
    <div className={styles.app}>
      <Props userDetails = {userDetails} />
    </div>
  )
}

export default App

